"use client";
import React from "react";
import HeroBannerImage from "../../public/asset/image/agri2.png";
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
        height: {
          xs: "40vh",
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
            width: "100%",
            display: "flex",
            alignItems: { xs: "center", lg: "flex-end" },
            height: "100%",
            justifyContent: "center",
            backgroundColor: "rgba(0, 0, 0, 0.4)",
            flexDirection: "column",
            p: { xs: 2, lg: 15 },
          }}
        >
          <Typography variant="h3" sx={{ color: "white" }}>
            Cultivating Innovation in Agriculture
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{ color: "white", textAlign: "center", mt: 1 }}
          >
            Growing a Sustainable Future through Responsible Practices
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default HeroSection;
