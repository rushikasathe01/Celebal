const Expense = require('../models/expenseModel');

const createExpense = async (req, res) => {
  try {
    const { title, amount, category, date } = req.body;

    if (!title || !amount || !category || !date) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const expense = await Expense.create({
      user: req.user._id,
      title,
      amount,
      category,
      date
    });

    res.status(201).json(expense);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

const getExpenses = async (req, res) => {
  try {
    const expenses = await Expense.find({ user: req.user._id });
    res.json(expenses);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });

  }

  
};



module.exports = { createExpense, getExpenses };
