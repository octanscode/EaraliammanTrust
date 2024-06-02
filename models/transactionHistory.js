// models/Transaction.js
import mongoose from "mongoose";

const TransactionHistorySchema = new mongoose.Schema({
  transactionId: {
    type: String,
    required: true,
    unique: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  receipientName: {
    type: String,
    required: true,
  },
  projectName: {
    type: String,
    required: true,
  },
});

const TransactionHistory =
  mongoose.models.TransactionHistory ||
  mongoose.model("TransactionHistory", TransactionHistorySchema);

export default TransactionHistory;
