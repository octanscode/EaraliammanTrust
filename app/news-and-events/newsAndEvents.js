import { Box, Typography } from "@mui/material";
import React from "react";
import EventModel from "./eventModel";
import Loader from "@/components/loader";

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

const NewsAndEvents = ({ data }) => {
  return (
    <Box
      sx={{
        minHeight: "80vh",
        width: "100%",
        display: "flex",
        justifyContent: "center",
      }}
    >
      {data ? (
        <Box sx={{ width: "95%", pt: 2, pb: 2, mb: 8 }}>
          <Typography variant="h2">Latest News and Events</Typography>
          <Box
            sx={{
              mt: 4,
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "flex-start",
            }}
          >
            {data ? (
              data.map((item, index) => (
                <EventModel
                  key={index}
                  src={item.images[0]}
                  name={item.eventName}
                  content={item.content[0]}
                  date={formatDate(item.date)}
                  id={item._id}
                />
              ))
            ) : (
              <Typography variant="body1">
                No events to show. Stay Tuned for new events.
              </Typography>
            )}
          </Box>
        </Box>
      ) : (
        <Loader />
      )}
    </Box>
  );
};

export default NewsAndEvents;
