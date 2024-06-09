import { Box, Typography } from "@mui/material";
import React from "react";

const HowToApply = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#f5f5f5",
        width: "100%",
        p: { xs: 2, lg: 4 },
        display: "flex",
        justifyContent: "center",
        backgroundColor: "#cae1e6",
      }}
    >
      <Box
        sx={{
          backgroundColor: "#cae1e6",
          width: { xs: "90%", lg: "50%" },
          p: 4,
        }}
      >
        <Typography variant="h2" sx={{ textAlign: "center", mb: 3 }}>
          How to Apply
        </Typography>
        <Box>
          <Typography variant="h6">
            1. Fill out the volunteer application form below.
          </Typography>
          <Typography variant="h6" sx={{ mt: 2, mb: 2 }}>
            2. Attend an orientation session to learn more about our work.
          </Typography>
          <Typography variant="h6">
            3. Get matched with a volunteer opportunity that fits your skills
            and interests.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default HowToApply;
