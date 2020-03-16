import { makeStyles } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

export const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap"
  },
  card: {
    maxWidth: 345,
    marginRight: 30,
    marginBottom: 30,
    position: 'relative'
  },
  media: {
    height: 0,
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
  btn: {
    display: 'flex',
    flexDirection: 'row-reverse',
    padding: 5
  }
}));
