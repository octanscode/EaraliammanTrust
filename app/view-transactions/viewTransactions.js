"use client";
import { Box, Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import DataTable from "./dataTable";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import AddTransactionPopup from "./addTransactionPopUp";
import AddEventFAB from "@/components/addEventFAB";

const FetchTransactionHistory = async () => {
  try {
    console.log("Inside FetchTransactionHistory api call");
    console.log(`${process.env.NEXT_PUBLIC_BACKEND_URL}/getAllTransactions`);
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/getAllTransactions`,
      {
        credentials: "include",
      }
    );
    if (response.ok) {
      console.log("Response is ", response);
      const responseBody = await response.json();
      console.log("Response body is ", responseBody);
      return responseBody.transactions;
    } else {
      return null;
    }
  } catch (error) {
    return null;
  }
};

const ViewTransactions = () => {
  const [data, setData] = useState("");
  const [selectedTransactionIds, setSelectedTransactionIds] = useState([]);
  const [selectionModel, setSelectionModel] = React.useState([]);
  console.log("Data is ", data);

  console.log("selectedTransactionIds Data is ", selectedTransactionIds);

  useEffect(() => {
    console.log("Inside use effect of ViewTransactions.js");
    FetchTransactionHistory()
      .then((fetchedData) => {
        setData(fetchedData);
      })
      .catch((err) => console.log(err));
  }, []);

  function GetSelectedTransactionIdsCallback(value, selectionModelValue) {
    setSelectedTransactionIds(value);
    setSelectionModel(selectionModelValue);
  }

  const handleDelete = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/deleteTransactions`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify({
            transactionIds: selectedTransactionIds,
          }),
        }
      );

      if (response.status === 200) {
        window.location.reload();
      }
    } catch (error) {
      console.error("Error deleting transactions:", error);
    }
  };
  return (
    <Box
      sx={{ p: 1, width: "100%", display: "flex", justifyContent: "center" }}
    >
      <Box sx={{ width: "90%", minHeight: "90vh" }}>
        <Typography variant="h4" sx={{ mb: 2, mt: 2 }}>
          Transaction History
        </Typography>
        <Box sx={{ display: "flex", mt: 2, mb: 2 }}>
          <AddTransactionPopup />
          <Button
            variant="outlined"
            onClick={handleDelete}
            sx={{ textTransform: "capitalize" }}
            startIcon={<DeleteOutlineOutlinedIcon />}
          >
            Delete Transaction
          </Button>
        </Box>
        {data && (
          <DataTable
            data={data}
            GetSelectedTransactionIdsCallback={
              GetSelectedTransactionIdsCallback
            }
            selectionModel={selectionModel}
          />
        )}
        <AddEventFAB />
        <Box sx={{ mt: 20 }} />
      </Box>
    </Box>
  );
};

export default ViewTransactions;
