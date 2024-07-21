const express = require('express');
const path = require('path');
const fs = require('fs');
const { exec } = require('child_process');
const router = express.Router();

// Language to command mapping
const languageCommands = {
  'javascript': 'node',
  'python': 'python',
  'java': 'javac',
  'c': 'gcc',
  'cpp': 'g++',
};

router.post('/', (req, res) => {
  const { language, code, input } = req.body;

  // Ensure the language is supported
  if (!languageCommands[language]) {
    return res.status(400).json({ error: 'Unsupported language' });
  }

  // Create a temporary directory
  const tempDir = path.join(__dirname, 'temp');
  if (!fs.existsSync(tempDir)) {
    fs.mkdirSync(tempDir);
  }

  // Create a temporary file for the code
  const codeFilePath = path.join(tempDir, `code.${language}`);
  fs.writeFileSync(codeFilePath, code);

  let command;

  // if (input) {
    const inputFilePath = path.join(tempDir, 'input.txt');
    fs.writeFileSync(inputFilePath, input || '');

    if (language === 'javascript') {
      command = `node ${codeFilePath} < ${inputFilePath}`;
    } else if (language === 'python') {
      command = `python3 ${codeFilePath} < ${inputFilePath}`;
    } else if (language === 'java') {
      const javaFilePath = path.join(tempDir, 'Main.java');
      fs.writeFileSync(javaFilePath, code);
      command = `javac ${javaFilePath} && java -cp ${tempDir} Main < ${inputFilePath}`;
    } else if (language === 'c' || language === 'cpp') {
      const outputFilePath = path.join(tempDir, 'a.out');
      command = `${languageCommands[language]} ${codeFilePath} -o ${outputFilePath} && ${outputFilePath} < ${inputFilePath}`;
    } else {
      return res.status(400).json({ error: 'Unsupported language' });
    }
  // } else {
  //   if (language === 'javascript') {
  //     command = `node ${codeFilePath}`;
  //   } else if (language === 'python') {
  //     command = `python3 ${codeFilePath}`;
  //   } else if (language === 'java') {
  //     const javaFilePath = path.join(tempDir, 'Main.java');
  //     fs.writeFileSync(javaFilePath, code);
  //     command = `javac ${javaFilePath} && java -cp ${tempDir} Main`;
  //   } else if (language === 'c' || language === 'cpp') {
  //     const outputFilePath = path.join(tempDir, 'a.out');
  //     command = `${languageCommands[language]} ${codeFilePath} -o ${outputFilePath} && ${outputFilePath}`;
  //   } else {
  //     return res.status(400).json({ error: 'Unsupported language' });
  //   }
  // }

  // Execute the code with the given input
  exec(command, (error, stdout, stderr) => {
    // Clean up the temp files
    fs.unlinkSync(codeFilePath);
    if (input) {
      fs.unlinkSync(path.join(tempDir, 'input.txt'));
    }

    if (error) {
      return res.status(400).json({ error: stderr });
    }
    res.json({ output: stdout });
  });
});

module.exports = router;
