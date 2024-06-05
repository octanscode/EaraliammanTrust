import ImageGallerySlider from "@/components/imageGallery";
import { Box, Typography } from "@mui/material";
import React from "react";

function formatDate(dateString) {
  // Create a Date object from the input string
  const date = new Date(dateString);

  // Get the month name (0-indexed) and day of the month
  const month = date.getMonth(); // January = 0, December = 11
  const day = date.getDate();

  // Get the full year
  const year = date.getFullYear();

  // Create a new array of month names
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  // Format the date string with month name, day, and year
  const formattedDate = monthNames[month] + " " + day + ", " + year;

  return formattedDate;
}

const ViewNews = ({ data }) => {
  const { eventName, date, content, images } = data;
  const transformedImages = images.map((url) => ({
    original: url,
    thumbnail: url,
    originalHeight: 400,
    originalWidth: 400,
  }));
  return (
    <Box
      sx={{
        minHeight: "100vh",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        p: 2,
        mb: 8,
      }}
    >
      <Box sx={{ width: "80%" }}>
        <Typography variant="h2" sx={{ color: "black", mt: 1 }}>
          {eventName}
        </Typography>
        <Typography variant="subtitle1" sx={{ color: "black", mt: 0.3 }}>
          {formatDate(date)}
        </Typography>
        <Box
          sx={{
            mt: 2,
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <ImageGallerySlider images={images} />
        </Box>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            mt: 4,
          }}
        >
          {content.map((item, index) => (
            <Typography key={index} variant="h5" sx={{ mb: 3 }}>
              {item}
            </Typography>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default ViewNews;
