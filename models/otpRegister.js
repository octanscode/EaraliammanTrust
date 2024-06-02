// models/Transaction.js
import mongoose from "mongoose";

const OTPRegisterSchema = new mongoose.Schema({
  mobileNumber: {
    type: String,
    required: true,
    unique: true,
  },
  otp: {
    type: String,
    required: true,
  },
  expiryDate: {
    type: Date,
    required: true,
  },
});

const OTPRegister =
  mongoose.models.OTPRegister ||
  mongoose.model("OTPRegister", OTPRegisterSchema);

export default OTPRegister;
