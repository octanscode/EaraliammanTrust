"use client";
import CustomAppbar from "@/components/customAppbar";
import Footer from "@/components/footer";
import { Box } from "@mui/material";
import React from "react";
import GetInvolved from "./getInvolved";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { setCurrActiveNavItem } from "@/store/currActiveNavItem";

const page = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setCurrActiveNavItem(4));
  }, []);
  return (
    <Box>
      <CustomAppbar />
      <GetInvolved />
      <Footer />
    </Box>
  );
};

export default page;
