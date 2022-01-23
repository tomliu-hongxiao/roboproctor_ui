import React, { useState, useEffect } from "react";
import Clock from "../../components/Clock";
import { Helmet } from "react-helmet-async";
import { DUMMY_PREVIEW_DATA } from "./constants";
import {
  Avatar as MuiAvatar,
  Box,
  Breadcrumbs as MuiBreadcrumbs,
  Button,
  Card as MuiCard,
  Chip as MuiChip,
  Divider,
  Grid as MuiGrid,
  Stack,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import * as Icon from "react-feather";

const styles = makeStyles({
  icon: {
    color: "green",
    paddingRight: "10px",
    width: "40px",
  },
});


function Submit(props) {
  const data = DUMMY_PREVIEW_DATA;
  const classes = styles();
  return (
    <React.Fragment>
      <Stack spacing={6}>
        <Helmet title={data.title} />
        <div>
          <Typography variant="h1" gutterBottom display="inline">
            {data.title}
          </Typography>
          <Divider orientation="horizontal" flexItem />
        </div>
        <div>
          <Icon.CheckCircle className={classes.icon} />
          <Typography variant="h3" gutterBottom display="inline">
            Success! Your assessment has been submitted!
          </Typography>
        </div>
        <div>
          <Typography variant="h5" gutterBottom display="block">
            Current Time
          </Typography>
          <Clock />
        </div>
        <div>
          <Typography variant="h5" gutterBottom display="block">
            Time Allowed
          </Typography>
          <Typography variant="body2" gutterBottom display="block">
            {data.timeAllowed} min
          </Typography>
        </div>
        <div>
          <Typography variant="h5" gutterBottom display="block">
            Attempts
          </Typography>
          <Typography variant="body2" gutterBottom display="block">
            Allowed - 1, Completed - 1
          </Typography>
        </div>

        <div>
          {/* <Button variant="contained" size="large">
            Done
          </Button> */}
          <Button variant="contained" size="large">
            Done
          </Button>
        </div>
      </Stack>
    </React.Fragment>
  );
}

export default Submit;
