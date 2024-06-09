import { styled } from "@mui/system";
import MuiButton from "@mui/material/Button";
import { Typography } from "@mui/material";

const CustomFooterTypography = ({ text }) => {
  return (
    <Typography
      variant="body2"
      sx={{
        cursor: "pointer",
        color: "#dddddd",
        margin: "0rem 0 0.5rem 0",
        fontWeight: "400",
        "&:hover": {
          textDecoration: "underline",
        },
      }}
    >
      {text}
    </Typography>
  );
};

export default CustomFooterTypography;
