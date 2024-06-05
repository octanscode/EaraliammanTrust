// models/Transaction.js
import mongoose from "mongoose";

const EventSchema = new mongoose.Schema({
  eventName: {
    type: String,
    required: true,
    unique: true,
  },
  date: {
    type: Date,
    required: true,
  },
  content: [String],
  images: [String],
});

const Event = mongoose.models.Event || mongoose.model("Event", EventSchema);

export default Event;
