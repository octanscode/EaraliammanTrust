import { PRIMARY_BACKGROUND_GRAY, PRIMARY_BLUE } from "@/constants";
import { Box, Button, styled } from "@mui/material";
import React from "react";

// box for product images in my orders, wishlist, customization
export const StyledCurvedButton = styled(Button)(({ theme }) => ({
  backgroundColor: PRIMARY_BLUE,
  borderRadius: "1rem",
  color: "white",
  padding: "0.3rem 0.8rem",
  "&:hover": {
    backgroundColor: PRIMARY_BLUE,
    color: "white",
  },
  [theme.breakpoints.up("xs")]: {
    fontSize: "0.55rem",
    padding: "0.4rem 0.75rem",
    "& .MuiButton-startIcon > *:nth-of-type(1)": {
      fontSize: "1rem",
    },
    "& .MuiButton-endIcon>*:nth-of-type(1)": {
      fontSize: "1rem",
    },
  },
  [theme.breakpoints.up("xssm")]: {
    fontSize: "0.75rem",
    padding: "0.4rem 0.85rem",
    "& .MuiButton-startIcon > *:nth-of-type(1)": {
      fontSize: "1rem",
    },
    "& .MuiButton-endIcon>*:nth-of-type(1)": {
      fontSize: "1rem",
    },
  },
  [theme.breakpoints.up("xsm")]: {
    fontSize: "0.75rem",
    padding: "0.4rem 0.85rem",
    "& .MuiButton-startIcon > *:nth-of-type(1)": {
      fontSize: "1rem",
    },
    "& .MuiButton-endIcon>*:nth-of-type(1)": {
      fontSize: "1rem",
    },
  },
  [theme.breakpoints.up("sm")]: {
    fontSize: "1.05rem",
    padding: "0.6rem 1.1rem",
    borderRadius: "2rem",
    "& .MuiButton-startIcon > *:nth-of-type(1)": {
      fontSize: "1.1rem",
    },
    "& .MuiButton-endIcon>*:nth-of-type(1)": {
      fontSize: "1.1rem",
    },
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "1.2rem",
    padding: "0.7rem 1.2rem",
    borderRadius: "2rem",
    "& .MuiButton-startIcon > *:nth-of-type(1)": {
      fontSize: "1.1rem",
    },
    "& .MuiButton-endIcon>*:nth-of-type(1)": {
      fontSize: "1.1rem",
    },
  },
  [theme.breakpoints.up("lg")]: {
    fontSize: "0.9rem",
    padding: "0.5rem 1rem",
    borderRadius: "2rem",
    "& .MuiButton-startIcon > *:nth-of-type(1)": {
      fontSize: "1.1rem",
    },
    "& .MuiButton-endIcon>*:nth-of-type(1)": {
      fontSize: "1.1rem",
    },
  },
  [theme.breakpoints.up("xl")]: {
    fontSize: "0.9rem",
    padding: "0.5rem 1rem",
    borderRadius: "2rem",
    "& .MuiButton-startIcon > *:nth-of-type(1)": {
      fontSize: "1.1rem",
    },
    "& .MuiButton-endIcon>*:nth-of-type(1)": {
      fontSize: "1.1rem",
    },
  },
  [theme.breakpoints.up("xxl")]: {
    fontSize: "1.05rem",
    padding: "0.65rem 1.25rem",
    borderRadius: "2rem",
    "& .MuiButton-startIcon > *:nth-of-type(1)": {
      fontSize: "1.4rem",
    },
    "& .MuiButton-endIcon>*:nth-of-type(1)": {
      fontSize: "1.4rem",
    },
  },
  [theme.breakpoints.up("xxxl")]: {
    fontSize: "1.2rem",
    padding: "0.7rem 1.2rem",
    borderRadius: "2rem",
    "& .MuiButton-startIcon > *:nth-of-type(1)": {
      fontSize: "1.7rem",
    },
    "& .MuiButton-endIcon>*:nth-of-type(1)": {
      fontSize: "1.7rem",
    },
  },
  [theme.breakpoints.up("xxxxl")]: {
    fontSize: "1.4rem",
    padding: "0.8rem 1.3rem",
    borderRadius: "2rem",
    "& .MuiButton-startIcon > *:nth-of-type(1)": {
      fontSize: "1.9rem",
    },
    "& .MuiButton-endIcon>*:nth-of-type(1)": {
      fontSize: "1.9rem",
    },
  },
  [theme.breakpoints.up("xxxxxl")]: {
    fontSize: "1.45rem",
    padding: "0.9rem 1.5rem",
    borderRadius: "2rem",
    "& .MuiButton-startIcon > *:nth-of-type(1)": {
      fontSize: "2.1rem",
    },
    "& .MuiButton-endIcon>*:nth-of-type(1)": {
      fontSize: "2.1rem",
    },
  },
}));
