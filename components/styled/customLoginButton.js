import { styled } from "@mui/system";
import MuiButton from "@mui/material/Button";
import { PRIMARY_BLACK } from "@/constants";

export const CustomLoginButton = styled(MuiButton)(({ theme }) => ({
  width: "70%",
  width: {
    xs: "90%",
    sm: "80%",
    md: "70%",
    lg: "70%",
    xl: "70%",
  },
  boxSizing: "border-box",
  variant: "standard",
  backgroundColor: PRIMARY_BLACK,
  color: "white",
  fontWeight: "500",
  fontSize: "0.8rem",
  padding: "0.6rem",
  borderRadius: "2rem",
  border: `2px solid ${PRIMARY_BLACK}`,
  "&:hover": {
    backgroundColor: "white",
    color: PRIMARY_BLACK,
    border: `2px solid ${PRIMARY_BLACK}`,
    fontWeight: "700",
    "& .MuiSvgIcon-root": {
      fontWeight: "700",
    },
    "& .MuiTypography-root": {
      fontWeight: "700",
    },
  },
}));
