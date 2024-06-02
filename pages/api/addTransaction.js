// pages/api/addToTransactions.js
import connectToDatabase from "../../lib/mongoose";
import TransactionHistory from "../../models/transactionHistory";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  const {
    transactionId,
    date,
    amount,
    receipientName,
    projectName,
    description,
  } = req.body;

  if (
    !transactionId ||
    !amount ||
    !date ||
    !description ||
    !receipientName ||
    !projectName
  ) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  try {
    await connectToDatabase();

    const transaction = new TransactionHistory({
      transactionId,
      date,
      amount,
      receipientName,
      projectName,
      description,
    });

    await transaction.save();

    res
      .status(201)
      .json({ message: "Transaction added", transactionId: transaction._id });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}
