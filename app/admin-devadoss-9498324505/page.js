"use client";
import CustomAppbar from "@/components/customAppbar";
import Footer from "@/components/footer";
import { Box } from "@mui/material";
import React, { useEffect } from "react";
import AdminPage from "./adminPage";
import { useDispatch } from "react-redux";
import { resetLoginData } from "@/store/loginData";

const page = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(resetLoginData());
  }, []);

  return (
    <Box>
      <CustomAppbar />
      <AdminPage />
      <Footer />
    </Box>
  );
};

export default page;
