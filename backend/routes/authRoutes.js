const express = require('express');
const router = express.Router();
const { registerUser, loginUser } = require('../controllers/authController');
router.post('/login', loginUser);


router.post('/register', registerUser);
router.post('/login', loginUser);

// In routes/authRoutes.js

const User = require('../models/userModel'); // adjust the path based on your folder structure

router.get('/all', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});



module.exports = router;
