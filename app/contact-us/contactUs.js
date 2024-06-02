import { Box } from "@mui/material";
import React from "react";
import HeroSection from "./heroSection";
import ContactForm from "./contactForm";
import ContactModes from "./contactModes";
import MapLocation from "./mapLocation";

const ContactUs = () => {
  return (
    <Box>
      <HeroSection />
      <Box sx={{ mt: 14 }} />
      <ContactForm />
      <Box sx={{ mt: 14 }} />
      <ContactModes />
      <Box sx={{ mt: 14 }} />
      <MapLocation />
      <Box sx={{ mt: 14 }} />
    </Box>
  );
};

export default ContactUs;
