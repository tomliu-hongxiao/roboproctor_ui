import React from "react";
import styled from "styled-components/macro";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";

import {
  Grid,
  Divider as MuiDivider,
  Typography as MuiTypography,
} from "@mui/material";
import { spacing } from "@mui/system";
import { green, red } from "@mui/material/colors";

import Actions from "./Actions";
import BarChart from "./BarChart";
import LineChart from "./LineChart";
import DoughnutChart from "./DoughnutChart";
import Stats from "./Stats";
import Table from "./Table";

const Divider = styled(MuiDivider)(spacing);

const Typography = styled(MuiTypography)(spacing);

function Default() {
  const { t } = useTranslation();

  return (
    <React.Fragment>
      <Helmet title="Default Dashboard" />
      <Grid justifyContent="space-between" container spacing={6}>
        <Grid item>
          <Typography variant="h3" gutterBottom>
            Assessment Dashboard
          </Typography>
          <Typography variant="subtitle1">
            {t("Welcome back")}, Tom! {t("We've missed you")}.{" "}
            <span role="img" aria-label="Waving Hand Sign">
              👋
            </span>
          </Typography>
        </Grid>

        <Grid item>
          <Actions />
        </Grid>
      </Grid>

      <Divider my={6} />

      <Typography variant="h6" gutterBottom>
        Continue Previous:
      </Typography>

      <Grid container spacing={6}>
        <Grid item xs={3}>
          <Stats
            title="Assessment 1"
            assessmentpic="/static/img/assessment/assessment1.jpg"
            chip="Today"
            percentagetext="26%"
            percentagecolor={green[500]}
          />
        </Grid>
      </Grid>

      <Divider my={6} />

      <Typography variant="h6" gutterBottom>
        Upcoming:
      </Typography>
      <Grid container spacing={6}>
        <Grid item xs={12} sm={12} md={6} lg={3} xl>
          <Stats
            title="Assessment 2"
            assessmentpic="/static/img/assessment/assessment2.png"
            chip="2 days"
            percentagetext="26%"
            percentagecolor={green[500]}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={3} xl>
          <Stats
            title="Assessment 3"
            assessmentpic="/static/img/assessment/assessment3.jpg"
            chip="3 days"
            percentagetext="0%"
            percentagecolor={red[500]}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={3} xl>
          <Stats
            title="Assessment 4"
            assessmentpic="/static/img/assessment/assessment4.png"
            chip="4 days"
            percentagetext="+18%"
            percentagecolor={green[500]}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={3} xl>
          <Stats
            title="Assessment 5"
            assessmentpic="/static/img/assessment/assessment5.jpg"
            chip="15 days"
            percentagetext="0%"
            percentagecolor={red[500]}
          />
        </Grid>
      </Grid>
      <Divider my={6} />

      <Typography variant="h6" gutterBottom>
        Assessment Reports:
      </Typography>

      <Grid container spacing={6}>
        <Grid item xs={3}>
          <Stats
            title="Assessment 1 Report"
            assessmentpic="/static/img/assessment/assessment1.jpg"
            chip="Today"
            percentagetext="100%"
            percentagecolor={green[500]}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default Default;
