import { Avatar, Box, Typography } from "@mui/material";
import React from "react";

const InitiativesModel = ({ src, name }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "100%",
        width: "100%",
      }}
    >
      <Avatar src={src} sx={{ height: "100%", width: "100%" }} />
      <Typography variant="subtitle1" sx={{ mt: 2, fontWeight: 600 }}>
        {name}
      </Typography>
    </Box>
  );
};

export default InitiativesModel;
