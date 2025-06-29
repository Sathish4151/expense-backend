const mongoose = require('mongoose');
const ExpenseSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  title: String,
  amount: Number,
  category: String,
  type: { type: String, enum: ['Need', 'Want'] },
  date: { type: Date, default: Date.now },
  description: { type: String, default: '' }
});
module.exports = mongoose.model('Expense', ExpenseSchema);
