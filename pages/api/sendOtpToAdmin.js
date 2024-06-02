import OTPRegister from "@/models/otpRegister";
import connectToDatabase from "../../lib/mongoose";
import request from "request";

export default async function handler(req, res) {
  if (req.method !== "GET") {
    res.setHeader("Allow", ["GET"]);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  const GenerateSixDigitOTP = () => {
    const otp = Math.floor(100000 + Math.random() * 900000);
    return otp.toString();
  };

  try {
    await connectToDatabase();
    const mobileNumber = process.env.NEXT_PUBLIC_ADMIN_MOBILE;
    const otp = GenerateSixDigitOTP();
    console.log("Generated OTP is ", otp);
    console.log("Mobile Number is ", mobileNumber);

    const otpRegister = await OTPRegister.findOne({
      mobileNumber: mobileNumber,
    });

    console.log("OTP Register Data is ", otpRegister);
    console.log("Current Time is ", Date.now());
    console.log("After 5 mins is ", Date.now() + 5 * 60 * 1000);

    if (!otpRegister) {
      const otpData = new OTPRegister({
        mobileNumber: mobileNumber,
        otp: otp,
        expiryDate: Date.now() + 5 * 60 * 1000,
      });
      await otpData.save();
    } else {
      otpRegister.otp = otp;
      otpRegister.expiryDate = Date.now() + 5 * 60 * 1000;
      await otpRegister.save();
    }

    const options = {
      method: "GET",
      url: `https://api.authkey.io/request?authkey=665dfb34d6f620d9&mobile=${mobileNumber}&country_code=91&sid=10995&name=Silvered&otp=${otp}&company=Eraliamman Charitable Trust`,
    };

    request(options, function (error, response, body) {
      console.log("Response Body is");
      if (error) {
        console.log("Error while sending OTP");
        return res.status(500).json({
          isSuccess: false,
        });
      }
      if (response.body.includes("Submitted Successfully")) {
        console.log("OTP Sent Successfully!");
        return res.status(200).json({
          isSuccess: true,
        });
      } else {
        console.log("Could not send OTP");
        return res.status(500).json({
          isSuccess: false,
        });
      }
    });
  } catch (error) {
    console.error(error);
    console.log("Send OTP Failed");
    res.status(500).json({ message: "Internal Server Error" });
  }
}
