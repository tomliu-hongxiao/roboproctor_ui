import {
  Button,
  Divider as MuiDivider,
  Grid,
  Typography as MuiTypography,
} from "@mui/material";
import { spacing } from "@mui/system";
import React from "react";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import styled from "styled-components/macro";
import Actions from "./Actions";
import AssessmentsList from "./Assessments";
const Divider = styled(MuiDivider)(spacing);

const Typography = styled(MuiTypography)(spacing);

function Assessment(props) {
  return (
    <React.Fragment>
      <Helmet title="Assessment In Progress" />
      <Grid justifyContent="space-between" container spacing={6}>
        <Grid item>
          <Typography variant="h3" gutterBottom>
            Assessment Dashboard
          </Typography>
          <Typography variant="subtitle1"></Typography>
        </Grid>

        <Grid item>
          <Actions />
        </Grid>
      </Grid>

      <Grid container justifyContent="space-between" spacing={2}>
        <Grid item xs={8}>
          <AssessmentsList />
        </Grid>
      </Grid>

      <Divider my={6} />
    </React.Fragment>
  );
}

export default Assessment;
