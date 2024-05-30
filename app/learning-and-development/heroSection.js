"use client";
import React from "react";
import HeroBannerImage from "../../public/asset/image/learning-and-development/development.png";
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
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundColor: "#E0E0E0",
      }}
    >
      <Box
        sx={{
          width: "100%",
          display: "flex",
          height: "100%",
          justifyContent: "flex-end",
        }}
      >
        <Box
          sx={{
            width: "50%",
            display: "flex",
            alignItems: "center",
            height: "100%",
            justifyContent: "center",
            flexDirection: "column",
            pr: 4,
          }}
        >
          <Typography variant="h2" sx={{ color: "white" }}>
            Empowering Minds, Shaping Futures
          </Typography>
          <Typography variant="subtitle1" sx={{ color: "white" }}>
            Committed to Lifelong Learning
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default HeroSection;
