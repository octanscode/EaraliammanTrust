"use client";
import CustomAppbar from "@/components/customAppbar";
import Footer from "@/components/footer";
import { Box, Toolbar, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import ViewNews from "./viewNews";
import Loader from "@/components/loader";
import PageLoader from "@/components/pageLoader";

const FetchUpdates = async (params) => {
  try {
    console.log(
      "Inside FetchUpdates function in News and params is ",
      params.id
    );
    console.log(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/getNewsWithId/${params.id}`
    );
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/getNewsWithId/${params.id}`,
      {
        credentials: "include",
      }
    );
    if (response.ok) {
      console.log("Response is ", response);
      const responseBody = await response.json();
      console.log("Response body is ", responseBody);
      return responseBody.event;
    } else {
      //   window.location.href = "/404";
      return null;
    }
  } catch (error) {
    return null;
  }
};

const page = ({ params }) => {
  const [data, setData] = useState("");
  console.log("Data is ", data);

  useEffect(() => {
    console.log("Inside use effect of home page.js");
    FetchUpdates(params)
      .then((fetchedData) => {
        setData(fetchedData);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Box>
      <CustomAppbar bgColor={"#f5f5f5"} />
      <Toolbar />
      {data ? <ViewNews data={data} /> : <PageLoader />}
      <Footer />
    </Box>
  );
};

export default page;
