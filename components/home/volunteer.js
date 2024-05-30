import { Box, Button, Typography } from "@mui/material";
import React from "react";
import VolunteerImage from "../../public/asset/image/volunteer.jpg";

const Volunteer = () => {
  return (
    <Box
      component={"div"}
      sx={{
        width: "100%",
        backgroundColor: "#041F54",
        display: "flex",
        justifyContent: "center",
        p: 10,
      }}
    >
      <Box
        sx={{
          width: "80%",
          display: "flex",
          height: "100%",
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ width: "60%", height: "100%" }}>
          <img
            src={VolunteerImage.src}
            alt="Volunteer"
            style={{
              height: "100%",
              width: "100%",
              objectFit: "contain",
              borderRadius: "0.5rem",
            }}
          />
        </Box>
        <Box sx={{ width: "35%", color: "white" }}>
          <Typography variant="h2">Join Us as a Volunteer </Typography>
          <Typography
            variant="subtitle1"
            sx={{
              mt: 4,
              mb: 3,
              borderLeft: "4px solid white",
              pl: 2,
              color: "lightgray",
            }}
          >
            Join Eraliamman Charitable Trust as a volunteer to empower
            communities, promote sustainability, and make a lasting impact in
            Tamil Nadu. Apply now and help us create a brighter future.{" "}
          </Typography>
          <Button
            sx={{
              color: "#041F54",
              backgroundColor: "white",
              textTransform: "capitalize",
              "&:hover": {
                color: "#041F54",
                backgroundColor: "white",
              },
            }}
          >
            Join Us
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Volunteer;
