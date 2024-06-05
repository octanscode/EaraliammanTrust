import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { PRIMARY_BLUE } from "@/constants";
import Confetti from "react-confetti";

export default function ConfettiPopUp({ open, SuccessPopupOpenCallback }) {
  const handleClickOpen = () => {
    SuccessPopupOpenCallback(true);
  };

  const handleClose = () => {
    SuccessPopupOpenCallback(false);
  };

  return (
    <React.Fragment>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Thank You!"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Your message has been sent successfully. We appreciate you reaching
            out and will get back to you shortly.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            disableRipple
            onClick={handleClose}
            sx={{ color: PRIMARY_BLUE }}
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
