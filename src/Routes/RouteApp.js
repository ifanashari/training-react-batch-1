import React from "react";
import Home from "../Pages/Home";
import Topics from "../Pages/Topics";

import { Switch, Route } from "react-router-dom";
function RouteApp() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/topic" component={Topics} />
    </Switch>
  );
}

export default RouteApp;
