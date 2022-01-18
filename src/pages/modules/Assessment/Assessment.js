import test from "../../../images/test.png";
import test2 from "../../../images/test2.png";
import React, { useState, useEffect } from "react";
import { getAssessment } from "../../../utils/APIHandler";
import { Q_TYPE } from "./constants";
import Radio from "@mui/material/Radio";
import { useNavigate } from "react-router-dom";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Editors from "../../forms/Editors";
import { Grid, Typography, Stack, Divider, Button, Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Countdown from "react-countdown";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

const styles = makeStyles({
  image: {
    width: "50em",
  },
});

const TopBar = (props) => {
  return (
    <Stack spacing={4}>
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={3}>
          <Typography variant="h6" gutterBottom display="inline">
            {props.title}
          </Typography>
        </Grid>
        <Grid item xs={9}>
          <Typography variant="h6" gutterBottom display="inline">
            Time Left: <Countdown date={Date.now() + props.timeAllowed} />
          </Typography>
        </Grid>
      </Grid>

      <Divider my={12} />
    </Stack>
  );
};

const SubmitDialog = (props) => {
  const [open, setOpen] = React.useState(false);
  const [fullWidth, setFullWidth] = React.useState(true);
  const [maxWidth, setMaxWidth] = React.useState("sm");
  const handleClickOpen = () => {
    setOpen(true);
  };
  const nav = useNavigate();
  const handleClose = () => {
    setOpen(false);
  };

  const handleOK = () => {
    setOpen(false);
    nav("/assessment/submit");
  };

  const handleMaxWidthChange = (event) => {
    setMaxWidth(
      // @ts-expect-error autofill of arbitrary value is not handled.
      event.target.value
    );
  };

  const handleFullWidthChange = (event) => {
    setFullWidth(event.target.checked);
  };

  return (
    <React.Fragment>
      <Button variant="contained" onClick={handleClickOpen}>
        Submit
      </Button>
      <Dialog
        fullWidth={fullWidth}
        maxWidth={maxWidth}
        open={open}
        onClose={handleClose}
      >
        <DialogTitle>Confirmation</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please click "OK" to submit your assessment.
          </DialogContentText>
          <Box
            noValidate
            component="form"
            sx={{
              display: "flex",
              flexDirection: "column",
              m: "auto",
              width: "fit-content",
            }}
          ></Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleOK}>OK</Button>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
};

function Assessment(props) {
  const classes = styles();
  const assessment = getAssessment(props.id);
  const questions = assessment.questions;
  return (
    <React.Fragment>
      <Grid container spacing={6}>
        <Grid item xs={10}>
          <TopBar
            timeAllowed={assessment.timeAllowed * 60000}
            title={assessment.title}
          />
        </Grid>
        {Object.keys(questions).map((key) => {
          const q = questions[key];
          if (q.type === Q_TYPE.MC) {
            return (
              <Grid item xs={8}>
                <FormControl component="fieldset">
                  <FormLabel component="legend" style={{ color: "black" }}>
                    <Typography variant="h6" gutterBottom>
                      {key}. {q.text}
                    </Typography>
                  </FormLabel>
                  {q.image_path != "" && (
                    <img
                      className={classes.image}
                      src={key === 1 ? test : test2}
                    ></img>
                  )}
                  <RadioGroup
                    aria-label={q.text.replace(/\s/g, "")}
                    defaultValue="female"
                    name="radio-buttons-group"
                  >
                    {q.choices.map((value) => (
                      <FormControlLabel
                        value={value.replace(/\s/g, "")}
                        control={<Radio />}
                        label={value}
                      />
                    ))}
                  </RadioGroup>
                </FormControl>
              </Grid>
            );
          } else if (q.type === Q_TYPE.SA) {
            q.text[0] = key + ". " + q.text[0];
            return (
              <Grid item xs={8}>
                <Editors key={key} text={q.text} />
              </Grid>
            );
          }
          return null;
        })}
        <Grid item xs={6}>
          <SubmitDialog />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default Assessment;
