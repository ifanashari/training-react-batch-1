import React from "react";
import Home from "../Pages/Home";
import Topics from "../Pages/Topics";
import Posts from "../Pages/Posts";

import { Switch, Route } from "react-router-dom";
function RouteApp() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/topic" component={Topics} />
      <Route path="/posts" component={Posts} />
    </Switch>
  );
}

export default RouteApp;
