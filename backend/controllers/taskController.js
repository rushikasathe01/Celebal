const Task = require('../models/taskModel');

// Get all tasks
exports.getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find({ createdBy: req.user._id });
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Create task
exports.createTask = async (req, res) => {
  const { title, description, deadline, assignee, category } = req.body;
  try {
    const task = new Task({
      title,
      description,
      deadline,
      assignee,
      category,
      createdBy: req.user._id
    });
    const savedTask = await task.save();
    res.status(201).json(savedTask);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Update task status
exports.updateTaskStatus = async (req, res) => {
  const { status } = req.body;
  try {
    const task = await Task.findById(req.params.id);
    if (!task) return res.status(404).json({ message: 'Task not found' });

    task.status = status;
    const updatedTask = await task.save();
    res.json(updatedTask);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// ✅ Update task details
exports.updateTaskDetails = async (req, res) => {
  const { title, description, deadline, assignee, category } = req.body;

  try {
    const task = await Task.findById(req.params.id);
    if (!task) return res.status(404).json({ message: 'Task not found' });

    task.title = title || task.title;
    task.description = description || task.description;
    task.deadline = deadline || task.deadline;
    task.assignee = assignee || task.assignee;
    task.category = category || task.category;

    const updatedTask = await task.save();
    res.json(updatedTask);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// ✅ Assign team to task
exports.assignTaskTeam = async (req, res) => {
  const { team } = req.body;

  try {
    const task = await Task.findById(req.params.id);
    if (!task) return res.status(404).json({ message: 'Task not found' });

    task.team = team; // Ensure your taskModel has a 'team' field (Array)

    const updatedTask = await task.save();
    res.status(200).json({
      message: 'Task team assigned successfully',
      task: updatedTask
    });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
