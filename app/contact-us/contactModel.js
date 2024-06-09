import { Box, Paper, Typography } from "@mui/material";
import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import CallIcon from "@mui/icons-material/Call";
import { PRIMARY_BLUE } from "@/constants";

const ContactModel = ({ type, name, content1 }) => {
  return (
    <Paper
      elevation={3}
      sx={{
        color: "white",
        backgroundColor: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        p: 3,
        height: { xs: "10rem", lg: "10rem" },
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          color: "black",
        }}
      >
        {type === "call" ? (
          <CallIcon sx={{ fontSize: "1.7rem" }} />
        ) : type === "email" ? (
          <EmailIcon sx={{ fontSize: "1.7rem" }} />
        ) : (
          <LocationOnIcon sx={{ fontSize: "1.7rem" }} />
        )}
        <Typography variant="h6" sx={{ ml: 2 }}>
          {name}
        </Typography>
      </Box>
      <Typography variant="subtitle2" sx={{ mt: 2, color: "black" }}>
        {content1}
      </Typography>
    </Paper>
  );
};

export default ContactModel;
