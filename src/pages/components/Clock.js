import React, { useState, useEffect } from "react";
import { Typography } from "@mui/material";
function Clock(props) {
  const [time, setTime] = useState(new Date().toLocaleString());
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleString());
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <Typography variant="body2" gutterBottom display="block">
      {time}
    </Typography>
  );
}

export default Clock;
