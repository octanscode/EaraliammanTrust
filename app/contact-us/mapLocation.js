import { Box } from "@mui/material";
import React from "react";

const MapLocation = () => {
  return (
    <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
      <Box
        sx={{
          width: { xs: "90%", lg: "80%" },
          height: { xs: "50vh", lg: "70vh" },
        }}
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3893.678164646548!2d80.0546667!3d12.6034498!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5300334148a939%3A0x180c63e5298a1298!2sBig%20St%2C%20Oragadam%20R.F.%2C%20Tirukazhukundram%2C%20Tamil%20Nadu%20603109!5e0!3m2!1sen!2sin!4v1717225187595!5m2!1sen!2sin"
          style={{ height: "100%", width: "100%" }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </Box>
    </Box>
  );
};

export default MapLocation;
