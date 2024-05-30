import { Box, Paper, Typography } from "@mui/material";
import React from "react";

const AchievementModel = ({ number, name }) => {
  return (
    <Paper
      sx={{
        backgroundColor: "#083792",
        color: "white",
        height: "20vh",
        width: 300,
        opacity: 1,
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "center",
        p: 2,
      }}
    >
      <Typography variant="h2">{number}</Typography>
      <Typography variant="body1" sx={{ mt: 1.5 }}>
        {name}
      </Typography>
    </Paper>
  );
};

export default AchievementModel;
