// pages/api/news/[id].js

import connectToDatabase from "@/lib/mongoose";
import Event from "@/models/event";

export default async function handler(req, res) {
  if (req.method !== "GET") {
    res.setHeader("Allow", ["GET"]);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  try {
    await connectToDatabase();
    const { id } = req.query;
    const event = await Event.findById(id);
    res.status(200).json({ event });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}
