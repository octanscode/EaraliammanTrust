import { Box, Paper, Typography } from "@mui/material";
import React from "react";

const AchievementModel = ({ number, name }) => {
  return (
    <Paper
      sx={{
        backgroundColor: "#083792",
        color: "white",
        height: { xs: "14vh", lg: "20vh" },
        width: { xs: 109, lg: 300 },
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "center",
        p: { xs: 1, lg: 2 },
      }}
    >
      <Typography variant="h2">{number}</Typography>
      <Typography variant="body2" sx={{ mt: 1.5 }}>
        {name}
      </Typography>
    </Paper>
  );
};

export default AchievementModel;
