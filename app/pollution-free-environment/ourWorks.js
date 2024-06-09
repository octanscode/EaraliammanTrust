import { Box, Typography } from "@mui/material";
import React from "react";
import Works1Image from "../../public/asset/image/poll-free-development/works1.jpg";
import Works2Image from "../../public/asset/image/poll-free-development/works2.jpg";

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
      <Box
        sx={{
          mb: 4,
          display: "flex",
          width: { xs: "100%", lg: "80%" },
          height: { xs: "40vh", lg: "80vh" },
          justifyContent: "space-between",
        }}
      >
        <img
          src={Works1Image.src}
          alt={"work-image"}
          style={{
            height: "100%",
            width: "49%",
            objectFit: "cover",
          }}
        />
        <img
          src={Works2Image.src}
          alt={"work-image"}
          style={{
            height: "100%",
            width: "49%",
            objectFit: "cover",
          }}
        />
      </Box>
    </Box>
  );
};

export default OurWorks;
