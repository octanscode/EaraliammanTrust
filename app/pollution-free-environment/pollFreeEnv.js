import { Box } from "@mui/material";
import React from "react";
import HeroSection from "./heroSection";
import DevelopmentSchemes from "./developmentSchemes";
import OurWorks from "./ourWorks";

const PollFreeEnv = () => {
  return (
    <Box sx={{ backgroundColor: "#f5f5f5" }}>
      <HeroSection />
      <DevelopmentSchemes />
      <OurWorks />
    </Box>
  );
};

export default PollFreeEnv;
