"use client";
import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import AddIcon from "@mui/icons-material/Add";
import { TextField } from "@mui/material";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";

export default function AddTransactionPopup() {
  const [open, setOpen] = React.useState(false);
  const [transactionId, setTransactionId] = React.useState("");
  const [date, setDate] = React.useState(dayjs());
  const [amount, setAmount] = React.useState(0);
  const [receipientName, setReceipientName] = React.useState("");
  const [projectName, setProjectName] = React.useState("");
  const [description, setDescription] = React.useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/addTransaction`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify({
            transactionId,
            date,
            amount,
            receipientName,
            projectName,
            description,
          }),
        }
      );
      console.log("Response is ", response);
      const responseBody = await response.json();
      console.log("Response body in Add Transaction is ", responseBody);
      if (response.ok) {
        console.log("Transaction Added Successfully!");
        handleClose();
        window.location.reload();
      } else {
        console.error(responseBody.message);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <React.Fragment>
      <Button
        variant="outlined"
        onClick={handleClickOpen}
        sx={{ mr: 3, textTransform: "capitalize" }}
        startIcon={<AddIcon />}
      >
        Add Transaction
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        fullWidth
        component={"form"}
        onSubmit={handleSubmit}
      >
        <DialogTitle id="alert-dialog-title">{"Add Transaction"}</DialogTitle>
        <DialogContent>
          <TextField
            id="transactionId"
            label="Transaction Id"
            variant="outlined"
            sx={{ width: "100%", mt: 2 }}
            value={transactionId}
            onChange={(e) => setTransactionId(e.target.value)}
            required
          />
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={["DatePicker"]} sx={{ mt: 1 }}>
              <DatePicker
                label="Date"
                sx={{ width: "100%" }}
                value={date}
                onChange={(newValue) => setDate(newValue)}
                required
              />
            </DemoContainer>
          </LocalizationProvider>
          <TextField
            id="amount"
            label="Amount"
            variant="outlined"
            sx={{ width: "100%", mt: 2 }}
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
          <TextField
            id="receipientName"
            label="Receipient Name"
            variant="outlined"
            sx={{ width: "100%", mt: 2 }}
            value={receipientName}
            onChange={(e) => setReceipientName(e.target.value)}
            required
          />
          <TextField
            id="projectName"
            label="Project Name"
            variant="outlined"
            sx={{ width: "100%", mt: 2 }}
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
            required
          />
          <TextField
            id="description"
            label="Description"
            variant="outlined"
            sx={{ width: "100%", mt: 2 }}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit" autoFocus>
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
