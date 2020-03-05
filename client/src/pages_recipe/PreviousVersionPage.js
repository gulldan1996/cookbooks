import React from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { historyHandlerId } from "../redux/actions";
import HistoryItem from "../Components/HistoryItem/HistoryItem";
import EmptyRecipe from "../Components/EmptyRecipe";
import LoadingPage from "./LoadingPage";
import { getRecipe, reloading } from "../redux/selectors";

const PreviousVersionPage = ({ history, historyHandlerId, reloading }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {history && reloading ? (
        history.map(item => {
          const { name, _id } = item;

          return (
            <HistoryItem
              key={_id}
              id={_id}
              name={name}
              historyHandlerId={historyHandlerId}
            />
          );
        })
      ) : (
        <LoadingPage />
      )}
      {history.length === 0 && reloading ? (
        <EmptyRecipe text="You don't have previous recipes, add a new one recipe" />
      ) : null}
    </div>
  );
};

const mapStateToProps = state => ({
  history: getRecipe(state),
  reloading: reloading(state),
});

const mapDispatchToProps = dispatch => ({
  historyHandlerId: id => dispatch(historyHandlerId(id))
});

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap"
  }
}));

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PreviousVersionPage);
