import { Box, Paper, Typography } from "@mui/material";
import React from "react";

const DevelopmentSchemesModel = ({ src, name, desc }) => {
  return (
    <Paper
      sx={{
        p: 2,
        display: "flex",
        flexDirection: "column",
        width: "30%",
        borderRadius: "1rem",
        backgroundColor: "#041F54",
        mt: 1,
        mb: 10,
        height: "82vh",
      }}
    >
      <Box sx={{ width: "100%", height: "70%", borderRadius: "1rem" }}>
        <img
          src={src}
          alt={name}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderRadius: "inherit",
          }}
        />{" "}
      </Box>
      <Box sx={{ color: "white", height: "10rem" }}>
        <Typography variant="h6" sx={{ textAlign: "center", mt: 2, mb: 2 }}>
          {name}
        </Typography>
        <Typography sx={{ textAlign: "left", color: "#ffffffb5" }}>
          {desc}
        </Typography>
      </Box>
    </Paper>
  );
};

export default DevelopmentSchemesModel;
