import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
    width: 150
  },
  input: {
    display: "none"
  }
}));
