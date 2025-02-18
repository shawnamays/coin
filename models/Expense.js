const mongoose = require("mongoose");

const ExpenseSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  expenseName: {
    type: String,
    required: true,
  },
  expenseCost: {
    type: Number,
    required: true,
  },
  isRecurring: {
    type: Boolean,
    default: false
  //   // added isRecurring as a Boolean to account for the recurring expenses to database, is set to default 'false' -Abdullahi Ali
  },
  date: {
    type: Date
  }
});

module.exports = mongoose.model("Expense", ExpenseSchema);