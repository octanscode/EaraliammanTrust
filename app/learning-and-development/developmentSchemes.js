import DevelopmentSchemesModel from "@/components/developmentSchemesModel";
import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import Learn1Image from "../../public/asset/image/learning-and-development/dev3.jpg";
import Learn2Image from "../../public/asset/image/learning-and-development/dev4.png";
import Learn3Image from "../../public/asset/image/learning-and-development/dev5.png";
import Learn4Image from "../../public/asset/image/learning-and-development/dev6.png";
import Learn5Image from "../../public/asset/image/learning-and-development/dev7.jpg";
import Learn6Image from "../../public/asset/image/learning-and-development/dev8.jpg";

const DevelopmentSchemes = () => {
  return (
    <Box sx={{ backgroundColor: "#F5F5F5", p: 4, width: "100%" }}>
      <Typography
        variant="h2"
        sx={{ color: "#041F54", textAlign: "center", mt: 4, mb: 4 }}
      >
        Earliamman Learning and Development Schemes
      </Typography>
      <Box
        sx={{
          flexGrow: 1,
        }}
      >
        <Grid container rowSpacing={5} spacing={3}>
          <Grid item xs={12} md={4} xl={4}>
            <DevelopmentSchemesModel
              src={Learn1Image.src}
              name={"Women Empowerment"}
              desc={
                "Earliamman promotes women's empowerment through entrepreneurship training, offering opportunities in tailoring, handicrafts, and cottage industries, aiming to provide economic independence and sustainable livelihoods for women in rural regions."
              }
            />
          </Grid>
          <Grid item xs={12} md={4} xl={4}>
            <DevelopmentSchemesModel
              src={Learn2Image.src}
              name={"Digital Learning"}
              desc={
                "Earliamman embraces digital learning as a transformative tool in education, providing flexibility, accessibility, and personalized learning experiences, where learners can study anywhere, anytime, at their own pace, accessing high-quality content."
              }
            />
          </Grid>
          <Grid item xs={12} md={4} xl={4}>
            <DevelopmentSchemesModel
              src={Learn3Image.src}
              name={"Digital Training"}
              desc={
                "Earliamman spearheads the simplification of research through digital learning, especially in fields like medical science, IT, and space exploration, fostering easier access to information and enhancing research efficiency."
              }
            />
          </Grid>
        </Grid>
        <Box sx={{ mt: { xs: 5, lg: 8 }, mb: { xs: 5, lg: 8 } }}></Box>
        <Grid container rowSpacing={5} spacing={3}>
          <Grid item xs={12} md={4} xl={4}>
            <DevelopmentSchemesModel
              src={Learn4Image.src}
              name={"E - Education for Childern"}
              desc={
                "Earliamman recognizes digital learning as a boon for parents, offering valuable resources for guiding children's education at home. Interactive e-learning enhances engagement and makes learning enjoyable for children, accelerating their understanding."
              }
            />
          </Grid>
          <Grid item xs={12} md={4} xl={4}>
            <DevelopmentSchemesModel
              src={Learn5Image.src}
              name={"Web Based Learning"}
              desc={
                "Earliamman acknowledges the ease of exam preparation through web-based learning, as students access resources online for answers and practice tests. Digital learning supports competitive exam readiness, offering guidebooks, mock tests, and online tutors."
              }
            />
          </Grid>
          <Grid item xs={12} md={4} xl={4}>
            <DevelopmentSchemesModel
              src={Learn6Image.src}
              name={"Online Classes"}
              desc={
                "Earliamman leverages digital and internet-based learning, fostering improved communication between teachers and students. Live chat sessions, blogs, and discussion forums facilitate clearer understanding and preparation for assignments and exams."
              }
            />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default DevelopmentSchemes;
