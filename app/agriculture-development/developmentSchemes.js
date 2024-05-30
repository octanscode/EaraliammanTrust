import DevelopmentSchemesModel from "@/components/developmentSchemesModel";
import { Box, Typography } from "@mui/material";
import React from "react";
import AgricultureClinicImage from "../../public/asset/image/clinic.jpg";
import TrainingForFarmersImage from "../../public/asset/image/farmer-training.jpg";
import AgricultureTrainingImage from "../../public/asset/image/agriculture-training.webp";
import OrganicFarmingImage from "../../public/asset/image/organic-farming.png";
import PreventAdulterationImage from "../../public/asset/image/Food-Adulteration.jpg";
import PestControlImage from "../../public/asset/image/pest.jpg";

const DevelopmentSchemes = () => {
  return (
    <Box sx={{ backgroundColor: "#F5F5F5", p: 4, width: "100%" }}>
      <Typography
        variant="h2"
        sx={{ color: "#041F54", textAlign: "center", mt: 4, mb: 4 }}
      >
        Earliamman Agricultural Development Schemes
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
        }}
      >
        <DevelopmentSchemesModel
          src={AgricultureClinicImage.src}
          name={"Agri Clinics"}
          desc={
            "Earliamman initiates the establishment of Agri-Clinics, providing farmers with expert guidance on soil health, cropping practices, plant protection, and post-harvest technology, alongside animal healthcare and market price insights"
          }
        />
        <DevelopmentSchemesModel
          src={TrainingForFarmersImage.src}
          name={"Training for Farmers"}
          desc={
            "ERALI AMMAN trains farmers in good agricultural practices and business management skills to help them manage their land, effectively cultivate their crops, and increase their harvests."
          }
        />
        <DevelopmentSchemesModel
          src={AgricultureTrainingImage.src}
          name={"Agricultural Training"}
          desc={
            "Earliamman partners with Opportunity International to deliver agricultural extension services, enhancing farmers' yields, management skills, income, and local economies through good agricultural practices training"
          }
        />
        <DevelopmentSchemesModel
          src={OrganicFarmingImage.src}
          name={"Agri Clinics"}
          desc={
            "Earliamman initiates the establishment of Agri-Clinics, providing farmers with expert guidance on soil health, cropping practices, plant protection, and post-harvest technology, alongside animal healthcare and market price insights"
          }
        />
        <DevelopmentSchemesModel
          src={PreventAdulterationImage.src}
          name={"Training for Farmers"}
          desc={
            "ERALI AMMAN trains farmers in good agricultural practices and business management skills to help them manage their land, effectively cultivate their crops, and increase their harvests."
          }
        />
        <DevelopmentSchemesModel
          src={PestControlImage.src}
          name={"Agricultural Training"}
          desc={
            "Earliamman partners with Opportunity International to deliver agricultural extension services, enhancing farmers' yields, management skills, income, and local economies through good agricultural practices training"
          }
        />
      </Box>
    </Box>
  );
};

export default DevelopmentSchemes;
