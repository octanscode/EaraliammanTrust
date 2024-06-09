"use client";
import CustomAppbar from "@/components/customAppbar";
import Footer from "@/components/footer";
import { Box } from "@mui/material";
import React from "react";
import ContactUs from "./contactUs";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { setCurrActiveNavItem } from "@/store/currActiveNavItem";

const page = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setCurrActiveNavItem(6));
  }, []);
  return (
    <Box>
      <CustomAppbar />
      <ContactUs />
      <Footer />
    </Box>
  );
};

export default page;
