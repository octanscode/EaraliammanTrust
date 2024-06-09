"use client";
import CustomAppbar from "@/components/customAppbar";
import { Box } from "@mui/material";
import React from "react";
import AboutUs from "./aboutUs";
import Footer from "@/components/footer";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { setCurrActiveNavItem } from "@/store/currActiveNavItem";

const page = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setCurrActiveNavItem(1));
  }, []);
  return (
    <Box>
      <CustomAppbar />
      <AboutUs />
      <Footer />
    </Box>
  );
};

export default page;
