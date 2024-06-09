import { Box, Button, Divider, Typography } from "@mui/material";
import React from "react";
import AppLogo from "../public/asset/image/AppLogo.png";

const Footer = () => {
  const navigationList = [
    "Home",
    "About Us",
    "Agricultural Development",
    "Pollution Free Environment",
    "Learning and Development",
    "Donate",
    "Get Involved",
    "News & Events",
    "Contact Us",
  ];

  function handleLinks(index) {
    switch (index) {
      case 0:
        window.location.href = "/";
        break;
      case 1:
        window.location.href = "/about-us";
        break;
      case 2:
        window.location.href = "/agriculture-development";
        break;
      case 3:
        window.location.href = "/pollution-free-environment";
        break;
      case 4:
        window.location.href = "/learning-and-development";
        break;
      case 5:
        window.location.href = "/donate";
        break;
      case 6:
        window.location.href = "/get-involved";
        break;
      case 7:
        window.location.href = "/news-and-events";
        break;
      case 8:
        window.location.href = "/contact-us";
        break;
      default:
        window.location.href = "/";
        break;
    }
  }

  return (
    <Box
      sx={{
        backgroundColor: "rgba(0,0,0,0.79)",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          width: { xs: "90%", lg: "40%" },
          display: "flex",
          flexDirection: { xs: "column", lg: "row" },
          justifyContent: "space-between",
          alignItems: "center",
          p: 6,
        }}
      >
        <Box sx={{ width: "6rem", height: "8rem" }}>
          <img
            src={AppLogo.src}
            alt="AppLogo"
            style={{
              objectFit: "contain",
              height: "100%",
              width: "100%",
            }}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: { xs: "center", lg: "flex-start" },
          }}
        >
          {navigationList.map((item, index) => (
            <Button
              onClick={() => handleLinks(index)}
              key={index}
              disableRipple
              sx={{
                textTransform: "capitalize",
                "&:hover": { backgroundColor: "transparent" },
              }}
            >
              <Typography variant="body1" sx={{ color: "white" }}>
                {item}
              </Typography>
            </Button>
          ))}
        </Box>
      </Box>
      <Divider sx={{ width: "100%", backgroundColor: "white", mt: 4, mb: 4 }} />
      <Box>
        <Typography
          variant="body2"
          sx={{ color: "white", textAlign: "center", mb: 2 }}
        >
          Copyrights @ 2024 Eraliamman Charitable Trust | All Rights Reservered
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
