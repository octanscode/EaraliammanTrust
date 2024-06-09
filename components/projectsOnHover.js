import { PRIMARY_BLACK } from "@/constants";
import { Box, Button, IconButton, Paper, Typography } from "@mui/material";
import React, { useEffect } from "react";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

const ProjectsOnHover = () => {
  const tempArray = [false, false, false, false, false, false, false];
  const [hoveredOnMainMenu, setHoveredOnMainMenu] = React.useState(false);
  const [hoveredOnItem, setHoveredOnItem] = React.useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  const SetHoveredOnItemValue = (newValue, index) => {
    console.log(
      "Inside Set Hovered On ItemValue and values are ",
      newValue,
      index
    );
    let newArray = [...hoveredOnItem];
    newArray = tempArray;
    newArray[index] = newValue;
    setHoveredOnItem(newArray);
  };

  function handleLinks(index) {
    switch (index) {
      case 0:
        window.location.href = "/agriculture-development";
        break;
      case 1:
        window.location.href = "/pollution-free-environment";
        break;
      case 2:
        window.location.href = "/learning-and-development";
        break;
      default:
        window.location.href = "/";
        break;
    }
  }

  useEffect(() => {
    console.log("Hovered on Item is ", hoveredOnItem);
  }, [hoveredOnItem]);

  const items = [
    "Agriculture Development",
    "Pollution Free Environment",
    "Learning & Development",
  ];
  return (
    <Box
      onMouseEnter={() => setHoveredOnMainMenu(true)}
      onMouseLeave={() => setHoveredOnMainMenu(false)}
      sx={{ width: "100%" }}
    >
      <Typography variant="body1">Projects</Typography>
      {hoveredOnMainMenu && (
        <Box sx={{ position: "absolute" }}>
          <Box sx={{ height: "0.85rem" }} />
          <Paper
            sx={{
              width: "15rem",
              display: "flex",
              flexDirection: "column",
              p: 1,
              borderRadius: 1,
            }}
          >
            {items.map((item, index) => (
              <Button
                onClick={() => handleLinks(index)}
                disableRipple
                key={index}
                onMouseEnter={() => SetHoveredOnItemValue(true, index)}
                onMouseLeave={() => SetHoveredOnItemValue(false, index)}
                endIcon={
                  <Box
                    sx={{
                      width: "1rem",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "flex-end",
                    }}
                  >
                    {hoveredOnItem[index] && (
                      <ArrowRightIcon sx={{ color: "black" }} />
                    )}
                  </Box>
                }
              >
                <Typography
                  variant="body2"
                  sx={{
                    width: "12rem",
                    textAlign: "left",
                    color: "black",
                    textTransform: "capitalize",
                    fontWeight: 500,
                  }}
                >
                  {item}
                </Typography>
              </Button>
            ))}
          </Paper>
        </Box>
      )}
    </Box>
  );
};

export default ProjectsOnHover;
