import { Box, Button, Typography } from "@mui/material";
import React from "react";
import LearningImage from "../../public/asset/image/learning.png";

const Learning = () => {
  return (
    <Box
      component={"div"}
      sx={{
        width: "100%",
        height: { xs: "55vh", lg: "75vh" },
        backgroundImage: `url(${LearningImage.src})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        display: "flex",
        justifyContent: "flex-start",
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
          Learning and Development
        </Typography>
        <Typography
          variant="subtitle2"
          sx={{ color: "white", mt: { xs: 2, lg: 4 }, mb: { xs: 2, lg: 2 } }}
        >
          Earliamman focuses on Women empowerment initiatives, provides
          entrepreneurship opportunities through tailoring and handicraft
          training. Cottage industries like appalam and paper plate production
          offer income for rural women. Digital learning revolutionizes
          education, providing flexibility, accessibility, and interactive
          resources, bridging gaps and fostering lifelong learning.
        </Typography>
        <a href="/learning-and-development">
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

export default Learning;
