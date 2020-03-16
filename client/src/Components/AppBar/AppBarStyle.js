import { makeStyles } from "@material-ui/core/styles";
const drawerWidth = 240;
const sm = 175;

export const useStyles = makeStyles(theme => ({
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    [theme.breakpoints.down("sm")]: {
      width: `calc(100% - ${drawerWidth - sm}px)`,
      marginLeft: drawerWidth - sm
    }
  },
  appText: {
    [theme.breakpoints.down("sm")]: {
      marginLeft: 15
    }
  }
}));
