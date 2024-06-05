// pages/api/getAllEvents.js
import Event from "@/models/event";
import connectToDatabase from "../../lib/mongoose";

export default async function handler(req, res) {
  if (req.method !== "GET") {
    res.setHeader("Allow", ["GET"]);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  try {
    await connectToDatabase();

    const events = await Event.find({}).sort({ date: -1 });
    res.status(200).json({ events });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}
