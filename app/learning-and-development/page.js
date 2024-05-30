import CustomAppbar from "@/components/customAppbar";
import { Box } from "@mui/material";
import React from "react";
import LearningAndDevelopment from "./learningAndDevelopment";
import Footer from "@/components/footer";

const page = () => {
  return (
    <Box>
      <CustomAppbar />
      <LearningAndDevelopment />
      <Footer />
    </Box>
  );
};

export default page;
