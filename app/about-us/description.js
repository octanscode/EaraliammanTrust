import { Box, Typography } from "@mui/material";
import React from "react";
import FounderImage from "../../public/asset/image/founder.png";

const Description = () => {
  return (
    <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
      <Box
        sx={{
          display: "flex",
          width: "90%",
          justifyContent: "space-between",
          pt: 4,
          pb: 4,
        }}
      >
        <Box
          sx={{
            width: "45%",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            position: "relative",
          }}
        >
          <Box
            sx={{
              height: "80vh",
              width: "100%",
              backgroundColor: "gainsboro",
              pt: 3,
            }}
          >
            <img
              src={FounderImage.src}
              alt="Founder Image"
              style={{
                height: "100%",
                width: "100%",
                objectFit: "contain",
              }}
            />
          </Box>
          <Box
            sx={{
              position: "absolute",
              backgroundColor: "#060606",
              opacity: 0.65,
              left: 0,
              right: 0,
              bottom: 0,
              p: 1,
            }}
          >
            <Typography
              variant="h2"
              sx={{ color: "white", textAlign: "center" }}
            >
              Mr. Devadass S
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{ color: "white", textAlign: "center" }}
            >
              Founding and Managing Trustee
            </Typography>
          </Box>
        </Box>
        <Box sx={{ width: "50%" }}>
          <Box>
            <Typography variant="h2" sx={{ color: "#041F54" }}>
              About Earliamman Trust
            </Typography>
            <Typography
              variant="h5"
              sx={{ borderLeft: "4px solid lightgray", pl: 2, mt: 3 }}
            >
              Eraliamman Charitable Trust is a dedicated non-governmental
              organization committed to improving the quality of life for the
              urban and rural poor in Tamil Nadu, India. Founded on July 19,
              2019, we are registered under the Indian Trust Act, 1882. Our
              mission is to create equitable living environments by enhancing
              access to health, education, essential infrastructure, and
              sustainable livelihood options. Through our various projects, we
              strive to empower communities, promote sustainability, and foster
              inclusive development. To date, we have positively impacted over
              100,000 individuals, working tirelessly to build a brighter, more
              equitable future for all.
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Description;
