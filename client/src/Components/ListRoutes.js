import React from "react";
import { useStyles } from '../Components/Drawer/DrawerStyle';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import AddIcon from "@material-ui/icons/Add";
import ListIcon from "@material-ui/icons/List";
import ListAltIcon from "@material-ui/icons/ListAlt";
import { Link } from "react-router-dom";

const ListRoutes = () => {
  const classes = useStyles();
  return (
    <List>
      <ListItem button component={Link} to="/">
        <ListItemIcon style={{ minWidth: 30 }}>
          <ListIcon />
        </ListItemIcon>
        <ListItemText primary="Recipe list" className={classes.listItemText} />
      </ListItem>
      <ListItem button component={Link} to="/create">
        <ListItemIcon style={{ minWidth: 30 }} >
          <AddIcon />
        </ListItemIcon>
        <ListItemText primary="Create recipe" className={classes.listItemText} />
      </ListItem>
      <ListItem button component={Link} to="/previous">
        <ListItemIcon style={{ minWidth: 30 }} >
          <ListAltIcon />
        </ListItemIcon>
        <ListItemText primary="Previous version" className={classes.listItemText} />
      </ListItem>
    </List>
  );
};

export default ListRoutes;
