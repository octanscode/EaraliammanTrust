"use client";
import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import ContactFormImage from "../../public/asset/image/contactus.jpg";
import { PRIMARY_BLUE } from "@/constants";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  return (
    <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
      <Box sx={{ width: "80%", display: "flex", justifyContent: "center" }}>
        <Box
          sx={{
            width: "48%",
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
              width: "88%",
              objectFit: "cover",
            }}
          />
        </Box>
        <Box sx={{ width: "38%" }}>
          <Typography variant="h2" sx={{ color: "black", textAlign: "center" }}>
            Contact Us
          </Typography>
          <TextField
            id="name"
            placeholder="Name*"
            type="text"
            variant="standard"
            value={name}
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
