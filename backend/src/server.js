const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const fileRoutes = require('./routes/fileRoutes');
const codeExecutionRoutes = require('./routes/codeExecutionRoutes');
// const { notFound, errorHandler } = require('./middlewares/errorMiddleware');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

app.use('/api/auth', authRoutes);
app.use('/api/files', fileRoutes);
app.use('/api/execute', codeExecutionRoutes);

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
