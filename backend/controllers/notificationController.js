const Notification = require('../models/notificationModel');

// Get all notifications
exports.getAllNotifications = async (req, res) => {
  try {
    const notifications = await Notification.find({ user: req.user._id });
    res.json(notifications);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Create notification
exports.createNotification = async (req, res) => {
  const { message, date } = req.body;
  try {
    const notification = new Notification({
      message,
      date,
      user: req.user._id
    });
    const savedNotification = await notification.save();
    res.status(201).json(savedNotification);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
