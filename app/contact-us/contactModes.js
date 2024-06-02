import { Box } from "@mui/material";
import React from "react";
import ContactModel from "./contactModel";

const ContactModes = () => {
  return (
    <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
      <Box
        sx={{ width: "80%", display: "flex", justifyContent: "space-between" }}
      >
        <ContactModel
          type={"call"}
          name={"Call Us"}
          content1={"+91 94983 24505"}
        />
        <ContactModel
          type={"email"}
          name={"Email Us"}
          content1={"earaliamman@gmail.com"}
        />
        <ContactModel
          type={"location"}
          name={"Location"}
          content1={
            "No.195, Big Street, Villagam Village, Pandur Post, Thirukazhukundram TALUK, Kanchipuram District - 603109"
          }
        />
      </Box>
    </Box>
  );
};

export default ContactModes;
