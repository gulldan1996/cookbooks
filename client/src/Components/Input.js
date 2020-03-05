import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const Input = ({ placeholder, name, handler, value }) => {
  const classes = useStyles();
  return (
    <TextField
      id="standard-basic"
      className={classes.textField}
      placeholder={placeholder}
      name={name}
      onChange={handler}
      margin="normal"
      type="text"
      value={value ? value : ""}
    />
  );
};

const useStyles = makeStyles(theme => ({
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 280
  }
}));

export default Input;
