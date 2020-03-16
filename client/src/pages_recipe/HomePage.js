import React, { useEffect } from "react";
import { connect } from "react-redux";
import clsx from "clsx";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBarView from "../Components/AppBar/AppBarView";
import DrawerView from "../Components/Drawer/DrawerView";
import { useRoutes } from "../routes";
import { useStyles } from "../Components/Drawer/DrawerStyle";
import { useHttp } from "../hooks/http.hook";
import {
  recipeLoading,
  historyLocation,
  historyRecipeLoading
} from "../redux/actions";
import { getRecipe, reloading, location } from '../redux/selectors';
import { useHistory } from "react-router-dom";

const HomePage = ({
  recipeLoading,
  reloading,
  historyLocation,
  location,
  historyRecipeLoading
}) => {
  const routes = useRoutes();
  let history = useHistory();
  const { request } = useHttp();
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    function hist() {
      historyLocation(history);
    }
    hist();
  }, [history.location.pathname]);

  useEffect(() => {
    async function fetchData() {
      const history = await request("/api/history", "GET");
      historyRecipeLoading(history);

      const response = await request("/api/recipe", "GET");
      recipeLoading(response);
    }
    fetchData();
  }, [reloading]);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBarView
        open={open}
        handleDrawerOpen={handleDrawerOpen}
        location={location}
        handleDrawerClose={handleDrawerClose}
      />
      <DrawerView open={open} handleDrawerClose={handleDrawerClose} />
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open
        })}
      >
        <div className={classes.drawerHeader} />
        {routes}
      </main>
    </div>
  );
};

const mapStateToProps = state => ({
  recipe: getRecipe(state),
  reloading: reloading(state),
  location: location(state),
});

const mapDispatchToProps = dispatch => ({
  recipeLoading: load => dispatch(recipeLoading(load)),
  historyLocation: e => dispatch(historyLocation(e)),
  historyRecipeLoading: load => dispatch(historyRecipeLoading(load))
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
