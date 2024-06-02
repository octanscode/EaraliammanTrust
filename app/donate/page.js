import CustomAppbar from "@/components/customAppbar";
import Footer from "@/components/footer";
import { Box } from "@mui/material";
import React from "react";
import Donate from "./donate";

const page = () => {
  return (
    <Box>
      <CustomAppbar />
      <Donate />
    </Box>
  );
};

export default page;
