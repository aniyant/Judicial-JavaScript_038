const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const path = require('node:path');
const fs = require('fs');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const fileRoutes = require('./routes/fileRoutes');
const codeExecutionRoutes = require('./routes/codeExecutionRoutes');
// const { notFound, errorHandler } = require('./middlewares/errorMiddleware');
require('dotenv').config();
const { exec } = require('child_process');

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

app.use('/api/auth', authRoutes);
app.use('/api/files', fileRoutes);
app.use('/api/execute', codeExecutionRoutes);
// Language to command mapping
const languageCommands = {
  'javascript': 'node',
  'python': 'python',
  'java': 'java',
  'c': 'gcc',
  'cpp': 'g++',
  // Add other languages and their corresponding commands
};

app.post('/execute', (req, res) => {
  const { language, code, input } = req.body;

  // Ensure the language is supported
  if (!languageCommands[language]) {
    return res.status(400).json({ error: 'Unsupported language' });
  }

  // Create a temporary file to store the code
  const tempDir = path.join(__dirname, 'temp');
  if (!fs.existsSync(tempDir)) {
    fs.mkdirSync(tempDir);
  }
  
  const codeFilePath = path.join(tempDir, `code.${language}`);
  fs.writeFileSync(codeFilePath, code);

  let command;
  if (language === 'javascript' || language === 'python') {
    command = `${languageCommands[language]} ${codeFilePath}`;
  } else if (language === 'java') {
    const className = 'Main'; // Assuming class name is Main
    fs.writeFileSync(path.join(tempDir, 'Main.java'), code);
    command = `javac ${codeFilePath} && java -cp ${tempDir} ${className}`;
  } else if (language === 'c' || language === 'cpp') {
    const outputFilePath = path.join(tempDir, 'a.out');
    command = `${languageCommands[language]} ${codeFilePath} -o ${outputFilePath} && ${outputFilePath}`;
  } else {
    // Handle other languages
  }

  exec(command, (error, stdout, stderr) => {
    fs.unlinkSync(codeFilePath); // Clean up the temp file
    if (error) {
      return res.status(400).json({ error: stderr });
    }
    res.json({ output: stdout });
  });
});
// app.use(notFound);
// app.use(errorHandler);


app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});


const PORT = process.env.PORT || 4500;

app.listen(PORT, () => {
    // database connection
    connectDB();
  console.log(`Server is running on port ${PORT}`);
});
