"use client";
import CustomAppbar from "@/components/customAppbar";
import Footer from "@/components/footer";
import { Box, Toolbar } from "@mui/material";
import React, { useLayoutEffect } from "react";
import ViewTransactions from "./viewTransactions";
import { GetIsAdminLoggedIn } from "@/selector/loginDataSelector";

const page = () => {
  const isLoggedIn = GetIsAdminLoggedIn();
  useLayoutEffect(() => {
    if (!isLoggedIn) {
      window.location.href = "/";
    }
  }, []);
  return (
    <Box>
      <CustomAppbar bgColor={"#f5f5f5"} />
      <Toolbar />
      <ViewTransactions />
      <Footer />
    </Box>
  );
};

export default page;
