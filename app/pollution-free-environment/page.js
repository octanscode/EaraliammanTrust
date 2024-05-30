import CustomAppbar from "@/components/customAppbar";
import { Box } from "@mui/material";
import React from "react";
import PollFreeEnv from "./pollFreeEnv";
import Footer from "@/components/footer";

const page = () => {
  return (
    <Box>
      <CustomAppbar />
      <PollFreeEnv />
      <Footer />
    </Box>
  );
};

export default page;
