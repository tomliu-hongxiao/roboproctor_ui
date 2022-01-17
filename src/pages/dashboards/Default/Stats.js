import React, { forwardRef } from "react";
import { NavLink } from "react-router-dom";
import styled, { css } from "styled-components/macro";
import { rgba } from "polished";

import {
  Box,
  Card as MuiCard,
  CardMedia,
  CardContent as MuiCardContent,
  Chip as MuiChip,
  Divider as MuiDivider,
  IconButton,
  Typography as MuiTypography,
} from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { spacing } from "@mui/system";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

const Card = styled(MuiCard)`
  position: relative;
  margin-bottom: ${(props) => props.theme.spacing(6)};

  ${(props) =>
    props.illustration &&
    props.theme.palette.mode !== "dark" &&
    css`
      background: ${(props) => rgba(props.theme.palette.primary.main, 0.125)};
      color: ${(props) => props.theme.palette.primary.main};
    `}
`;

const Divider = styled(MuiDivider)(spacing);

const Typography = styled(MuiTypography)(spacing);

const CardContent = styled(MuiCardContent)`
  position: relative;

  &:last-child {
    padding-bottom: ${(props) => props.theme.spacing(4)};
  }
`;

const Chip = styled(MuiChip)`
  position: absolute;
  top: 16px;
  right: 16px;
  height: 20px;
  padding: 4px 0;
  font-size: 85%;
  background-color: ${(props) => props.theme.palette.secondary.main};
  color: ${(props) => props.theme.palette.common.white};
  margin-bottom: ${(props) => props.theme.spacing(4)};

  span {
    padding-left: ${(props) => props.theme.spacing(2)};
    padding-right: ${(props) => props.theme.spacing(2)};
  }
`;

const Percentage = styled(MuiTypography)`
  span {
    color: ${(props) => props.percentagecolor};
    font-weight: ${(props) => props.theme.typography.fontWeightBold};
    padding: 2px;
    border-radius: 3px;
    margin-right: ${(props) => props.theme.spacing(2)};
  }

  ${(props) =>
    props.illustration &&
    props.theme.palette.mode !== "dark" &&
    css`
      color: ${(props) => rgba(props.theme.palette.primary.main, 0.85)};
    `}
`;

const IllustrationImage = styled.img`
  height: 100px;
  position: absolute;
  right: ${(props) => props.theme.spacing(1)};
  bottom: ${(props) => props.theme.spacing(1)};
  display: none;

  ${(props) => props.theme.breakpoints.between("xs", "lg")} {
    display: block;
  }

  @media (min-width: 1600px) {
    display: block;
  }
`;
const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const CustomRouterLink = forwardRef((props, ref) => (
  <div ref={ref}>
    <NavLink {...props} />
  </div>
));

const Stats = ({
  assessmentpic,
  chip,
  href,
  percentagetext,
  percentagecolor,
  title,
  illustration,
}) => {
  return (
    <Card illustration={illustration}>
      <CardMedia
        component="img"
        height="140"
        image={assessmentpic}
        alt="green iguana"
      />
      <CardContent>
        <Typography variant="h5" mb={4}>
          {title}
        </Typography>

        <Chip label={chip} />
        <Divider my={1} />
        <Grid container spacing={0} direction="row"
          justifyContent="center"
          alignItems="center">
          <Grid item xs={4}>
            <Item component={CustomRouterLink} to="/pages/profile">
              <IconButton aria-label="play/pause">
                <PlayArrowIcon sx={{ height: 38, width: 38 }} />
              </IconButton>
            </Item>
          </Grid>
          <Grid item xs={6}></Grid>
          <Grid item xs={2}>
            <Item>
              <Percentage
                variant="subtitle2"
                color="textSecondary"
                percentagecolor={percentagecolor}
                illustration={illustration}
              >
                <span>{percentagetext}</span>
              </Percentage>
            </Item>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default Stats;
