import { Box, Button, Typography } from "@mui/material";
import React from "react";
import AgriImage from "../../public/asset/image/Agriculture.jpg";

const Agriculture = () => {
  return (
    <Box
      component={"div"}
      sx={{
        width: "100%",
        height: "75vh",
        backgroundImage: `url(${AgriImage.src})`,
        backgroundSize: "cover",
        display: "flex",
        justifyContent: "flex-end",
      }}
    >
      <Box
        sx={{
          width: "38%",
          p: 4,
          backgroundColor: "#060606",
          opacity: 0.8,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Typography variant="h2" sx={{ color: "white" }}>
          Agricultural Development
        </Typography>
        <Typography variant="subtitle2" sx={{ color: "white", mt: 4, mb: 2 }}>
          Earliamman Trust focuses on agricultural welfare, offering clinics for
          expert advice, tree planting for environmental restoration, training
          programs for modern practices, and organic food manufacturing. Sales
          centers facilitate domestic and international trade, while support
          services streamline logistics, manpower, and marketing, aiming for
          sustainable rural development.
        </Typography>
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
      </Box>
    </Box>
  );
};

export default Agriculture;
