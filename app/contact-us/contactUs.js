import { Box } from "@mui/material";
import React from "react";
import HeroSection from "./heroSection";
import ContactForm from "./contactForm";
import ContactModes from "./contactModes";

const ContactUs = () => {
  return (
    <Box>
      <HeroSection />
      <Box sx={{ mt: 14 }} />
      <ContactForm />
      <Box sx={{ mt: 14 }} />
      <ContactModes />
      <Box sx={{ mt: 10 }} />
    </Box>
  );
};

export default ContactUs;
