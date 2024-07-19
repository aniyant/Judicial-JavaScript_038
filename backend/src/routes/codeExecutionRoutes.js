const express = require('express');
const codeExecuteRouter = express.Router();
const { exec } = require('child_process');

codeExecuteRouter.post('/', (req, res) => {
  const { content, type } = req.body;

  let command;
  switch (type) {
    case 'javascript':
      command = `node -e "${content.replace(/"/g, '\\"')}"`;
      break;
    case 'python':
      command = `python -c "${content.replace(/"/g, '\\"')}"`;
      break;
    default:
      return res.status(400).json({ message: 'Unsupported language' });
  }

  exec(command, (error, stdout, stderr) => {
    if (error) {
      return res.status(500).json({ message: stderr || 'Execution error' });
    }
    res.json({ output: stdout });
  });
});

module.exports = codeExecuteRouter;
