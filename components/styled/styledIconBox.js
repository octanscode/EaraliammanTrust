import { PRIMARY_BACKGROUND_GRAY, PRIMARY_BLUE } from "@/constants";
import { Box, Button, IconButton, styled } from "@mui/material";
import React from "react";

// box for product images in my orders, wishlist, customization
export const StyledIconButton = styled(IconButton)(({ theme }) => ({
  color: "white",
  "&:hover": {
    backgroundColor: "inherit",
  },
  [theme.breakpoints.up("xs")]: {
    fontSize: "1.1rem",
    "& .MuiButton-startIcon > *:nth-of-type(1)": {
      fontSize: "1rem",
    },
    "& .MuiButton-endIcon>*:nth-of-type(1)": {
      fontSize: "1rem",
    },
  },
  [theme.breakpoints.up("xssm")]: {
    fontSize: "1.1rem",
    "& .MuiButton-startIcon > *:nth-of-type(1)": {
      fontSize: "1rem",
    },
    "& .MuiButton-endIcon>*:nth-of-type(1)": {
      fontSize: "1rem",
    },
  },
  [theme.breakpoints.up("xsm")]: {
    fontSize: "1.1rem",
    "& .MuiButton-startIcon > *:nth-of-type(1)": {
      fontSize: "1rem",
    },
    "& .MuiButton-endIcon>*:nth-of-type(1)": {
      fontSize: "1rem",
    },
  },
  [theme.breakpoints.up("sm")]: {
    fontSize: "1.7rem",
    "& .MuiButton-startIcon > *:nth-of-type(1)": {
      fontSize: "1.1rem",
    },
    "& .MuiButton-endIcon>*:nth-of-type(1)": {
      fontSize: "1.1rem",
    },
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "1.7rem",
    "& .MuiButton-startIcon > *:nth-of-type(1)": {
      fontSize: "1.1rem",
    },
    "& .MuiButton-endIcon>*:nth-of-type(1)": {
      fontSize: "1.1rem",
    },
  },
  [theme.breakpoints.up("lg")]: {
    fontSize: "1.6rem",
    "& .MuiButton-startIcon > *:nth-of-type(1)": {
      fontSize: "1.1rem",
    },
    "& .MuiButton-endIcon>*:nth-of-type(1)": {
      fontSize: "1.1rem",
    },
  },
  [theme.breakpoints.up("xl")]: {
    fontSize: "1.6rem",
    "& .MuiButton-startIcon > *:nth-of-type(1)": {
      fontSize: "1.1rem",
    },
    "& .MuiButton-endIcon>*:nth-of-type(1)": {
      fontSize: "1.1rem",
    },
  },
  [theme.breakpoints.up("xxl")]: {
    fontSize: "1.8rem",
    "& .MuiButton-startIcon > *:nth-of-type(1)": {
      fontSize: "1.4rem",
    },
    "& .MuiButton-endIcon>*:nth-of-type(1)": {
      fontSize: "1.4rem",
    },
  },
  [theme.breakpoints.up("xxxl")]: {
    fontSize: "2.2rem",
    "& .MuiButton-startIcon > *:nth-of-type(1)": {
      fontSize: "1.7rem",
    },
    "& .MuiButton-endIcon>*:nth-of-type(1)": {
      fontSize: "1.7rem",
    },
  },
  [theme.breakpoints.up("xxxxl")]: {
    fontSize: "2.7rem",
    "& .MuiButton-startIcon > *:nth-of-type(1)": {
      fontSize: "1.9rem",
    },
    "& .MuiButton-endIcon>*:nth-of-type(1)": {
      fontSize: "1.9rem",
    },
  },
  [theme.breakpoints.up("xxxxxl")]: {
    fontSize: "3rem",
    "& .MuiButton-startIcon > *:nth-of-type(1)": {
      fontSize: "2.1rem",
    },
    "& .MuiButton-endIcon>*:nth-of-type(1)": {
      fontSize: "2.1rem",
    },
  },
}));
