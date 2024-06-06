import { Box, Typography } from "@mui/material";
import React from "react";
import Opportunities from "./opportunities";
import HowToApply from "./howToApply";
import Volunteer from "@/components/home/volunteer";
import ContactForm from "./contactForm";

const Content = () => {
  return (
    <Box
      sx={{
        width: "100%",
        p: 4,
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Typography variant="h3" sx={{ textAlign: "center", width: "80%" }}>
        Join us in our mission to empower communities and create sustainable
        change. Your involvement can make a significant impact in the lives of
        many.
      </Typography>
      <Opportunities />
      <Box sx={{ mt: 8 }} />
      <HowToApply />
      <Box sx={{ mt: 16 }} />
      <ContactForm />
    </Box>
  );
};

export default Content;
