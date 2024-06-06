"use client";
import React from "react";
import HeroBannerImage from "../../public/asset/image/donate1.jpg";
import { Box, Button, Typography, styled } from "@mui/material";
import { PRIMARY_BLUE } from "@/constants";

const HeroSection = () => {
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
            Make a Difference with Eraliamman Charitable Trust
          </Typography>
          <Typography
            variant="subtitle2"
            sx={{ color: "white", textAlign: "center" }}
          >
            Do you have a passion for helping others and making a positive
            impact in the community? Join Eraliamman Charitable Trust as a
            volunteer and be a part of our mission to improve the lives of the
            urban and rural poor in Tamil Nadu.
          </Typography>
          <Button
            disableRipple
            sx={{
              mt: 2,
              backgroundColor: PRIMARY_BLUE,
              color: "white",
              textTransform: "capitalize",
              borderRadius: 1,
              pl: 2,
              pr: 2,
              "&:hover": {
                backgroundColor: PRIMARY_BLUE,
                color: "white",
              },
            }}
          >
            <Typography variant="h6">Join as a Volunteer</Typography>
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default HeroSection;
