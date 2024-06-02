"use client";
import React from "react";
import HeroBannerImage from "../../public/asset/image/HeroBanner.png";
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
      <Box sx={{ width: "100%", display: "flex", height: "100%" }}>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            alignItems: "flex-end",
            height: "100%",
            justifyContent: "center",
            flexDirection: "column",
            pr: 6,
          }}
        >
          <Typography variant="h1" sx={{ color: "white" }}>
            Small Acts, Big Impacts
          </Typography>
          <Typography variant="subtitle1" sx={{ color: "white" }}>
            Together, Let's Change the world!
          </Typography>
          <Box sx={{ mt: 3 }}>
            <ActionBtn>
              <Typography variant="subtitle1">Donate Now</Typography>
            </ActionBtn>
            <ActionBtn>
              <Typography variant="subtitle1">Join Us as Volunteer</Typography>
            </ActionBtn>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default HeroSection;
