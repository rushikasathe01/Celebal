const express = require('express');
const router = express.Router();
const { createExpense, getExpenses, getTotalExpenses } = require('../controllers/expenseController');
const { protect } = require('../middleware/authMiddleware');

router.post('/', protect, createExpense);
router.get('/', protect, getExpenses);

// // ✅ Added route to get total expenses
// router.get('/total', protect, getTotalExpenses);

module.exports = router;
