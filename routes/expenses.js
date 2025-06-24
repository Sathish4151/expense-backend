const express = require('express');
const router = express.Router();
const Expense = require('../models/Expense');
const auth = require('../middleware/authMiddleware');

// Get all expenses for user
router.get('/', auth, async (req, res) => {
  const expenses = await Expense.find({ user: req.user.id });
  res.json(expenses);
});

// Add expense
router.post('/', auth, async (req, res) => {
  const newExp = new Expense({ ...req.body, user: req.user.id });
  const exp = await newExp.save();
  res.json(exp);
});

// Update expense
router.put('/:id', auth, async (req, res) => {
  const exp = await Expense.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(exp);
});

// Delete expense
router.delete('/:id', auth, async (req, res) => {
  await Expense.findByIdAndDelete(req.params.id);
  res.json({ msg: 'Deleted' });
});

module.exports = router;
