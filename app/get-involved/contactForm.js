"use client";
import React, { useRef } from "react";
import {
  Container,
  TextField,
  Grid,
  Button,
  Typography,
  Checkbox,
  FormControlLabel,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
} from "@mui/material";
import { PRIMARY_BLUE } from "@/constants";
import emailjs from "@emailjs/browser";
import ConfettiPopUp from "@/components/confettiPopup";

const ContactForm = () => {
  const [isSuccessPopupOpen, setIsSuccessPopupOpen] = React.useState(false);
  const form = useRef();

  function SuccessPopupOpenCallback(value) {
    setIsSuccessPopupOpen(value);
  }

  const [educationSupport, setEducationSupport] = React.useState(false);
  const [healthcareAssistance, setHealthcareAssistance] = React.useState(false);
  const [environmentalProjects, setEnvironmentalProjects] =
    React.useState(false);
  const [communityOutreach, setCommunityOutreach] = React.useState(false);
  const [eventPlanning, setEventPlanning] = React.useState(false);
  const [other, setOther] = React.useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAIL_JS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAIL_JS_VOLUNTEER_FORM_TEMPLATE_ID,
        form.current,
        {
          publicKey: process.env.NEXT_PUBLIC_EMAIL_JS_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          console.log("EMAIL JS MAIL SUCCESS!");
          setIsSuccessPopupOpen(true);
          e.target.reset();
          setCommunityOutreach(false);
          setEducationSupport(false);
          setEnvironmentalProjects(false);
          setEventPlanning(false);
          setHealthcareAssistance(false);
          setOther(false);
        },
        (error) => {
          console.log("EMAIL JS MAIL FAILED...", error.text);
          setIsSuccessPopupOpen(false);
        }
      );
  };
  return (
    <Container style={{ marginTop: "20px" }}>
      <Typography
        variant="h4"
        gutterBottom
        sx={{ textAlign: "center", color: PRIMARY_BLUE, mb: 4 }}
      >
        Volunteer Form
      </Typography>
      <ConfettiPopUp
        open={isSuccessPopupOpen}
        SuccessPopupOpenCallback={SuccessPopupOpenCallback}
      />
      <form onSubmit={handleSubmit} ref={form}>
        {/* Personal Information */}
        <Typography variant="h6" gutterBottom>
          Personal Information
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="fullName"
              name="fullName"
              label="Full Name"
              fullWidth
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="dob"
              name="dob"
              label="Date of Birth"
              type="date"
              fullWidth
              variant="outlined"
              InputLabelProps={{ shrink: true }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="address"
              name="address"
              label="Address"
              fullWidth
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="city"
              name="city"
              label="City"
              fullWidth
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="state"
              name="state"
              label="State"
              fullWidth
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="zip"
              name="zip"
              label="Zip Code"
              fullWidth
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="phone"
              name="phone"
              label="Phone Number"
              fullWidth
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="email"
              name="email"
              label="Email Address"
              fullWidth
              variant="outlined"
            />
          </Grid>
        </Grid>

        {/* Emergency Contact Information */}
        <Typography variant="h6" gutterBottom style={{ marginTop: "20px" }}>
          Emergency Contact Information
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="emergencyName"
              name="emergencyName"
              label="Emergency Contact Name"
              fullWidth
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="relationship"
              name="relationship"
              label="Relationship"
              fullWidth
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="emergencyPhone"
              name="emergencyPhone"
              label="Emergency Contact Phone Number"
              fullWidth
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="emergencyEmail"
              name="emergencyEmail"
              label="Emergency Contact Email"
              fullWidth
              variant="outlined"
            />
          </Grid>
        </Grid>

        {/* Areas of Interest */}
        <Typography variant="h6" gutterBottom style={{ marginTop: "20px" }}>
          Areas of Interest
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <FormControlLabel
              control={
                <Checkbox
                  name="educationSupport"
                  checked={educationSupport}
                  onChange={(e) => setEducationSupport(e.target.checked)}
                />
              }
              label="Education Support"
            />
            <FormControlLabel
              control={
                <Checkbox
                  name="healthcareAssistance"
                  checked={healthcareAssistance}
                  onChange={(e) => setHealthcareAssistance(e.target.checked)}
                />
              }
              label="Healthcare Assistance"
            />
            <FormControlLabel
              control={
                <Checkbox
                  name="environmentalProjects"
                  checked={environmentalProjects}
                  onChange={(e) => setEnvironmentalProjects(e.target.checked)}
                />
              }
              label="Environmental Projects"
            />
            <FormControlLabel
              control={
                <Checkbox
                  name="communityOutreach"
                  checked={communityOutreach}
                  onChange={(e) => setCommunityOutreach(e.target.checked)}
                />
              }
              label="Community Outreach"
            />
            <FormControlLabel
              control={
                <Checkbox
                  name="eventPlanning"
                  checked={eventPlanning}
                  onChange={(e) => setEventPlanning(e.target.checked)}
                />
              }
              label="Event Planning"
            />
            <FormControlLabel
              control={
                <Checkbox
                  name="other"
                  checked={other}
                  onChange={(e) => setOther(e.target.checked)}
                />
              }
              label="Other (Please specify)"
            />
            <TextField
              id="otherInterest"
              name="otherInterest"
              label="Other Interest"
              fullWidth
              variant="outlined"
            />
          </Grid>
        </Grid>

        {/* Skills and Experience */}
        <Typography variant="h6" gutterBottom style={{ marginTop: "20px" }}>
          Skills and Experience
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="skills"
              name="skills"
              label="Relevant Skills"
              fullWidth
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="experience"
              name="experience"
              label="Previous Volunteer Experience"
              fullWidth
              variant="outlined"
              multiline
              rows={4}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="occupation"
              name="occupation"
              label="Current Occupation"
              fullWidth
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="previousJobs"
              name="previousJobs"
              label="Previous Jobs"
              fullWidth
              variant="outlined"
            />
          </Grid>
        </Grid>

        {/* Motivation */}
        <Typography variant="h6" gutterBottom style={{ marginTop: "20px" }}>
          Motivation
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              required
              id="motivation"
              name="motivation"
              label="Why do you want to volunteer with Erliamman Charitable Trust?"
              fullWidth
              variant="outlined"
              multiline
              rows={4}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="gain"
              name="gain"
              label="What do you hope to gain from this volunteer experience?"
              fullWidth
              variant="outlined"
              multiline
              rows={4}
            />
          </Grid>
        </Grid>

        {/* Additional Information */}
        <Typography variant="h6" gutterBottom style={{ marginTop: "20px" }}>
          Additional Information
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              id="hearAboutUs"
              name="hearAboutUs"
              label="How did you hear about us?"
              fullWidth
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="medicalConditions"
              name="medicalConditions"
              label="Any Medical Conditions or Allergies?"
              fullWidth
              variant="outlined"
              multiline
              rows={2}
            />
          </Grid>
        </Grid>

        <Button
          type="submit"
          variant="contained"
          color="primary"
          sx={{
            backgroundColor: PRIMARY_BLUE,
            "&:hover": {
              backgroundColor: PRIMARY_BLUE,
            },
          }}
          style={{ marginTop: "20px" }}
        >
          Submit
        </Button>
      </form>
    </Container>
  );
};

export default ContactForm;
