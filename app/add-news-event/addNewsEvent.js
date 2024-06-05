import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import AddIcon from "@mui/icons-material/Add";
import { styled } from "@mui/material/styles";
import AlertMessage from "@/components/alert";
import { PRIMARY_BLUE } from "@/constants";
import GetFirebaseStoragePath from "@/utilities/getFirebaseStoragePath";
import SuccessAlertMessage from "@/components/successAlert";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

const AddNewsEvent = () => {
  const [eventName, setEventName] = React.useState("");
  const [date, setDate] = React.useState(dayjs());
  const [isEventPhotosSet, setIsEventPhotosSet] = useState(false);
  const [uploadedImages, setUploadedImages] = useState([]);
  const [para1, setPara1] = useState("");
  const [para2, setPara2] = useState("");
  const [para3, setPara3] = useState("");
  const [para4, setPara4] = useState("");
  const [para5, setPara5] = useState("");
  const [para6, setPara6] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [isLoadingScreenOpen, setIsLoadingScreenOpen] = useState(false);
  const [isProgressBarOpen, setIsProgressBarOpen] = useState(false);

  const handleMediaUpload = async (selectedFile, fileName) => {
    if (!selectedFile) return null;
    return new Promise((resolve, reject) => {
      const firebaseConfig = {
        apiKey: process.env.NEXT_PUBLIC_FIREBASE_APILEY,
        authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTHDOMAIN,
        projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECTID,
        storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGEBUCKET,
        messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGINGSENDERID,
        appId: process.env.NEXT_PUBLIC_FIREBASE_APPID,
      };

      const firebaseApp = initializeApp(firebaseConfig);
      const db = getFirestore(firebaseApp);
      const storage = getStorage();
      console.log("Storage is ", storage);
      const storageRef = ref(storage, `${GetFirebaseStoragePath()}${fileName}`);
      console.log("Storage ref is ", storageRef);
      let imageUrl = null;
      console.log("Selected file for upload is ", selectedFile);
      uploadBytes(storageRef, selectedFile)
        .then((snapshot) => {
          console.log("Uploaded a file!");
          const imageRef = ref(
            storage,
            `${GetFirebaseStoragePath()}${fileName}`
          );
          getDownloadURL(imageRef)
            .then((url) => {
              console.log("The Image URL is ", url);
              imageUrl = url;
              resolve(imageUrl);
            })
            .catch((error) => {
              console.log(error.code);
              reject(error);
            });
        })
        .catch((error) => {
          console.log("Error is ", error);
          reject(error);
        });
    });
  };

  const handleMultipleMediaUpload = (event, type) => {
    setIsProgressBarOpen(true);
    const promises = [];
    if (type === "image") {
      const files = event.target.files;
      if (files.length > 5) {
        setErrorMsg("Max 5 images allowed.");
        return;
      }
      let currentUploadedImages = [];
      for (let i = 0; i < files.length; i++) {
        promises.push(
          handleMediaUpload(files[i], files[i].name)
            .then((url) => {
              if (url) currentUploadedImages.push(url);
            })
            .catch((err) => console.log(err))
        );
      }
      Promise.all(promises)
        .then(() => {
          console.log("Setting uploaded images and event photos to be true");
          console.log(currentUploadedImages);
          setUploadedImages(currentUploadedImages);
          setIsEventPhotosSet(true);
          setIsProgressBarOpen(false);
        })
        .catch((err) => {
          console.log(err);
          setIsProgressBarOpen(false);
        });
    } else {
      const files = event.target.files;
      let currentUploadedVideo = [];
      if (files) {
        for (let i = 0; i < files.length; i++) {
          promises.push(
            handleMediaUpload(files[i], files[i].name)
              .then((url) => {
                if (url) currentUploadedVideo.push(url);
              })
              .catch((err) => console.log(err))
          );
        }
        Promise.all(promises)
          .then(() => {
            setUploadedVideos(currentUploadedVideo);
            setIsEventVideosSet(true);
            setIsProgressBarOpen(false);
          })
          .catch((err) => {
            console.log(err);
            setIsProgressBarOpen(false);
          });
      }
    }
  };

  function getNonEmptyStrings(...strings) {
    return strings.filter((str) => str.trim() !== "");
  }

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      if (uploadedImages.length === 0) {
        setErrorMsg("Please select atleast one image for the event");
        return;
      }
      setErrorMsg("");
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/addEvent`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify({
            eventName,
            date,
            content: getNonEmptyStrings(
              para1,
              para2,
              para3,
              para4,
              para5,
              para6
            ),
            images: uploadedImages,
          }),
        }
      );
      console.log("Response is ", response);
      const responseBody = await response.json();
      console.log("Response body in Add Event is ", responseBody);
      if (response.ok) {
        console.log("Event Added Successfully!");
        setSuccessMsg("Event Added Successfully!");
        setTimeout(window.location.reload(), 2000);
      } else {
        console.error(responseBody.message);
      }
    } catch (error) {}
  };

  return (
    <Box
      sx={{
        width: "100%",
        p: 2,
        display: "flex",
        justifyContent: "center",
        pb: 6,
        pt: 6,
      }}
    >
      <Box
        component={"form"}
        onSubmit={handleSubmit}
        sx={{ width: "80%", display: "flex", flexDirection: "column" }}
      >
        <Typography variant="h3" sx={{ textAlign: "center" }}>
          Event Details
        </Typography>
        <TextField
          id="outlined-basic"
          placeholder="Event Name"
          variant="outlined"
          value={eventName}
          onChange={(e) => setEventName(e.target.value)}
          sx={{ mt: 3 }}
          required
          type="text"
        />
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer components={["DatePicker"]} sx={{ mt: 2 }}>
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
          id="outlined-multiline-static"
          multiline
          rows={4}
          placeholder="Paragraph 1"
          sx={{ mt: 3 }}
          value={para1}
          onChange={(e) => setPara1(e.target.value)}
          required
          type="text"
        />
        <TextField
          id="outlined-multiline-static"
          multiline
          rows={4}
          placeholder="Paragraph 2"
          sx={{ mt: 3 }}
          value={para2}
          onChange={(e) => setPara2(e.target.value)}
          required
          type="text"
        />
        <TextField
          id="outlined-multiline-static"
          multiline
          rows={4}
          placeholder="Paragraph 3"
          sx={{ mt: 3 }}
          value={para3}
          onChange={(e) => setPara3(e.target.value)}
          type="text"
        />
        <TextField
          id="outlined-multiline-static"
          multiline
          rows={4}
          placeholder="Paragraph 4"
          sx={{ mt: 3 }}
          value={para4}
          onChange={(e) => setPara4(e.target.value)}
          type="text"
        />
        <TextField
          id="outlined-multiline-static"
          multiline
          rows={4}
          placeholder="Paragraph 5"
          sx={{ mt: 3 }}
          value={para5}
          onChange={(e) => setPara5(e.target.value)}
          type="text"
        />
        <TextField
          id="outlined-multiline-static"
          multiline
          rows={4}
          placeholder="Paragraph 6"
          sx={{ mt: 3 }}
          value={para6}
          onChange={(e) => setPara6(e.target.value)}
          type="text"
        />
        <Box sx={{ mt: 2, mb: 3 }}>
          <Typography variant="h5" sx={{ fontWeight: 600 }}>
            Photos
          </Typography>
          <Box
            component="label"
            sx={{
              width: "100%",
              display: "flex",
              mt: 1,
            }}
          >
            <Button
              sx={{ textTransform: "capitalize" }}
              startIcon={<AddIcon />}
              component={"label"}
            >
              Add Images
              <VisuallyHiddenInput
                type="file"
                accept="image/*"
                multiple
                onChange={(e) => handleMultipleMediaUpload(e, "image")}
              />
            </Button>
          </Box>

          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexWrap: "wrap",
              mb: 1,
              mt: 1,
            }}
          >
            {isEventPhotosSet && uploadedImages.length > 0 ? (
              uploadedImages.map((detail, index) => (
                <Box sx={{ width: "6rem", height: "6rem", m: 0.5 }}>
                  <img
                    src={detail}
                    alt={detail}
                    style={{
                      objectFit: "contain",
                      width: "100%",
                      height: "100%",
                    }}
                  />{" "}
                </Box>
              ))
            ) : (
              <Typography variant="body2">No Images Added yet</Typography>
            )}{" "}
          </Box>
        </Box>
        <Box sx={{ mt: 2, mb: 2 }}>
          <AlertMessage msg={errorMsg} />
        </Box>
        <Box sx={{ mt: 2, mb: 2 }}>
          <SuccessAlertMessage msg={successMsg} />
        </Box>
        <Button
          type="submit"
          sx={{
            backgroundColor: PRIMARY_BLUE,
            color: "white",
            p: 1.5,
            "&:hover": {
              backgroundColor: PRIMARY_BLUE,
              color: "white",
            },
          }}
        >
          Add Event
        </Button>
      </Box>
    </Box>
  );
};

export default AddNewsEvent;
