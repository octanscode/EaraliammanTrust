import { Box } from "@mui/material";
import React from "react";
import "./loader.css";

const PageLoader = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div class="loader"></div>
    </Box>
  );
};

export default PageLoader;
