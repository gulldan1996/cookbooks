import React from "react";
import { connect } from "react-redux";
import { useStyles } from "./HistoryStyle";
import { Redirect } from "react-router-dom";
import { recipeReloading } from "../../redux/actions";
import { useHttp } from "../../hooks/http.hook";
import { reloading, filteredHistory } from "../../redux/selectors";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import EmptyRecipe from "../EmptyRecipe";

const HistoryRecipe = ({ filteredHistory, reloading, recipeReloading }) => {
  const classes = useStyles();
  const { loading, request } = useHttp();

  return (
    <div className={classes.root}>
      {filteredHistory && reloading ? (
        filteredHistory.map(filteredItem => {
          const { _id, name, description } = filteredItem;
          const date = filteredItem.date.slice(0, 19).replace("T", "  ");

          const deleteHistoryRecipe = async () => {
            try {
              await request(`/api/history/delete/${_id}`, "DELETE");
              recipeReloading();
            } catch (e) {}
          };

          return (
            <Card className={classes.card} key={_id}>
              <CardHeader title={name} subheader={date} />
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  {description}
                </Typography>
              </CardContent>
              <ListItemIcon
                className={classes.btn}
                onClick={deleteHistoryRecipe}
              >
                <IconButton aria-label="delete" size="small" disabled={loading}>
                  <DeleteIcon fontSize="small" />
                </IconButton>
              </ListItemIcon>
            </Card>
          );
        })
      ) : (
        <Redirect to="/previous" />
      )}
      {filteredHistory.length === 0 ? (
        <EmptyRecipe text="You don't have previous recipe(s)" />
      ) : null}
    </div>
  );
};

const mapStateToProps = state => ({
  filteredHistory: filteredHistory(state),
  reloading: reloading(state)
});

const mapDispatchToProps = dispatch => ({
  recipeReloading: () => dispatch(recipeReloading())
});

export default connect(mapStateToProps, mapDispatchToProps)(HistoryRecipe);
