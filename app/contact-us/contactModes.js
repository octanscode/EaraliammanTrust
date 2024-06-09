import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import ContactModel from "./contactModel";
import { PRIMARY_BLUE } from "@/constants";

const ContactModes = () => {
  return (
    <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
      <Box sx={{ width: { xs: "90%", lg: "80%" } }}>
        <Typography
          sx={{
            textAlign: "center",
            mb: 2,
            color: PRIMARY_BLUE,
            fontWeight: 600,
          }}
          variant="h4"
        >
          Contact Details
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} lg={4}>
            <ContactModel
              type={"call"}
              name={"Call Us"}
              content1={"+91 94983 24505"}
            />
          </Grid>
          <Grid item xs={12} lg={4}>
            <ContactModel
              type={"email"}
              name={"Email Us"}
              content1={"earaliamman@gmail.com"}
            />
          </Grid>
          <Grid item xs={12} lg={4}>
            <ContactModel
              type={"location"}
              name={"Location"}
              content1={
                "No.195, Big Street, Villagam Village, Pandur Post, Thirukazhukundram TALUK, Kanchipuram District - 603109"
              }
            />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default ContactModes;
