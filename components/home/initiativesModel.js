import { Avatar, Box, Typography } from "@mui/material";
import React from "react";

const InitiativesModel = ({ src, name }) => {
  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Avatar src={src} sx={{ height: "35vh", width: "18vw" }} />
      <Typography variant="subtitle1" sx={{ mt: 2, fontWeight: 500 }}>
        {name}
      </Typography>
    </Box>
  );
};

export default InitiativesModel;
