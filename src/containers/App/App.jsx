import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Routes } from "./../../utils/routes";
import Navbar from "./../Navbar";
import { Home, Gnome } from "./../../views";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path={Routes.HOME} component={Home} />
        <Route exact path={Routes.GNOME} component={Gnome} />
      </Switch>
    </Router>
  );
};

export default App;
