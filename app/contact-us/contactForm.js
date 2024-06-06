"use client";
import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useRef, useState } from "react";
import ContactFormImage from "../../public/asset/image/contactus.jpg";
import { PRIMARY_BLUE } from "@/constants";
import emailjs from "@emailjs/browser";
import ConfettiPopup from "@/components/confettiPopup";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const form = useRef();
  const [isSuccessPopupOpen, setIsSuccessPopupOpen] = React.useState(false);

  function SuccessPopupOpenCallback(value) {
    setIsSuccessPopupOpen(value);
  }

  const resetForm = () => {
    setName("");
    setEmail("");
    setMessage("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAIL_JS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAIL_JS_TEMPLATE_ID,
        form.current,
        {
          publicKey: process.env.NEXT_PUBLIC_EMAIL_JS_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          console.log("EMAIL JS MAIL SUCCESS!");
          setIsSuccessPopupOpen(true);
          resetForm();
        },
        (error) => {
          console.log("EMAIL JS MAIL FAILED...", error.text);
          setIsSuccessPopupOpen(false);
        }
      );
  };
  return (
    <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
      <Box
        sx={{ width: "80%", display: "flex", justifyContent: "space-between" }}
      >
        <Box
          sx={{
            width: "50%",
            height: "75vh",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <img
            src={ContactFormImage.src}
            alt="Contact Form Image"
            style={{
              height: "100%",
              width: "100%",
              objectFit: "cover",
            }}
          />
        </Box>
        <Box
          sx={{ width: "40%" }}
          component={"form"}
          onSubmit={handleSubmit}
          ref={form}
        >
          <ConfettiPopup
            open={isSuccessPopupOpen}
            SuccessPopupOpenCallback={SuccessPopupOpenCallback}
          />
          <Typography variant="h2" sx={{ color: "black", textAlign: "center" }}>
            Contact Us
          </Typography>
          <TextField
            id="name"
            placeholder="Name*"
            type="text"
            variant="standard"
            value={name}
            name="contact_name"
            onChange={(e) => setName(e.target.value)}
            sx={{
              mt: 5,
              width: "100%",
              borderBottom: "1px solid #AEAEAE",
              "& .MuiInputBase-root": {
                color: "black",
              },
            }}
            InputProps={{
              disableUnderline: true,
              backgroundColor: "black",
            }}
            required
          />
          <TextField
            id="email"
            type="email"
            required
            placeholder="Email*"
            variant="standard"
            name="contact_email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            sx={{
              mt: 2,
              width: "100%",
              borderBottom: "1px solid #AEAEAE",
              "& .MuiInputBase-root": {
                color: "black",
              },
            }}
            InputProps={{
              disableUnderline: true,
            }}
          />
          <TextField
            id="filled-multiline-static"
            placeholder="Message*"
            name="message"
            multiline
            rows={8}
            variant="standard"
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            sx={{
              mt: 5,
              width: "100%",
              border: "1px solid lightgray",
              p: 2,
              "& .MuiInputBase-root": {
                color: "black",
              },
            }}
            InputProps={{
              disableUnderline: true,
            }}
            inputProps={{
              sx: {
                "&::placeholder": {
                  color: "#AEAEAE",
                  opacity: 1, // otherwise firefox shows a lighter color
                },
              },
            }}
          />
          <Button
            type="submit"
            sx={{
              width: "100%",
              mt: 4,
              pt: 1.5,
              pb: 1.5,
              backgroundColor: PRIMARY_BLUE,
              color: "white",
              "&:hover": {
                backgroundColor: PRIMARY_BLUE,
                color: "white",
              },
            }}
          >
            Submit
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default ContactForm;
