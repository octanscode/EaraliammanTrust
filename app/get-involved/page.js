import CustomAppbar from "@/components/customAppbar";
import Footer from "@/components/footer";
import { Box } from "@mui/material";
import React from "react";
import GetInvolved from "./getInvolved";

const page = () => {
  return (
    <Box>
      <CustomAppbar />
      <GetInvolved />
      <Footer />
    </Box>
  );
};

export default page;
