import * as React from "react";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import FavoriteIcon from "@mui/icons-material/Favorite";
import NavigationIcon from "@mui/icons-material/Navigation";

export default function AddEventFAB() {
  return (
    <Box
      sx={{
        "& > :not(style)": { m: 1 },
        position: "absolute",
        right: 20,
        bottom: 20,
      }}
    >
      <a href="/add-news-event">
        <Fab variant="extended">
          <AddIcon sx={{ mr: 1 }} />
          Add News / Event
        </Fab>
      </a>
    </Box>
  );
}
