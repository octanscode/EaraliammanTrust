"use client";
import React from "react";
import HeroBannerImage from "../../public/asset/image/volunteer1.png";
import { Box, Button, Typography, styled } from "@mui/material";
import { PRIMARY_BLUE } from "@/constants";

const HeroSection = () => {
  return (
    <Box
      component={"div"}
      sx={{
        width: "100%",
        height: {
          xs: "55vh",
          sm: "100vh",
          md: "100vh",
          lg: "100vh",
          xl: "100vh",
        },
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
            p: { xs: 2, lg: 6 },
          }}
        >
          <Typography variant="h1" sx={{ color: "white", textAlign: "center" }}>
            Make a Difference with Eraliamman Charitable Trust
          </Typography>
          <Typography
            variant="subtitle2"
            sx={{
              color: "white",
              width: { xs: "98%", lg: "70%" },
              textAlign: "center",
              mt: { xs: 1.5, lg: 1 },
            }}
          >
            Do you have a passion for helping others and making a positive
            impact in the community? Join Eraliamman Charitable Trust as a
            volunteer and be a part of our mission to improve the lives of the
            urban and rural poor in Tamil Nadu.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default HeroSection;
