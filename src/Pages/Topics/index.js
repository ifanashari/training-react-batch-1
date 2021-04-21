import React from "react";
// import {} from 'react-bootstrap'
import { BrowserRouter as Router, Link, useRouteMatch } from "react-router-dom";
import RouteTopics from "./../../Routes/RouteTopics";

function Topic() {
  let match = useRouteMatch();

  return (
    <Router>
      <h3>List of topics</h3>

      <div>
        <ul>
          <li>
            <Link to={`${match.url}/`}>Hello</Link>
          </li>
          <li>
            <Link to={`${match.url}/1`}>Topic 1</Link>
          </li>
          <li>
            <Link to={`${match.url}/2`}>Topic 2</Link>
          </li>
          <li>
            <Link to={`${match.url}/3`}>Topic 3</Link>
          </li>
        </ul>
      </div>

      <RouteTopics dataRouteMatch={match} />
    </Router>
  );
}

export default Topic;
