import React from "react";
import "./loader.css";
import { Box } from "@mui/material";

const Loader = () => {
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

export default Loader;
