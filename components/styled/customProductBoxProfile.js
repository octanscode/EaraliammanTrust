import { Box, styled } from "@mui/material";
import React from "react";

// box for product images in my orders, wishlist, customization
export const ResponsiveCustomBox = styled(Box)(({ theme }) => ({
  height: "100px",
  width: "100px",
  [theme.breakpoints.up("xs")]: {
    height: "6.5rem", // Adjust height for small screens and above
    width: "5rem", // Adjust width for small screens and above
  },
  [theme.breakpoints.up("sm")]: {
    height: "8.5rem", // Adjust height for small screens and above
    width: "6rem", // Adjust width for small screens and above
  },
  [theme.breakpoints.up("xl")]: {
    height: "7.5rem", // Adjust height for large screens and above
    width: "6rem", // Adjust width for large screens and above
  },
  [theme.breakpoints.up("xxl")]: {
    height: "9rem", // Adjust height for large screens and above
    width: "7.5rem", // Adjust width for large screens and above
  },
  [theme.breakpoints.up("xxxl")]: {
    height: "10rem", // Adjust height for large screens and above
    width: "9rem", // Adjust width for large screens and above
  },
  [theme.breakpoints.up("xxxxl")]: {
    height: "11.5rem", // Adjust height for large screens and above
    width: "10.5rem", // Adjust width for large screens and above
  },
}));
