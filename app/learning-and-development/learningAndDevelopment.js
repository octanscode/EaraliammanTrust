import { Box } from "@mui/material";
import React from "react";
import DevelopmentSchemes from "./developmentSchemes";
import OurWorks from "./ourWorks";
import HeroSection from "./heroSection";

const LearningAndDevelopment = () => {
  return (
    <Box sx={{ backgroundColor: "#f5f5f5" }}>
      <HeroSection />
      <DevelopmentSchemes />
      <OurWorks />
    </Box>
  );
};

export default LearningAndDevelopment;
