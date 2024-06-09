import { Box, Paper, Typography } from "@mui/material";
import React from "react";

const DevelopmentSchemesModel = ({ src, name, desc }) => {
  return (
    <Paper
      sx={{
        p: 2,
        display: "flex",
        flexDirection: "column",
        width: "100%",
        borderRadius: "1rem",
        backgroundColor: "white",
        height: { xs: "62vh", lg: "82vh" },
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: { xs: "50%", lg: "70%" },
          borderRadius: "1rem",
        }}
      >
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
      <Box sx={{ color: "white", height: { xs: "50%", lg: "30%" } }}>
        <Typography
          variant="h6"
          sx={{
            textAlign: "center",
            mt: 2,
            mb: 2,
            color: "black",
            fontWeight: 700,
          }}
        >
          {name}
        </Typography>
        <Typography variant="body1" sx={{ textAlign: "left", color: "black" }}>
          {desc}
        </Typography>
      </Box>
    </Paper>
  );
};

export default DevelopmentSchemesModel;
