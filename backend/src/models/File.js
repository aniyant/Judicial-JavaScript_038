const mongoose = require('mongoose');

const fileSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User',
  },
  name: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    default: '',
  },
  type: {
    type: String,
    enum: ['file', 'folder'],
    required: true,
  },
  parentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'File',
    default: null,
  },
}, {
  timestamps: true,
});

const File = mongoose.model('File', fileSchema);
module.exports = File;
