import { PRIMARY_BACKGROUND_GRAY, PRIMARY_BLUE } from "@/constants";
import { Box, Button, TextField, styled } from "@mui/material";
import React from "react";

// box for product images in my orders, wishlist, customization
export const StyledTextField = styled(TextField)(({ theme }) => ({
  [theme.breakpoints.up("xs")]: {
    "& .MuiInputBase-input": {
      fontSize: "0.8rem",
    },
  },
  [theme.breakpoints.up("xssm")]: {
    "& .MuiInputBase-input": {
      fontSize: "0.8rem",
    },
  },
  [theme.breakpoints.up("xsm")]: {
    "& .MuiInputBase-input": {
      fontSize: "0.85rem",
    },
  },
  [theme.breakpoints.up("sm")]: {
    "& .MuiInputBase-input": {
      fontSize: "1rem",
    },
  },
  [theme.breakpoints.up("md")]: {
    "& .MuiInputBase-input": {
      fontSize: "1.1rem",
    },
  },
  [theme.breakpoints.up("lg")]: {
    "& .MuiInputBase-input": {
      "& .MuiInputBase-input": {
        fontSize: "1rem",
      },
    },
  },
  [theme.breakpoints.up("xl")]: {
    "& .MuiInputBase-input": {
      fontSize: "1rem",
    },
  },
  [theme.breakpoints.up("xxl")]: {
    "& .MuiInputBase-input": {
      fontSize: "1.05rem",
    },
  },
  [theme.breakpoints.up("xxxl")]: {
    "& .MuiInputBase-input": {
      fontSize: "1.2rem",
    },
  },
  [theme.breakpoints.up("xxxxl")]: {
    "& .MuiInputBase-input": {
      fontSize: "1.3rem",
    },
  },
  [theme.breakpoints.up("xxxxxl")]: {
    "& .MuiInputBase-input": {
      fontSize: "1.5rem",
    },
  },
}));
