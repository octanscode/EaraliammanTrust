import { Box, Paper, Typography } from "@mui/material";
import React from "react";
import { Card, CardContent, Avatar } from "@mui/material";
import RocketIcon from "@mui/icons-material/Rocket";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import DiamondOutlinedIcon from "@mui/icons-material/DiamondOutlined";

const DescriptionModel = ({ backgroundColor, topic, description, icon }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        // padding: 2,
        width: 350,
        position: "relative",
        borderRadius: "16px",
      }}
    >
      <Box
        sx={{
          position: "relative",
          width: 250,
          textAlign: "center",
          height: "100%",
        }}
      >
        <Box
          sx={{
            height: "10rem",
            width: "18rem",
            backgroundColor: backgroundColor,
            position: "absolute",
            top: "50%",
            borderRadius: "16px",
            right: 0,
            left: -18,
          }}
        />
        {/* Circular icon */}
        <Avatar
          sx={{
            width: 60,
            height: 60,
            backgroundColor: backgroundColor,
            position: "absolute",
            top: -30,
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 1,
          }}
        >
          {topic === "Mission" ? (
            <RocketIcon fontSize="large" />
          ) : topic === "Vision" ? (
            <RemoveRedEyeOutlinedIcon fontSize="large" />
          ) : (
            <DiamondOutlinedIcon fontSize="large" />
          )}
        </Avatar>
        {/* Main card */}
        <Card
          sx={{
            borderRadius: "16px",
            paddingTop: 4,
            paddingBottom: 2,
            paddingX: 2,
            backgroundColor: "#fff",
            position: "relative",
          }}
        >
          <CardContent>
            <Typography
              variant="h6"
              component="div"
              color="primary"
              sx={{ marginBottom: 2, color: backgroundColor }}
            >
              {topic}
            </Typography>
            <Typography variant="body2">{description}</Typography>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};

export default DescriptionModel;
