"use client";
import { setLoginData } from "@/store/loginData";
import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";

const AdminPage = () => {
  const [email, setEmail] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [isOtpOpen, setIsOtpOpen] = useState(false);
  const [otp, seOtp] = useState("");
  const [buttonText, setButtonText] = useState("Get OTP");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email !== "devadoss9498324505@eraliammantrust.com") {
      setErrorMsg("Please enter correct email id");
    } else {
      setErrorMsg("");
      if (buttonText === "Get OTP") SendOtp();
      else if (isOtpOpen && buttonText === "Submit") {
        VerifyOtp();
      }
    }
  };

  const SendOtp = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/sendOtpToAdmin`,
        {
          credentials: "include",
        }
      );
      if (response.ok) {
        console.log("Response is ", response);
        setIsOtpOpen(true);
        setButtonText("Submit");
      } else {
        setErrorMsg("Error while sending OTP. Please try back in sometime");
      }
    } catch (error) {
      setErrorMsg("Error while sending OTP. Please try back in sometime");
    }
  };

  const VerifyOtp = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/verifyOtp`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify({
            otp: otp,
          }),
        }
      );
      console.log("Response is ", response);
      if (response.ok) {
        window.location.href = "/view-transactions";
        dispatch(setLoginData(true));
      } else {
        const errorData = await response.json();
        setErrorMsg(errorData.message);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Box
      component={"form"}
      onSubmit={handleSubmit}
      sx={{
        height: "100vh",
        backgroundImage: "linear-gradient(180deg, #2af598 0%, #009efd 100%)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <TextField
        id="email"
        type="email"
        placeholder="Email"
        variant="outlined"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        sx={{ backgroundColor: "white", width: "50%" }}
        required
      />
      <TextField
        id="otp"
        type="text"
        placeholder="OTP"
        variant="outlined"
        value={otp}
        onChange={(e) => seOtp(e.target.value)}
        sx={{
          backgroundColor: "white",
          width: "50%",
          mt: 2,
          display: isOtpOpen ? "flex" : "none",
        }}
      />
      <Button
        variant="standard"
        sx={{ display: isOtpOpen ? "flex" : "none", width: "50%" }}
        onClick={SendOtp}
      >
        Resend OTP
      </Button>
      <Typography sx={{ color: "red", mt: 0.5, fontWeight: 500 }}>
        {errorMsg}
      </Typography>
      <Button
        type="submit"
        sx={{
          backgroundColor: "black",
          color: "white",
          width: "50%",
          mt: 2,
          pt: 1.5,
          pb: 1.5,
          "&:hover": {
            backgroundColor: "black",
            color: "white",
          },
        }}
      >
        {buttonText}
      </Button>
    </Box>
  );
};

export default AdminPage;
