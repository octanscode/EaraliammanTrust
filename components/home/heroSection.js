"use client";
import React from "react";
import HeroBannerImage from "../../public/asset/image/HeroBanner.png";
import { Box, Button, Typography, styled } from "@mui/material";
import { PRIMARY_BLUE } from "@/constants";
import { StyledCurvedButton } from "../styled/styledCurvedButton";
import { StyledCurvedSmallCaseButton } from "../styled/styledSmallCaseCurvedButton";
import { StyledButton } from "../styled/styledButton";

const HeroSection = () => {
  return (
    <Box
      component={"div"}
      sx={{
        width: "100%",
        height: {
          xs: "35vh",
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
            alignItems: { xs: "center", lg: "flex-end" },
            height: "100%",
            justifyContent: "center",
            flexDirection: "column",
            backgroundColor: { xs: "rgba(0, 0, 0, 0.4)", lg: "transparent" },
            pr: { xs: 0, lg: 6 },
          }}
        >
          <Typography variant="h1" sx={{ color: "white" }}>
            Small Acts, Big Impacts
          </Typography>
          <Typography variant="subtitle1" sx={{ color: "white", mt: 1 }}>
            Together, Let's Change the world!
          </Typography>
          <Box sx={{ mt: 3 }}>
            <a href="/donate">
              <StyledButton
                disableRipple
                sx={{
                  mr: 1,
                  backgroundColor: "white",
                  color: "black",
                  textTransform: "capitalize",
                  "&:hover": {
                    backgroundColor: "white",
                    color: "black",
                  },
                }}
              >
                <Typography variant="subtitle1">Donate Now</Typography>
              </StyledButton>
            </a>
            <a href="/get-involved">
              <StyledButton
                disableRipple
                sx={{
                  backgroundColor: "white",
                  color: "black",
                  textTransform: "capitalize",
                  "&:hover": {
                    backgroundColor: "white",
                    color: "black",
                  },
                }}
              >
                <Typography variant="subtitle1">
                  Join Us as Volunteer
                </Typography>
              </StyledButton>
            </a>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default HeroSection;
