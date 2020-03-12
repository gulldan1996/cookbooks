import React from "react";
import { HashRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/createStore";
import HomePage from "./pages_recipe/HomePage";

const App = () => {
  return (
    <Router>
      <Provider store={store}>
        <HomePage />
      </Provider>
    </Router>
  );
};

export default App;