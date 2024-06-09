import { styled } from "@mui/system";
import MuiButton from "@mui/material/Button";
import { PRIMARY_BLACK } from "@/constants";

export const CustomOutlinedButton = styled(MuiButton)(({ theme }) => ({
  boxSizing: "border-box",
  color: PRIMARY_BLACK,
  fontWeight: "700",
  fontSize: "0.8rem",
  borderRadius: "2rem",
  "&:hover": {},
}));
