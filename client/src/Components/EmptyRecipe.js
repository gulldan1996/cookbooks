import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";

const EmptyRecipe = ({ text }) => {
  const classes = useStyles();

  return (
    <Box component="div" className={classes.spinner}>
      {text}
    </Box>
  );
};

const useStyles = makeStyles({
  spinner: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    fontSize: 25
  }
});

export default EmptyRecipe;
