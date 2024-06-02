// pages/api/deleteTransactions.js
import TransactionHistory from "@/models/transactionHistory";
import connectToDatabase from "../../lib/mongoose";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { transactionIds } = req.body;

  if (!transactionIds || !Array.isArray(transactionIds)) {
    return res.status(400).json({ message: "Invalid request" });
  }

  try {
    await connectToDatabase();

    const result = await TransactionHistory.deleteMany({
      transactionId: { $in: transactionIds },
    });

    res.status(200).json({
      message: "Transactions deleted",
      deletedCount: result.deletedCount,
    });
  } catch (error) {
    console.error("Error deleting transactions:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}
