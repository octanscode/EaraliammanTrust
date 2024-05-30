import { Box, Typography } from "@mui/material";
import React from "react";
import FounderImage from "../../public/asset/image/vision.jpg";

const Vision = () => {
  return (
    <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
      <Box
        sx={{
          display: "flex",
          width: "80%",
          justifyContent: "space-between",
          alignItems: "center",
          pt: 4,
          pb: 4,
        }}
      >
        <Box
          sx={{
            width: "55%",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
          }}
        >
          <Box>
            <Typography variant="h2" sx={{ color: "#041F54" }}>
              Our Vision
            </Typography>
            <Typography
              variant="h5"
              sx={{ borderLeft: "4px solid lightgray", pl: 2, mt: 3 }}
            >
              We envision inclusive and empowered communities with access to
              essential services and sustainable livelihood opportunities. Our
              goal is to foster clean, pollution-free environments where
              individuals can thrive and access non-adulterated food products
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            width: "25%",
            display: "flex",
            alignItems: "flex-end",
            flexDirection: "column",
            position: "relative",
          }}
        >
          <Box
            sx={{
              height: "50vh",
              width: "50vh",
              borderRadius: "50%",
            }}
          >
            <img
              src={FounderImage.src}
              alt="Founder Image"
              style={{
                height: "100%",
                width: "100%",
                objectFit: "cover",
                borderRadius: "inherit",
              }}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Vision;
