"use client";
import React from "react";
import HeroBannerImage from "../../public/asset/image/contactus.png";
import { Box, Button, Typography, styled } from "@mui/material";
import { PRIMARY_BLUE } from "@/constants";

const HeroSection = () => {
  return (
    <Box
      component={"div"}
      sx={{
        width: "100%",
        height: {
          xs: "25vh",
          sm: "100vh",
          md: "100vh",
          lg: "100vh",
          xl: "100vh",
        },
        backgroundImage: `url(${HeroBannerImage.src})`,
        backgroundSize: { xs: "contain", lg: "cover" },
        backgroundRepeat: "no-repeat",
        backgroundColor: "#E0E0E0",
      }}
    >
      <Box
        sx={{
          width: "100%",
          display: "flex",
          height: "100%",
        }}
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            alignItems: { xs: "center", lg: "flex-end" },
            height: "100%",
            justifyContent: "center",
            flexDirection: "column",
            // backgroundColor: "rgba(0, 0, 0, 0.6)",
            // p: { xs: 0, lg: 6 },
          }}
        >
          {/* <Typography variant="h1" sx={{ color: "white" }}>
            We're Here for You
          </Typography>
          <Typography variant="h5" sx={{ color: "white" }}>
            Contact Us Anytime!
          </Typography> */}
        </Box>
      </Box>
    </Box>
  );
};

export default HeroSection;
