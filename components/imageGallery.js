import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";

const ImageGallerySlider = ({ images }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === images.length - 1 ? 0 : prevSlide + 1
    );
  };
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000); // Adjust the interval (in milliseconds) as needed

    return () => clearInterval(interval);
  }, [currentSlide]);
  return (
    <Box
      sx={{
        width: { xs: "100%", lg: "90%" },
        backgroundColor: "white",
        display: "flex",
        justifyContent: "center",
        height: {
          xs: "35vh",
          sm: "45vh",
          md: "40vh",
          lg: "calc(100vh - 75px)",
          xl: "70vh",
        },
      }}
    >
      <img
        src={images[currentSlide]}
        alt="Carousel Image"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "fill",
        }}
      />
    </Box>
  );
};

export default ImageGallerySlider;
