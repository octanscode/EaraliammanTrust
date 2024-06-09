import React from "react";
import { Box, Typography } from "@mui/material";
import "./loader.css";

const Loader = ({ isLoadingScreenOpen }) => {
  return (
    <Box sx={{ display: isLoadingScreenOpen ? "flex" : "none" }}>
      <div className="backdrop">
        <Box
          className="spinner-container"
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {/* <Typography variant="h4" sx={{ mb: 1, fontWeight: 700 }}>
            Loading...
          </Typography> */}
          <span className="loader"></span>
        </Box>
      </div>
    </Box>
  );
};

export default Loader;
