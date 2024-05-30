"use client";
import React from "react";
import HeroBannerImage from "../../public/asset/image/aboutus.png";
import { Box, Button, Typography, styled } from "@mui/material";
import { PRIMARY_BLUE } from "@/constants";

const HeroSection = () => {
  const ActionBtn = styled(Button)(({ theme }) => ({
    backgroundColor: PRIMARY_BLUE,
    color: "white",
    textTransform: "capitalize",
    marginLeft: 4,
    marginRight: 4,
    borderRadius: "2rem",
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
            backgroundColor: "#060606",
            opacity: 0.68,
            p: 15,
          }}
        >
          <Typography variant="h1" sx={{ color: "wheat", opacity: 1 }}>
            About Us
          </Typography>
          <Typography
            variant="h5"
            sx={{ color: "wheat", opacity: 1, width: "100%" }}
          >
            An international charity for children, we work in almost 100
            countries where the need is greatest, supporting children.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default HeroSection;
