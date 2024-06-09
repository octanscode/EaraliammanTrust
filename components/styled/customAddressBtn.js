import { Box, Button, styled } from "@mui/material";
import React from "react";

// box for product images in my orders, wishlist, customization
export const CustomAddressBtn = styled(Button)(({ theme }) => ({
  [theme.breakpoints.up("xs")]: {
    fontSize: "0.7rem",
    // backgroundColor: "brown",
  },
  [theme.breakpoints.up("xssm")]: {
    fontSize: "0.8rem",
    // backgroundColor: "brown",
  },
  [theme.breakpoints.up("xsm")]: {
    fontSize: "0.8rem",
    // backgroundColor: "brown",
  },
  [theme.breakpoints.up("sm")]: {
    fontSize: "1.2rem",
    // backgroundColor: "brown",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "1.2rem",
    // backgroundColor: "green",
  },
  [theme.breakpoints.up("lg")]: {
    fontSize: "1.1rem",
    // backgroundColor: "blue",
  },
  [theme.breakpoints.up("xl")]: {
    fontSize: "1.1rem",
    // backgroundColor: "orange",
  },
  [theme.breakpoints.up("xxl")]: {
    fontSize: "1.4rem",
    // backgroundColor: "red",
  },
  [theme.breakpoints.up("xxxl")]: {
    fontSize: "1.7rem",
    // backgroundColor: "yellow",
  },
  [theme.breakpoints.up("xxxxl")]: {
    fontSize: "1.9rem",
    // backgroundColor: "black",
  },
  [theme.breakpoints.up("xxxxxl")]: {
    fontSize: "2.2rem",
    // backgroundColor: "aqua",
  },
}));
