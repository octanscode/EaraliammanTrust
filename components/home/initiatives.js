import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import InitiativesModel from "./initiativesModel";
import AgricultureImage from "../../public/asset/image/agri.jpg";
import PollutionFreeImage from "../../public/asset/image/poll_free.png";
import LearningImage from "../../public/asset/image/learning1.jpg";

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
        mt: 4,
        mb: 4,
      }}
    >
      <Typography variant="h2" sx={{ color: "#041F54", mb: 4 }}>
        Our Initiatives
      </Typography>
      <Box sx={{ p: 1, flexGrow: 1 }}>
        <Grid container spacing={14}>
          <Grid item xs={12} md={4} xl={4}>
            <InitiativesModel
              src={AgricultureImage.src}
              name={"Agriculture Development"}
            />
          </Grid>
          <Grid item xs={12} md={4} xl={4}>
            <InitiativesModel
              src={PollutionFreeImage.src}
              name={"Pollution Free Environment"}
            />
          </Grid>
          <Grid item xs={12} md={4} xl={4}>
            <InitiativesModel
              src={LearningImage.src}
              name={"Learning & Development"}
            />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Initiatives;
