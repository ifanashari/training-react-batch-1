import React from "react";
import Topic from "../Pages/Topics/Topic";

import { Switch, Route } from "react-router-dom";

function RouteApp({ dataRouteMatch }) {
  const { path } = dataRouteMatch;

  return (
    <Switch>
      <Route exact path={`${path}/`}>
        hello
      </Route>
      <Route exact path={`${path}/:id`} component={Topic} />
    </Switch>
  );
}

export default RouteApp;
