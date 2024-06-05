"use client";
import CustomAppbar from "@/components/customAppbar";
import Footer from "@/components/footer";
import { Box, Toolbar } from "@mui/material";
import React, { useEffect, useState } from "react";
import NewsAndEvents from "./newsAndEvents";

const FetchAllEvents = async () => {
  try {
    console.log("Inside FetchAllEvents api call");
    console.log(`${process.env.NEXT_PUBLIC_BACKEND_URL}/getAllEvents`);
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/getAllEvents`,
      {
        credentials: "include",
      }
    );
    if (response.ok) {
      console.log("Response is ", response);
      const responseBody = await response.json();
      console.log("Response body is ", responseBody);
      return responseBody.events;
    } else {
      return null;
    }
  } catch (error) {
    return null;
  }
};

const page = () => {
  const [data, setData] = useState("");
  console.log("Data is ", data);

  useEffect(() => {
    console.log("Inside use effect of News and Events.js");
    FetchAllEvents()
      .then((fetchedData) => {
        setData(fetchedData);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Box>
      <CustomAppbar bgColor={"#f5f5f5"} />
      <Toolbar />
      <NewsAndEvents data={data} />
      <Footer />
    </Box>
  );
};

export default page;
