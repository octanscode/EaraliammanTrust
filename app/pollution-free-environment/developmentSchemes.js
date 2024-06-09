import DevelopmentSchemesModel from "@/components/developmentSchemesModel";
import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import Eco1Image from "../../public/asset/image/poll-free-development/plastic.jpeg.jpg";
import Eco2Image from "../../public/asset/image/poll-free-development/plastic2.jpeg.jpg";
import Eco3Image from "../../public/asset/image/poll-free-development/ps3.png";
import Eco4Image from "../../public/asset/image/poll-free-development/plastic 3.jpeg.jpg";
import Eco5Image from "../../public/asset/image/poll-free-development/ps4.jpg";
import Eco6Image from "../../public/asset/image/poll-free-development/ps5.jpg";

const DevelopmentSchemes = () => {
  return (
    <Box sx={{ backgroundColor: "#F5F5F5", p: 4, width: "100%" }}>
      <Typography
        variant="h2"
        sx={{ color: "#041F54", textAlign: "center", mt: 4, mb: 4 }}
      >
        Earliamman Pollution Free Environment Schemes
      </Typography>
      <Box
        sx={{
          flexGrow: 1,
        }}
      >
        <Grid container rowSpacing={5} spacing={3}>
          <Grid item xs={12} md={4} xl={4}>
            <DevelopmentSchemesModel
              src={Eco1Image.src}
              name={"Plastic Avoidances"}
              desc={
                "Earliamman initiates a program to avoid polythene bags and other plastics, promoting eco-friendly alternatives and sustainable practices for a cleaner environment"
              }
            />
          </Grid>
          <Grid item xs={12} md={4} xl={4}>
            <DevelopmentSchemesModel
              src={Eco2Image.src}
              name={"Usage of Cotton Bags"}
              desc={
                "Earliamman initiates the implementation of cotton bags and Manja Pai (traditional woven bags), promoting sustainable alternatives to reduce reliance on plastic and protect the environment"
              }
            />
          </Grid>
          <Grid item xs={12} md={4} xl={4}>
            <DevelopmentSchemesModel
              src={Eco3Image.src}
              name={"Implementation of Jute Bags"}
              desc={
                "Earliamman leads the implementation of jute bags, advocating for eco-friendly alternatives to reduce plastic usage and promote sustainability in agricultural communities and beyond."
              }
            />
          </Grid>
        </Grid>
        <Box sx={{ mt: { xs: 5, lg: 8 }, mb: { xs: 5, lg: 8 } }}></Box>
        <Grid container rowSpacing={5} spacing={3}>
          <Grid item xs={12} md={4} xl={4}>
            <DevelopmentSchemesModel
              src={Eco4Image.src}
              name={"Paper and Paaku Thattu Plates"}
              desc={
                "Earliamman drives the implementation of paper plates and Paakku Thattu (Areca leaf plates), championing sustainable alternatives to plastic dining ware, fostering eco-friendly practices."
              }
            />
          </Grid>
          <Grid item xs={12} md={4} xl={4}>
            <DevelopmentSchemesModel
              src={Eco5Image.src}
              name={"Tree Plantation"}
              desc={
                "Earliamman spearheads widespread tree planting initiatives throughout Tamil Nadu, aiming to combat deforestation, enhance biodiversity, and foster environmental sustainability for present and future generations."
              }
            />
          </Grid>
          <Grid item xs={12} md={4} xl={4}>
            <DevelopmentSchemesModel
              src={Eco6Image.src}
              name={"Reduce,Reuse,Recycle"}
              desc={
                "Earliamman educates businesses on plastic disposal alternatives and advocates for government intervention. Collaboration with scientists aims to find sustainable solutions for environmental preservation."
              }
            />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default DevelopmentSchemes;
