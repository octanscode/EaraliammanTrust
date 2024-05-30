import CustomAppbar from "@/components/customAppbar";
import Footer from "@/components/footer";
import { Box } from "@mui/material";
import React from "react";
import ContactUs from "./contactUs";

const page = () => {
  return (
    <Box>
      <CustomAppbar />
      <ContactUs />
      <Footer />
    </Box>
  );
};

export default page;
