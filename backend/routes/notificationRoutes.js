const express = require('express');
const router = express.Router();
const notificationController = require('../controllers/notificationController');
const { protect } = require('../middleware/authMiddleware');

// All routes here are protected
router.get('/', protect, notificationController.getAllNotifications);
router.post('/create', protect, notificationController.createNotification);

module.exports = router;
