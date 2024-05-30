import CustomAppbar from "@/components/customAppbar";
import { Box } from "@mui/material";
import React from "react";
import AgriDevelopment from "./agriDevelopment";
import Footer from "@/components/footer";

const Page = () => {
  return (
    <Box>
      <CustomAppbar />
      <AgriDevelopment />
      <Footer />
    </Box>
  );
};

export default Page;
