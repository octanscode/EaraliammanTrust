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
    "News & Events",
    "Contact Us",
  ];
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
          width: "40%",
          display: "flex",
          justifyContent: "space-between",
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
            alignItems: "flex-start",
          }}
        >
          {navigationList.map((item, index) => (
            <Button
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
        <Typography variant="body2" sx={{ color: "white", mb: 2 }}>
          Copyrights @ 2024 EARLIAMMAN Charitable Trust | All Rights Reservered
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
