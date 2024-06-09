"use client";
import { Box } from "@mui/material";
import React from "react";
import HeroSection from "./heroSection";
import Description from "./description";
import Mission from "./mission";
import Vision from "./vision";
import Values from "./values";

const AboutUs = () => {
  return (
    <Box>
      <HeroSection />
      <Box sx={{ mt: { xs: 5, lg: 10 } }} />
      <Description />
      <Box sx={{ mt: 10 }} />
      <Mission />
      <Box sx={{ mt: 10 }} />
      <Vision />
      <Box sx={{ mt: 10 }} />
      <Values />
      <Box sx={{ mt: 10 }} />
    </Box>
  );
};

export default AboutUs;
