import { Box, Typography } from "@mui/material";
import React from "react";
import AchievementImage from "../../public/asset/image/Achievement.jpg";
import AchievementModel from "./achievementModel";

const Achievements = () => {
  return (
    <Box
      component={"div"}
      sx={{
        backgroundImage: `url(${AchievementImage.src})`,
        height: "60vh",
        backgroundSize: "cover",
        position: "relative",
      }}
    >
      <Box
        sx={{
          backgroundColor: "#060606",
          opacity: 0.8,
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="h2" sx={{ color: "white" }}>
          Achievements
        </Typography>
        <Typography sx={{ color: "white" }}>
          The Eraliamman team has impacted lives through sustainable initiatives
          and dedicated community efforts
        </Typography>
      </Box>
      <Box
        sx={{
          position: "absolute",
          width: "100%",
          bottom: -50,
          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
        <AchievementModel number={"1,00,086"} name={"Trees Planted"} />
        <AchievementModel number={"1,00,576"} name={"Smily Faces"} />
        <AchievementModel number={"5,000"} name={"Farmers United"} />
      </Box>
    </Box>
  );
};

export default Achievements;
