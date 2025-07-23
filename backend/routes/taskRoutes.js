const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');
const { protect } = require('../middleware/authMiddleware');
const Task = require('../models/taskModel');

router.get('/', async (req, res) => {
  const tasks = await Task.find();
  res.json(tasks);
});

// Create new task
router.post('/', async (req, res) => {
  const task = new Task({
    title: req.body.title,
    description: req.body.description
  });
  await task.save();
  res.status(201).json(task);
});
// All routes here are protected
router.get('/', protect, taskController.getAllTasks);
router.post('/create', protect, taskController.createTask);
router.put('/:id/status', protect, taskController.updateTaskStatus);

// ✅ Update task details
router.put('/:id', protect, taskController.updateTaskDetails);

// ✅ Assign team to task
router.post('/:id/assign', protect, taskController.assignTaskTeam);

module.exports = router;
