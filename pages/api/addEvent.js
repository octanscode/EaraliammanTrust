// pages/api/addEvent.js
import Event from "@/models/event";
import connectToDatabase from "../../lib/mongoose";
import TransactionHistory from "../../models/transactionHistory";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  const { eventName, date, content, images } = req.body;

  try {
    await connectToDatabase();

    const event = new Event({
      eventName,
      date,
      content,
      images,
    });

    await event.save();

    res.status(200).json({ message: "Event added" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}
