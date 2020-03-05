import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import Box from "@material-ui/core/Box";

const LoadingPage = () => {
  const classes = useStyles();
  return (
    <Box component="div" className={classes.spinner}>
      <CircularProgress disableShrink />
    </Box>
  );
};

export default LoadingPage;

const useStyles = makeStyles({
  spinner: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)"
  }
});
