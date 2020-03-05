import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const TextArea = ({ handler, name, placeholder, value }) => {
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
      multiline
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

export default TextArea;
