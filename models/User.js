const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  monthlyBudget: { type: Number, default: 50000 }
});
module.exports = mongoose.model('User', UserSchema);
