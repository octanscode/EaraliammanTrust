"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { GetCurrActiveNavItem } from "@/selector/currActiveNavItem";
import AppLogo from "../public/asset/image/AppLogo.png";
import { useDispatch } from "react-redux";
import { setCurrActiveNavItem } from "@/store/currActiveNavItem";
import { PRIMARY_BLUE } from "@/constants";

export default function CustomAppbar() {
  const dispatch = useDispatch();
  const navigationList = [
    "Home",
    "About Us",
    "Projects",
    "Donate",
    "News & Events",
    "Contact Us",
  ];

  const currActiveNavItem = GetCurrActiveNavItem();
  //   const currActiveNavItem = 0;

  const handleNavClick = (index) => {
    dispatch(setCurrActiveNavItem(index));
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        elevation={0}
        position="fixed"
        sx={{ backgroundColor: "transparent" }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              height: "3rem",
              width: "3rem",
            }}
          >
            <img
              src={AppLogo.src}
              alt="AppLogo"
              style={{
                height: "100%",
                width: "100%",
                objectFit: "contain",
              }}
            />
          </Box>
          <Box>
            {navigationList.map((item, index) => (
              <Button
                disableRipple
                variant="standard"
                key={index}
                sx={{
                  textTransform: "capitalize",
                  textDecoration:
                    index === currActiveNavItem
                      ? `2px solid white underline`
                      : "none",
                  textUnderlineOffset: "4px",
                  "&:hover": {
                    textDecoration:
                      index === currActiveNavItem
                        ? `2px solid white underline`
                        : "none",
                    textUnderlineOffset: "4px",
                    backgroundColor: "transparent",
                  },
                }}
                onClick={() => handleNavClick(index)}
              >
                <Typography variant="body1">{item}</Typography>
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
