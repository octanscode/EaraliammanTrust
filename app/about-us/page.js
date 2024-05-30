import CustomAppbar from "@/components/customAppbar";
import { Box } from "@mui/material";
import React from "react";
import AboutUs from "./aboutUs";
import Footer from "@/components/footer";

const page = () => {
  return (
    <Box>
      <CustomAppbar />
      <AboutUs />
      <Footer />
    </Box>
  );
};

export default page;
