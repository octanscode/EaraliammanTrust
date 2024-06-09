import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import OpportunityCard from "./opportunityCard";
import { PRIMARY_BLUE } from "@/constants";

const Opportunities = () => {
  return (
    <Box sx={{ mt: 7 }}>
      <Typography
        variant="h6"
        sx={{
          textAlign: "center",
          mb: 3,
          color: PRIMARY_BLUE,
          fontWeight: 600,
        }}
      >
        Volunteer Opportunities
      </Typography>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={{ xs: 2, lg: 1 }}>
          <Grid item xs={12} lg={2.4}>
            <OpportunityCard
              bgColor={"orange"}
              name={"Education Support"}
              content={
                "Assist in educational programs and help children achieve their full potential."
              }
            />
          </Grid>
          <Grid item xs={12} lg={2.4}>
            <OpportunityCard
              bgColor={"#4CAF50"}
              name={"Healthcare Assistance"}
              content={
                "Support our health initiatives by participating in health camps and awareness programs."
              }
            />
          </Grid>
          <Grid item xs={12} lg={2.4}>
            <OpportunityCard
              bgColor={"#03A9F4"}
              name={"Environmental Projects"}
              content={
                "Join our efforts to promote sustainable practices and protect the environment."
              }
            />
          </Grid>
          <Grid item xs={12} lg={2.4}>
            <OpportunityCard
              bgColor={"#FF5722"}
              name={"Community Outreach"}
              content={
                "Engage with communities to understand their needs and provide necessary support."
              }
            />
          </Grid>
          <Grid item xs={12} lg={2.4}>
            <OpportunityCard
              bgColor={"#9C27B0"}
              name={"Event Planning"}
              content={
                "Help organize and execute events that raise awareness and funds for our projects."
              }
            />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Opportunities;
