import { Box, Button, Typography } from "@mui/material";
import React from "react";
import PollutionFreeImage from "../../public/asset/image/pollution_free.jpg";

const PollutionFreeEnv = () => {
  return (
    <Box
      component={"div"}
      sx={{
        width: "100%",
        height: { xs: "55vh", lg: "75vh" },
        backgroundImage: `url(${PollutionFreeImage.src})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        display: "flex",
        justifyContent: "flex-end",
      }}
    >
      <Box
        sx={{
          width: { xs: "100%", lg: "38%" },
          p: { xs: 2, lg: 4 },
          backgroundColor: "rgba(0, 0, 0, 0.6)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Typography variant="h3" sx={{ color: "white" }}>
          Pollution free environment
        </Typography>
        <Typography
          variant="subtitle2"
          sx={{ color: "white", mt: { xs: 2, lg: 4 }, mb: { xs: 2, lg: 2 } }}
        >
          Earliamman's Environment Project promotes eco-friendly practices:
          avoiding plastic through cotton, jute bags, and natural alternatives
          like areca leaf plates. Additionally, extensive tree planting
          initiatives span Tamil Nadu, combating deforestation and fostering
          environmental sustainability, while reducing plastic waste and
          promoting reusable alternatives for a cleaner, greener future.
        </Typography>
        <a href="/pollution-free-development">
          <Button
            sx={{
              backgroundColor: "white",
              alignSelf: "flex-start",
              opacity: 1,
              textTransform: "capitalize",
              color: "black",
              "&:hover": {
                backgroundColor: "white",
                opacity: 1,
                color: "black",
                textTransform: "capitalize",
              },
            }}
          >
            <Typography>Learn More</Typography>
          </Button>
        </a>
      </Box>
    </Box>
  );
};

export default PollutionFreeEnv;
