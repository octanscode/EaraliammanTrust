import { Box, Paper, Typography } from "@mui/material";
import React from "react";

const EventModel = ({ src, name, content, date, id }) => {
  return (
    <Paper
      sx={{
        height: { xs: "48vh", lg: "52vh" },
        cursor: "pointer",
        mr: { xs: 1.5, lg: 3.5 },
        ml: { xs: 1.5, lg: 3.5 },
        mb: 5,
      }}
      component={"div"}
      onClick={() => (window.location.href = `/view-news-events/${id}`)}
      elevation={3}
    >
      <Box sx={{ height: "50%", width: "100%" }}>
        <img
          src={src}
          alt={name}
          style={{
            height: "100%",
            width: "100%",
            objectFit: "fill",
          }}
        />
      </Box>
      <Box
        sx={{
          height: "50%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          p: 2,
        }}
      >
        <Typography
          variant="subtitle2"
          sx={{ textAlign: "left", fontWeight: 600, mb: 0.3 }}
        >
          {name}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            textAlign: "left",
            fontWeight: 400,
            mb: 1.5,
          }}
        >
          {date}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            height: "49%",
            overflow: "hidden",
            textOverflow: "ellipsis",
            fontWeight: 400,
            wordBreak: "break-all",
            whiteSpace: "wrap",
          }}
        >
          {content}
        </Typography>
      </Box>
    </Paper>
  );
};

export default EventModel;
