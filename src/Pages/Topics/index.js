import React from "react";
// import {} from 'react-bootstrap'
import { Link, useRouteMatch } from "react-router-dom";
import RouteTopics from "../../Routes/RouteTopics";
import { defaultTopics } from "../../Constant/topics";

export const TopicsContext = React.createContext();

function Topic() {
  let match = useRouteMatch();

  return (
    <React.Fragment>
      <h3>List of topics</h3>

      <div>
        <ul>
          {defaultTopics.map((item, index) => {
            return (
              <li key={item.id}>
                <Link to={`${match.url}/${item.id}`}>{item.title}</Link>
              </li>
            );
          })}
        </ul>
      </div>

      <TopicsContext.Provider value={defaultTopics}>
        <RouteTopics />
      </TopicsContext.Provider>
    </React.Fragment>
  );
}

export default Topic;
