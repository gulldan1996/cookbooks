import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useHttp } from "../../hooks/http.hook";
import { Link } from "react-router-dom";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import IconButton from "@material-ui/core/IconButton";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";

const ButtonController = ({ id, reloadingRecipe, modifyRecipe }) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const { loading, request } = useHttp();

  const handleClick = () => {
    setOpen(prev => !prev);
  };

  const handleClickAway = () => {
    setOpen(false);
  };

  const deleteRecipe = async () => {
    try {
      await request(`/api/recipe/delete/${id}`, "DELETE");
      reloadingRecipe();
    } catch (e) {}
  };

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <div className={classes.wrapper}>
        <IconButton aria-label="settings" onClick={handleClick}>
          <MoreVertIcon />
        </IconButton>
        {open ? (
          <List className={classes.div}>
            <ListItem
              component={Link}
              to={`modify/${id}`}
              onClick={() => modifyRecipe(id)}
            >
              <ListItemIcon>
                <IconButton aria-label="edit" size="small">
                  <EditIcon fontSize="small" />
                </IconButton>
              </ListItemIcon>
            </ListItem>
            <ListItem onClick={deleteRecipe}>
              <ListItemIcon>
                <IconButton aria-label="delete" size="small" disabled={loading}>
                  <DeleteIcon fontSize="small" />
                </IconButton>
              </ListItemIcon>
            </ListItem>
          </List>
        ) : null}
      </div>
    </ClickAwayListener>
  );
};

const useStyles = makeStyles({
  wrapper: {
    position: "relative"
  },
  div: {
    position: "absolute",
    top: 25,
    right: -0,
    left: -4
  }
});

export default ButtonController;
