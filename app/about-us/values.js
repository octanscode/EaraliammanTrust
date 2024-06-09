import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import FounderImage from "../../public/asset/image/values.png";

const Values = () => {
  return (
    <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
      <Box
        sx={{
          display: "flex",
          width: "90%",
          justifyContent: "space-between",
          alignItems: "center",
          pt: 4,
          pb: 4,
        }}
      >
        <Grid container alignItems={"center"}>
          <Grid item sx={12} lg={6}>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                position: "relative",
                mb: { xs: 4, lg: 0 },
              }}
            >
              <Box
                sx={{
                  height: { xs: "40vh", lg: "50vh" },
                  width: { xs: "40vh", lg: "50vh" },
                  borderRadius: "50%",
                }}
              >
                <img
                  src={FounderImage.src}
                  alt="Founder Image"
                  style={{
                    height: "100%",
                    width: "100%",
                    objectFit: "cover",
                    borderRadius: "inherit",
                  }}
                />
              </Box>
            </Box>
          </Grid>
          <Grid item sx={12} lg={6}>
            <Box sx={{ width: "100%" }}>
              <Box>
                <Typography variant="h2" sx={{ color: "#041F54" }}>
                  Values We Provide
                </Typography>
                <Typography
                  variant="h5"
                  sx={{ borderLeft: "4px solid lightgray", pl: 2, mt: 3 }}
                >
                  At Eraliamman Charitable Trust, we value integrity,
                  compassion, sustainability, inclusivity, and empowerment. We
                  are committed to transparency and accountability, striving to
                  create lasting, positive impacts and fostering
                  self-sufficiency within the communities we serve.
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Values;
