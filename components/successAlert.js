import { Box } from "@mui/material";
import React from "react";
import Alert from "@mui/material/Alert";

const SuccessAlertMessage = ({ msg }) => {
  return (
    <Box sx={{ display: msg ? "flex" : "none" }}>
      <Alert variant="filled" severity="success">
        {msg}
      </Alert>
    </Box>
  );
};

export default SuccessAlertMessage;
