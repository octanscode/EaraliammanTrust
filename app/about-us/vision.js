import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import FounderImage from "../../public/asset/image/vision.jpg";

const Vision = () => {
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
        <Grid
          container
          alignItems={"center"}
          justifyContent={"center"}
          direction={{
            xs: "column-reverse", // flexDirection for extra-small screens
            sm: "row", // flexDirection for small screens and above
          }}
        >
          <Grid item sx={12} lg={6}>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-end",
              }}
            >
              <Box>
                <Typography variant="h2" sx={{ color: "#041F54" }}>
                  Our Vision
                </Typography>
                <Typography
                  variant="h5"
                  sx={{ borderLeft: "4px solid lightgray", pl: 2, mt: 3 }}
                >
                  We envision inclusive and empowered communities with access to
                  essential services and sustainable livelihood opportunities.
                  Our goal is to foster clean, pollution-free environments where
                  individuals can thrive and access non-adulterated food
                  products
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item sx={12} lg={6}>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                alignItems: "flex-end",
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
        </Grid>
      </Box>
    </Box>
  );
};

export default Vision;
