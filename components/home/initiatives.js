import { Box, Typography } from "@mui/material";
import React from "react";
import InitiativesModel from "./initiativesModel";
import AgricultureImage from "../../public/asset/image/agri.jpg";
import PollutionFreeImage from "../../public/asset/image/poll_free.png";
import LearningImage from "../../public/asset/image/learning.jpg";

const Initiatives = () => {
  return (
    <Box
      component={"div"}
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        p: 8,
        backgroundColor: "white",
      }}
    >
      <Typography variant="h2" sx={{ color: "#041F54" }}>
        Our Initiatives
      </Typography>
      <Box
        sx={{
          mt: 12,
          width: "100%",
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <InitiativesModel
          src={AgricultureImage.src}
          name={"Agriculture Development"}
        />
        <InitiativesModel
          src={PollutionFreeImage.src}
          name={"Pollution Free Environment"}
        />
        <InitiativesModel
          src={LearningImage.src}
          name={"Learning & Development"}
        />
      </Box>
    </Box>
  );
};

export default Initiatives;
