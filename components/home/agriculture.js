import { Box, Button, Typography } from "@mui/material";
import React from "react";
import AgriImage from "../../public/asset/image/Agriculture.jpg";

const Agriculture = () => {
  return (
    <Box
      component={"div"}
      sx={{
        width: "100%",
        height: { xs: "55vh", lg: "75vh" },
        backgroundImage: `url(${AgriImage.src})`,
        backgroundSize: "cover",
        display: "flex",
        justifyContent: "flex-end",
      }}
    >
      <Box
        sx={{
          width: { xs: "100%", lg: "38%" },
          p: { xs: 2, lg: 4 },
          backgroundColor: "rgba(0, 0, 0, 0.6)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Typography variant="h3" sx={{ color: "white" }}>
          Agricultural Development
        </Typography>
        <Typography
          variant="subtitle2"
          sx={{ color: "white", mt: { xs: 2, lg: 4 }, mb: { xs: 2, lg: 2 } }}
        >
          Earliamman Trust focuses on agricultural welfare, offering clinics for
          expert advice, tree planting for environmental restoration, training
          programs for modern practices, and organic food manufacturing. Sales
          centers facilitate domestic and international trade, while support
          services streamline logistics, manpower, and marketing, aiming for
          sustainable rural development.
        </Typography>
        <a href="/agriculture-development">
          <Button
            sx={{
              backgroundColor: "white",
              alignSelf: "flex-start",
              opacity: 1,
              textTransform: "capitalize",
              color: "black",
              "&:hover": {
                backgroundColor: "white",
                opacity: 1,
                color: "black",
                textTransform: "capitalize",
              },
            }}
          >
            <Typography>Learn More</Typography>
          </Button>
        </a>
      </Box>
    </Box>
  );
};

export default Agriculture;
