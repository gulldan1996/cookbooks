import React from "react";
import { connect } from "react-redux";
import { reloadingRecipe, modifyRecipe } from "../redux/actions";
import { getRecipe, reloading } from "../redux/selectors";
import { makeStyles } from "@material-ui/core/styles";
import RecipeItem from "../Components/RecipeItem/RecipeItem";
import LoadingPage from "./LoadingPage";
import EmptyRecipe from "../Components/EmptyRecipe";

const ListPage = ({ recipe, reloading, reloadingRecipe, modifyRecipe }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {recipe && reloading ? (
        recipe.map(recipeItem => {
          const { name, description, _id } = recipeItem;

          return (
            <RecipeItem
              key={_id}
              name={name}
              description={description}
              rec={recipeItem}
              reloadingRecipe={reloadingRecipe}
              modifyRecipe={modifyRecipe}
            />
          );
        })
      ) : (
        <LoadingPage />
      )}
      {recipe.length === 0 && reloading ? (
        <EmptyRecipe text="You don't have recipes, add a new one" />
      ) : null}
    </div>
  );
};

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap"
  }
});

let mapStateToProps = state => ({
  recipe: getRecipe(state),
  reloading: reloading(state)
});

let mapDispatchToProps = dispatch => ({
  reloadingRecipe: () => dispatch(reloadingRecipe()),
  modifyRecipe: id => dispatch(modifyRecipe(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(ListPage);
