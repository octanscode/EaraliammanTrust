"use client";
import DevelopmentSchemesModel from "@/components/developmentSchemesModel";
import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import AgricultureClinicImage from "../../public/asset/image/clinic.jpg";
import TrainingForFarmersImage from "../../public/asset/image/organic-farming.png";
import AgricultureTrainingImage from "../../public/asset/image/agriculture-training.webp";
import OrganicFarmingImage from "../../public/asset/image/organic-farming.png";
import PreventAdulterationImage from "../../public/asset/image/Food-Adulteration.jpg";
import PestControlImage from "../../public/asset/image/pest.jpg";

const DevelopmentSchemes = () => {
  return (
    <Box
      sx={{ backgroundColor: "#F5F5F5", p: { xs: 2, lg: 4 }, width: "100%" }}
    >
      <Typography
        variant="h2"
        sx={{ color: "#041F54", textAlign: "center", mt: 4, mb: 4 }}
      >
        Earliamman Agricultural Development Schemes
      </Typography>
      <Box
        sx={{
          flexGrow: 1,
        }}
      >
        <Grid container rowSpacing={5} spacing={3}>
          <Grid item xs={12} md={4} xl={4}>
            <DevelopmentSchemesModel
              src={AgricultureClinicImage.src}
              name={"Agri Clinics"}
              desc={
                "Earliamman initiates the establishment of Agri-Clinics, providing farmers with expert guidance on soil health, cropping practices, plant protection, and post-harvest technology, alongside animal healthcare and market price insights"
              }
            />
          </Grid>
          <Grid item xs={12} md={4} xl={4}>
            <DevelopmentSchemesModel
              src={TrainingForFarmersImage.src}
              name={"Training for Farmers"}
              desc={
                "ERALI AMMAN trains farmers in good agricultural practices and business management skills to help them manage their land, effectively cultivate their crops, and increase their harvests."
              }
            />
          </Grid>
          <Grid item xs={12} md={4} xl={4}>
            <DevelopmentSchemesModel
              src={AgricultureTrainingImage.src}
              name={"Agricultural Training"}
              desc={
                "Earliamman partners with Opportunity International to deliver agricultural extension services, enhancing farmers' yields, management skills, income, and local economies through good agricultural practices training"
              }
            />
          </Grid>
        </Grid>
        <Box sx={{ mt: { xs: 5, lg: 8 }, mb: { xs: 5, lg: 8 } }}></Box>
        <Grid container rowSpacing={5} spacing={3}>
          <Grid item xs={12} md={4} xl={4}>
            <DevelopmentSchemesModel
              src={OrganicFarmingImage.src}
              name={"Agri Clinics"}
              desc={
                "Earliamman initiates the establishment of Agri-Clinics, providing farmers with expert guidance on soil health, cropping practices, plant protection, and post-harvest technology, alongside animal healthcare and market price insights"
              }
            />
          </Grid>
          <Grid item xs={12} md={4} xl={4}>
            <DevelopmentSchemesModel
              src={PreventAdulterationImage.src}
              name={"Training for Farmers"}
              desc={
                "ERALI AMMAN trains farmers in good agricultural practices and business management skills to help them manage their land, effectively cultivate their crops, and increase their harvests."
              }
            />
          </Grid>
          <Grid item xs={12} md={4} xl={4}>
            <DevelopmentSchemesModel
              src={PestControlImage.src}
              name={"Agricultural Training"}
              desc={
                "Earliamman partners with Opportunity International to deliver agricultural extension services, enhancing farmers' yields, management skills, income, and local economies through good agricultural practices training"
              }
            />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default DevelopmentSchemes;
