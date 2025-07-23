const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  title: String,
  description: String,
  deadline: Date,
  assignee: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  category: String,
  status: { type: String, enum: ['in-progress', 'completed'], default: 'in-progress' }
}, { timestamps: true });

module.exports = mongoose.model('Task', taskSchema);
