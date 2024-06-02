// pages/api/getTransactions.js
import connectToDatabase from "../../lib/mongoose";
import TransactionHistory from "../../models/transactionHistory";

export default async function handler(req, res) {
  if (req.method !== "GET") {
    res.setHeader("Allow", ["GET"]);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  try {
    await connectToDatabase();

    const transactions = await TransactionHistory.find({});
    res.status(200).json({ transactions });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}
