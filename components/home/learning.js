import { Box, Button, Typography } from "@mui/material";
import React from "react";
import LearningImage from "../../public/asset/image/Learning_Development.png";

const Learning = () => {
  return (
    <Box
      component={"div"}
      sx={{
        width: "100%",
        height: "75vh",
        backgroundImage: `url(${LearningImage.src})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        display: "flex",
        justifyContent: "flex-start",
      }}
    >
      <Box
        sx={{
          width: "38%",
          p: 4,
          backgroundColor: "#060606",
          opacity: 0.8,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Typography variant="h2" sx={{ color: "white" }}>
          Learning and Development
        </Typography>
        <Typography variant="subtitle2" sx={{ color: "white", mt: 4, mb: 2 }}>
          Earliamman focuses on Women empowerment initiatives, provides
          entrepreneurship opportunities through tailoring and handicraft
          training. Cottage industries like appalam and paper plate production
          offer income for rural women. Digital learning revolutionizes
          education, providing flexibility, accessibility, and interactive
          resources, bridging gaps and fostering lifelong learning.
        </Typography>
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
      </Box>
    </Box>
  );
};

export default Learning;
