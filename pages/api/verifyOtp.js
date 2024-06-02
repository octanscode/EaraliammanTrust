import OTPRegister from "@/models/otpRegister";
import { connectToDatabase, sessionMiddleware } from "../../lib/mongoose";

const GetFormattedDate = (isoDateString) => {
  const date = new Date(isoDateString);

  // Get components of the date
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are zero-based
  const day = String(date.getDate()).padStart(2, "0");
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");

  // Format the date and time as 'YYYY-MM-DD HH:mm:ss'
  const formattedDate = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;

  console.log(formattedDate); // Outputs: '2024-06-02 18:22:31'
};

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    console.log("Inside Verify OTP api controller");
    const mobileNumber = process.env.NEXT_PUBLIC_ADMIN_MOBILE;
    const { otp } = req.body;
    console.log("Mobile Number is ", mobileNumber);
    console.log("Entered OTP is ", otp);
    if (!otp) {
      return res.status(400).json({ message: "OTP required" });
    }

    const otpRegister = await OTPRegister.findOne({
      mobileNumber: mobileNumber,
    });

    console.log("OTPRegister Data is ", otpRegister);

    if (otpRegister) {
      let storedOtp = otpRegister.otp;
      let expiryDate = otpRegister.expiryDate;

      console.log("storedOtp is ", storedOtp);
      console.log("expiryDate is ", expiryDate);
      GetFormattedDate(expiryDate);

      if (Date.now() > expiryDate) {
        return res
          .status(400)
          .json({ message: "OTP has expired or is invalid" });
      } else if (storedOtp !== otp) {
        return res.status(400).json({ message: "Incorrect OTP" });
      } else if (storedOtp === otp) {
        res.status(200).json({ message: "OTP verified successfully" });
      }
    } else {
      res.status(500).json({ message: "Internal server Error" });
    }
  } catch (error) {
    return res.status(500).json({ message: "Internal server Error" });
  }
}
