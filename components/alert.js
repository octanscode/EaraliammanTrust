import { Box } from "@mui/material";
import React from "react";
import Alert from "@mui/material/Alert";

const AlertMessage = ({ msg }) => {
  return (
    <Box sx={{ display: msg ? "flex" : "none" }}>
      <Alert variant="filled" severity="error">
        {msg}
      </Alert>
    </Box>
  );
};

export default AlertMessage;
