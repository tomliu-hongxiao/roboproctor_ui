import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
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

function Preview(props) {
  const data = DUMMY_PREVIEW_DATA;
  const nav = useNavigate();

  const handleOK = () => {
    nav("/assessment/inprogress");
  };

  return (
    <React.Fragment>
      {/* {Object.keys(data).map((index) => {
        return (
          <div>
            {data[index]}
            {index}
          </div>
        );
      })} */}

      <Stack spacing={6}>
        <Helmet title={data.title} />
        <div>
          <Typography variant="h1" gutterBottom display="inline">
            {data.title}
          </Typography>
          <Divider orientation="horizontal" flexItem />
        </div>
        <div>
          <Typography variant="h3" gutterBottom display="inline">
            Assessment Details
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
            {data.attempts}
          </Typography>
        </div>
        <div>
          <Typography variant="h5" gutterBottom display="block">
            Instructions
          </Typography>
          <Stack spacing={2}>
            {data.instructions.map(function (value) {
              return (
                <Typography
                  key={value.length}
                  variant="body2"
                  gutterBottom
                  display="block"
                >
                  {value}
                </Typography>
              );
            })}
          </Stack>
        </div>
        <div>
          <Button onClick={handleOK} variant="contained" size="large">
            Start!
          </Button>
        </div>
      </Stack>
    </React.Fragment>
  );
}

export default Preview;
