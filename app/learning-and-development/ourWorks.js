import { Box, Typography } from "@mui/material";
import React from "react";
import LearningImage from "../../public/asset/image/learning-and-development/dev8.png";

const OurWorks = () => {
  return (
    <Box
      sx={{
        width: "100%",
        p: 4,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography variant="h3" sx={{ mb: 4 }}>
        Our Works
      </Typography>
      <Box sx={{ mb: 4, height: "80vh", width: "40vw" }}>
        <img
          src={LearningImage.src}
          alt={"work-image"}
          style={{
            height: "100%",
            width: "100%",
            objectFit: "cover",
          }}
        />
      </Box>
    </Box>
  );
};

export default OurWorks;
