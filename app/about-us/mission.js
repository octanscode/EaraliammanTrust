import { Box, Typography } from "@mui/material";
import React from "react";
import FounderImage from "../../public/asset/image/mission.jpg";

const Mission = () => {
  return (
    <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
      <Box
        sx={{
          display: "flex",
          width: "90%",
          justifyContent: "space-between",
          alignItems: "center",
          pt: 4,
          pb: 4,
        }}
      >
        <Box
          sx={{
            width: "45%",
            display: "flex",
            alignItems: "center",
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
        <Box sx={{ width: "50%" }}>
          <Box>
            <Typography variant="h2" sx={{ color: "#041F54" }}>
              Our Mission
            </Typography>
            <Typography
              variant="h5"
              sx={{ borderLeft: "4px solid lightgray", pl: 2, mt: 3 }}
            >
              Our mission at Eraliamman Charitable Trust is to empower the urban
              and rural poor of Tamil Nadu by enhancing access to health,
              education, and sustainable livelihoods. We are dedicated to
              creating equitable living environments and promoting
              pollution-free surroundings through our various community
              initiatives
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Mission;
