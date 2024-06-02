"use client";
import React from "react";
import HeroBannerImage from "../../public/asset/image/donate1.jpg";
import { Box, Button, Typography, styled } from "@mui/material";
import { PRIMARY_BLUE } from "@/constants";
import RazorpayButton from "./donateForm";

const HeroSection = () => {
  const ActionBtn = styled(Button)(({ theme }) => ({
    backgroundColor: PRIMARY_BLUE,
    color: "white",
    textTransform: "capitalize",
    marginLeft: 4,
    marginRight: 4,
    borderRadius: 5,
    padding: 8,
    paddingLeft: 22,
    paddingRight: 22,
    "&:hover": {
      backgroundColor: PRIMARY_BLUE,
    },
  }));
  return (
    <Box
      component={"div"}
      sx={{
        width: "100%",
        height: "100vh",
        backgroundImage: `url(${HeroBannerImage.src})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundColor: "#E0E0E0",
      }}
    >
      <Box sx={{ width: "100%", display: "flex", height: "100%" }}>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            height: "100%",
            justifyContent: "center",
            flexDirection: "column",
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            p: 10,
          }}
        >
          <Typography variant="h1" sx={{ color: "white" }}>
            Your Support Transforms Lives
          </Typography>
          <Typography variant="subtitle1" sx={{ color: "white" }}>
            Make a Difference Today – Donate to Eraliamman Charitable Trust
          </Typography>
          <Box sx={{ mt: 3 }}>
            <RazorpayButton />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default HeroSection;
