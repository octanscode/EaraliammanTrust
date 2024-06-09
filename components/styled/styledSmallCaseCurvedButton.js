import { PRIMARY_BACKGROUND_GRAY, PRIMARY_BLUE } from "@/constants";
import { Box, Button, styled } from "@mui/material";
import React from "react";

// box for product images in my orders, wishlist, customization
export const StyledCurvedSmallCaseButton = styled(Button)(({ theme }) => ({
  backgroundColor: PRIMARY_BLUE,
  borderRadius: "1rem",
  color: "white",
  padding: "0.3rem 0.8rem",
  textTransform: "capitalize",
  "&:hover": {
    backgroundColor: PRIMARY_BLUE,
    color: "white",
  },
  [theme.breakpoints.up("xs")]: {
    fontSize: "0.65rem",
    padding: "0.3rem 0.85rem",
    "& .MuiButton-startIcon > *:nth-of-type(1)": {
      fontSize: "1rem",
    },
    "& .MuiButton-endIcon>*:nth-of-type(1)": {
      fontSize: "1rem",
    },
  },
  [theme.breakpoints.up("xssm")]: {
    fontSize: "0.85rem",
    padding: "0.3rem 0.85rem",
    "& .MuiButton-startIcon > *:nth-of-type(1)": {
      fontSize: "1rem",
    },
    "& .MuiButton-endIcon>*:nth-of-type(1)": {
      fontSize: "1rem",
    },
  },
  [theme.breakpoints.up("xsm")]: {
    fontSize: "0.85rem",
    padding: "0.3rem 0.85rem",
    "& .MuiButton-startIcon > *:nth-of-type(1)": {
      fontSize: "1rem",
    },
    "& .MuiButton-endIcon>*:nth-of-type(1)": {
      fontSize: "1rem",
    },
  },
  [theme.breakpoints.up("sm")]: {
    fontSize: "1.25rem",
    padding: "0.45rem 1.1rem",
    borderRadius: "2rem",
    "& .MuiButton-startIcon > *:nth-of-type(1)": {
      fontSize: "1.1rem",
    },
    "& .MuiButton-endIcon>*:nth-of-type(1)": {
      fontSize: "1.1rem",
    },
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "1.4rem",
    padding: "0.45rem 1.1rem",
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
    padding: "0.4rem 1rem",
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
    padding: "0.4rem 1rem",
    borderRadius: "2rem",
    "& .MuiButton-startIcon > *:nth-of-type(1)": {
      fontSize: "1.1rem",
    },
    "& .MuiButton-endIcon>*:nth-of-type(1)": {
      fontSize: "1.1rem",
    },
  },
  [theme.breakpoints.up("xxl")]: {
    fontSize: "1.25rem",
    padding: "0.45rem 0.95rem",
    borderRadius: "2rem",
    "& .MuiButton-startIcon > *:nth-of-type(1)": {
      fontSize: "1.4rem",
    },
    "& .MuiButton-endIcon>*:nth-of-type(1)": {
      fontSize: "1.4rem",
    },
  },
  [theme.breakpoints.up("xxxl")]: {
    fontSize: "1.4rem",
    padding: "0.5rem 1.15rem",
    borderRadius: "2rem",
    "& .MuiButton-startIcon > *:nth-of-type(1)": {
      fontSize: "1.7rem",
    },
    "& .MuiButton-endIcon>*:nth-of-type(1)": {
      fontSize: "1.7rem",
    },
  },
  [theme.breakpoints.up("xxxxl")]: {
    fontSize: "1.6rem",
    padding: "0.6rem 1.3rem",
    borderRadius: "2rem",
    "& .MuiButton-startIcon > *:nth-of-type(1)": {
      fontSize: "1.9rem",
    },
    "& .MuiButton-endIcon>*:nth-of-type(1)": {
      fontSize: "1.9rem",
    },
  },
  [theme.breakpoints.up("xxxxxl")]: {
    fontSize: "1.65rem",
    padding: "0.7rem 1.3rem",
    borderRadius: "2rem",
    "& .MuiButton-startIcon > *:nth-of-type(1)": {
      fontSize: "2.1rem",
    },
    "& .MuiButton-endIcon>*:nth-of-type(1)": {
      fontSize: "2.1rem",
    },
  },
}));
