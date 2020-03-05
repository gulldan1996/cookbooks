import React from "react";
import { useStyles } from "./ButtonStyle";
import Button from "@material-ui/core/Button";

const ButtonView = ({ text, loading, func }) => {
  const classes = useStyles();
  return (
    <Button
      variant="contained"
      className={classes.button}
      onClick={func}
      disabled={loading}
      color="primary"
    >
      {text}
    </Button>
  );
};

export default ButtonView;
