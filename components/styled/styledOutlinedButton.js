import { PRIMARY_BACKGROUND_GRAY, PRIMARY_BLUE } from "@/constants";
import { Box, Button, styled } from "@mui/material";
import React from "react";

// box for product images in my orders, wishlist, customization
export const StyledOutlinedButton = styled(Button)(({ theme }) => ({
  border: `1px solid ${PRIMARY_BLUE}`,
  color: PRIMARY_BLUE,
  textTransform: "capitalize",
  padding: "0.3rem 0.8rem",
  "&:hover": {
    backgroundColor: "inherit",
    border: `1px solid ${PRIMARY_BLUE}`,
    color: PRIMARY_BLUE,
  },
  [theme.breakpoints.up("xs")]: {
    fontSize: "0.65rem",
    padding: "0.2rem 0.6rem",
    "& .MuiButton-startIcon > *:nth-of-type(1)": {
      fontSize: "1rem",
    },
    "& .MuiButton-endIcon>*:nth-of-type(1)": {
      fontSize: "1rem",
    },
  },
  [theme.breakpoints.up("xssm")]: {
    fontSize: "0.85rem",
    padding: "0.2rem 0.6rem",
    "& .MuiButton-startIcon > *:nth-of-type(1)": {
      fontSize: "1rem",
    },
    "& .MuiButton-endIcon>*:nth-of-type(1)": {
      fontSize: "1rem",
    },
  },
  [theme.breakpoints.up("xsm")]: {
    fontSize: "0.9rem",
    padding: "0.2rem 0.6rem",
    "& .MuiButton-startIcon > *:nth-of-type(1)": {
      fontSize: "1rem",
    },
    "& .MuiButton-endIcon>*:nth-of-type(1)": {
      fontSize: "1rem",
    },
  },
  [theme.breakpoints.up("sm")]: {
    fontSize: "1.3rem",
    padding: "0.2rem 0.6rem",
    "& .MuiButton-startIcon > *:nth-of-type(1)": {
      fontSize: "1.1rem",
    },
    "& .MuiButton-endIcon>*:nth-of-type(1)": {
      fontSize: "1.1rem",
    },
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "1.45rem",
    padding: "0.2rem 0.6rem",
    "& .MuiButton-startIcon > *:nth-of-type(1)": {
      fontSize: "1.1rem",
    },
    "& .MuiButton-endIcon>*:nth-of-type(1)": {
      fontSize: "1.1rem",
    },
  },
  [theme.breakpoints.up("lg")]: {
    fontSize: "1rem",
    padding: "0.2rem 0.6rem",
    "& .MuiButton-startIcon > *:nth-of-type(1)": {
      fontSize: "1.1rem",
    },
    "& .MuiButton-endIcon>*:nth-of-type(1)": {
      fontSize: "1.1rem",
    },
  },
  [theme.breakpoints.up("xl")]: {
    fontSize: "1rem",
    padding: "0.2rem 0.6rem",
    "& .MuiButton-startIcon > *:nth-of-type(1)": {
      fontSize: "1.1rem",
    },
    "& .MuiButton-endIcon>*:nth-of-type(1)": {
      fontSize: "1.1rem",
    },
  },
  [theme.breakpoints.up("xxl")]: {
    fontSize: "1.25rem",
    padding: "0.2rem 0.6rem",
    "& .MuiButton-startIcon > *:nth-of-type(1)": {
      fontSize: "1.4rem",
    },
    "& .MuiButton-endIcon>*:nth-of-type(1)": {
      fontSize: "1.4rem",
    },
  },
  [theme.breakpoints.up("xxxl")]: {
    fontSize: "1.4rem",
    padding: "0.3rem 0.7rem",
    "& .MuiButton-startIcon > *:nth-of-type(1)": {
      fontSize: "1.7rem",
    },
    "& .MuiButton-endIcon>*:nth-of-type(1)": {
      fontSize: "1.7rem",
    },
  },
  [theme.breakpoints.up("xxxxl")]: {
    fontSize: "1.6rem",
    padding: "0.3rem 0.8rem",
    "& .MuiButton-startIcon > *:nth-of-type(1)": {
      fontSize: "1.9rem",
    },
    "& .MuiButton-endIcon>*:nth-of-type(1)": {
      fontSize: "1.9rem",
    },
  },
  [theme.breakpoints.up("xxxxxl")]: {
    fontSize: "1.7rem",
    padding: "0.3rem 0.8rem",
    "& .MuiButton-startIcon > *:nth-of-type(1)": {
      fontSize: "2.1rem",
    },
    "& .MuiButton-endIcon>*:nth-of-type(1)": {
      fontSize: "2.1rem",
    },
  },
}));
