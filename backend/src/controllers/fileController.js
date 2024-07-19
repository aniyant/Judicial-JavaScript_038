const File = require('../models/File');

// Get all files and folders of a user
exports.getFiles = async (req, res) => {
  try {
    const files = await File.find({ user: req.user._id, parentId: null });
    res.json(files);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Create a new file or folder
exports.createFile = async (req, res) => {
  const { name, type, parentId } = req.body;

  if (!name || !type) {
    return res.status(400).json({ message: 'Name and type are required' });
  }

  try {
    const file = new File({
      user: req.user._id,
      name,
      type,
      parentId: parentId || null,
    });

    const createdFile = await file.save();
    res.status(201).json(createdFile);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Rename a file or folder
exports.renameFile = async (req, res) => {
  const { id, newName } = req.body;

  try {
    const file = await File.findById(id);

    if (file.user.toString() !== req.user._id.toString()) {
      return res.status(401).json({ message: 'Not authorized' });
    }

    file.name = newName;
    const updatedFile = await file.save();
    res.json(updatedFile);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Delete a file or folder
exports.deleteFile = async (req, res) => {
  const { id } = req.body;

  try {
    const file = await File.findById(id);

    if (file.user.toString() !== req.user._id.toString()) {
      return res.status(401).json({ message: 'Not authorized' });
    }

    await file.remove();
    res.json({ message: 'File removed' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.updateFileContent = async (req, res) => {
  const { id, content } = req.body;

  try {
    const file = await File.findById(id);

    if (file.user.toString() !== req.user._id.toString()) {
      return res.status(401).json({ message: 'Not authorized' });
    }

    file.content = content;
    const updatedFile = await file.save();
    res.json(updatedFile);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};