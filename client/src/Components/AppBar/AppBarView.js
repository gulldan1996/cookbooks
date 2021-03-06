import React from "react";
import { useStyles } from "./AppBarStyle";
import clsx from "clsx";
import AppBar from "@material-ui/core/AppBar";
import IconButton from "@material-ui/core/IconButton";
import Toolbar from "@material-ui/core/Toolbar";
import MenuIcon from "@material-ui/icons/Menu";

const AppBarView = ({
  open,
  handleDrawerOpen,
  location,
  handleDrawerClose
}) => {
  const classes = useStyles();

  return (
    <AppBar
      position="fixed"
      className={clsx(classes.appBar, {
        [classes.appBarShift]: open
      })}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={!open ? handleDrawerOpen : handleDrawerClose}
          edge="start"
          className={clsx(classes.menuButton, open && classes.hide)}
        >
          <MenuIcon />
        </IconButton>
        <h2 className={classes.appText}>
          {location}
        </h2>
      </Toolbar>
    </AppBar>
  );
};

export default AppBarView;
