import React, { useState } from "react";
import styled from "styled-components/macro";
import { NavLink } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "react-quill/dist/quill.bubble.css";

import {
  Box,
  CardContent,
  Grid,
  Link,
  Breadcrumbs as MuiBreadcrumbs,
  Card as MuiCard,
  Divider as MuiDivider,
  Typography,
  Stack,
} from "@mui/material";
import { spacing } from "@mui/system";

const Card = styled(MuiCard)`
  ${spacing};

  overflow: visible;
`;

const Divider = styled(MuiDivider)(spacing);

const QuillWrapper = styled.div`
  .ql-editor {
    min-height: 200px;
  }
`;

function Quill(props) {
  const [value, setValue] = useState("");
  return (
    <React.Fragment>
      <Stack spacing={4}>
        {props.text.map((value) => (
          <Typography variant="h6" gutterBottom>
            {value}
          </Typography>
        ))}
      </Stack>

      <Box mt={3}>
        <QuillWrapper>
          <ReactQuill
            theme="snow"
            value={value}
            onChange={setValue}
            placeholder="Type something.."
          />
        </QuillWrapper>
      </Box>
    </React.Fragment>
  );
}

function Editors(props) {
  return <Quill text={props.text} key={props.key} />;
}

export default Editors;
