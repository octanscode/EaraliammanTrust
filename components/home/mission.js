"use client";
import { Box, Typography } from "@mui/material";
import React from "react";
import DescriptionModel from "../descriptionModel";

const Mission = () => {
  return (
    <Box
      component={"div"}
      sx={{
        backgroundColor: "#E0E0E0",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        p: 2,
        pt: 6,
        pb: 1,
      }}
    >
      <Typography variant="h2" sx={{ color: "#041F54" }}>
        Earaliamman Charitable Trust
      </Typography>
      <Box sx={{ p: 10, display: "flex" }}>
        <DescriptionModel
          backgroundColor={"#FD4954"}
          topic={"Mission"}
          description={
            "To empower Tamil Nadu's urban and rural poor by enhancing access to health, education, and sustainable livelihoods, while promoting pollution-free environments through dedicated projects and community initiatives."
          }
        />
        <DescriptionModel
          backgroundColor={"#42B4E0"}
          topic={"Vision"}
          description={
            "Creating inclusive, empowered communities with access to health, education, and sustainable livelihoods, living in clean, pollution-free environments with access to non-adulterated food products."
          }
        />
        <DescriptionModel
          backgroundColor={"#FBA81C"}
          topic={"Values"}
          description={
            "We are guided by Integrity, Compassion, and Commitment to Sustainability. We value Inclusivity, Transparency, and Empowerment, to create lasting, positive impacts in the communities we serve."
          }
        />
      </Box>
    </Box>
  );
};

export default Mission;
