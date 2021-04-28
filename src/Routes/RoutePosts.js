import React from "react";

import ListPosts from "../Pages/Posts/ListPosts";
import Post from "../Pages/Posts/Post";
import { Switch, Route, useRouteMatch } from "react-router-dom";

function RoutePosts() {
  const { path } = useRouteMatch();

  return (
    <Switch>
      <Route exact path={path} component={ListPosts} />
      <Route exact path={`${path}/:id`} component={Post} />
    </Switch>
  );
}

export default RoutePosts;
