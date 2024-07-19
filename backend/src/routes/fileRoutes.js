const express = require('express');
const { getFiles, createFile, renameFile, deleteFile, updateFileContent } = require('../controllers/fileController');
const protect = require('../middlewares/authMiddleware');
const fileRouter = express.Router();

fileRouter.route('/').get(protect, getFiles).post(protect, createFile);
fileRouter.route('/rename').put(protect, renameFile);
fileRouter.route('/delete').delete(protect, deleteFile);
fileRouter.route('/:id').put(protect, updateFileContent);

module.exports = fileRouter;
