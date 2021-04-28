import React from "react";
import Topic from "../Pages/Topics/Topic";

import { Switch, Route, useRouteMatch } from "react-router-dom";

function RouteApp() {
  const { path } = useRouteMatch();

  return (
    <Switch>
      <Route exact path={`${path}/:id`} component={Topic} />
    </Switch>
  );
}

export default RouteApp;
