import { Box, Divider, Typography } from "@mui/material";
import React from "react";

const OpportunityCard = ({ name, content, bgColor }) => {
  return (
    <Box
      sx={{
        backgroundColor: bgColor,
        ml: 1,
        mr: 1,
        p: 2,
        pt: 2,
        pb: 2,
        borderRadius: 2,
      }}
    >
      <Typography variant="subtitle1" sx={{ color: "white", fontWeight: 600 }}>
        {name}
      </Typography>
      <Divider sx={{ backgroundColor: "#f5f5f5", mt: 1 }} />
      <Typography variant="body1" sx={{ color: "white", mt: 2 }}>
        {content}
      </Typography>
    </Box>
  );
};

export default OpportunityCard;
