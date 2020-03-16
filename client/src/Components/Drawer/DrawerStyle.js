import { makeStyles } from "@material-ui/core/styles";

const drawerWidth = 240;
const sm = 175;

export const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  hide: {
    display: "none"
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    [theme.breakpoints.down("sm")]: {
      width: drawerWidth - sm
    }
  },
  drawerPaper: {
    width: drawerWidth,
    [theme.breakpoints.down("sm")]: {
      width: drawerWidth - sm
    }
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: "flex-end"
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    marginLeft: -drawerWidth,
    [theme.breakpoints.up("sm")]: {
      marginLeft: -drawerWidth
    },
    [theme.breakpoints.down("sm")]: {
      marginLeft: -65
    }
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginLeft: 0
  },
  listItemText: {
    [theme.breakpoints.down("sm")]: {
      display: "none"
    }
  },
}));
