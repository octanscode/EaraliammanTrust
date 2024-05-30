import { Box } from "@mui/material";
import React from "react";
import DevelopmentSchemes from "./developmentSchemes";
import OurWorks from "./ourWorks";
import HeroSection from "./heroSection";

const LearningAndDevelopment = () => {
  return (
    <Box>
      <HeroSection />
      <DevelopmentSchemes />
      <OurWorks />
    </Box>
  );
};

export default LearningAndDevelopment;
