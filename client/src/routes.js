import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import ListPage from "./pages_recipe/ListPage";
import AddPage from "./pages_recipe/CreateRecipe";
import ModifyPage from "./pages_recipe/ModifyPage";
import PreviousVersionPage from "./pages_recipe/PreviousVersionPage";
import HistoryRecipe from "./Components/HistoryRecipe/HistoryRecipe";

export const useRoutes = () => (
  <Switch>
    <Route path="/" exact>
      <ListPage />
    </Route>
    <Route path="/create">
      <AddPage />
    </Route>
    <Route path="/modify/:id">
      <ModifyPage />
    </Route>
    <Route path="/previous">
      <PreviousVersionPage />
    </Route>
    <Route path='/historyRecipe/:id'>
      <HistoryRecipe />
    </Route>
    <Redirect to="/" />
  </Switch>
);
