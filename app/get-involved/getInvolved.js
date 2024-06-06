import { Box } from "@mui/material";
import React from "react";
import HeroSection from "./heroSection";
import Content from "./content";

const GetInvolved = () => {
  return (
    <Box>
      <HeroSection />
      <Box sx={{ mt: 10 }} />
      <Content />
      <Box sx={{ mt: 20 }} />
    </Box>
  );
};

export default GetInvolved;
