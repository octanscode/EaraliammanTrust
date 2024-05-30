import { Box, Typography } from "@mui/material";
import React from "react";
import AgriculturalWorksImage from "../../public/asset/image/agri-works.png";

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
      <Box sx={{ mb: 4 }}>
        <img
          src={AgriculturalWorksImage.src}
          alt={"work-image"}
          style={{
            height: "100%",
            width: "100%",
            objectFit: "contain",
          }}
        />
      </Box>
    </Box>
  );
};

export default OurWorks;
