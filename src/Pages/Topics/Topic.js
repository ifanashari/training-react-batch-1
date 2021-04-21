import React from "react";
import { useParams } from "react-router-dom";

function Topic() {
  const { id } = useParams();

  return (
    <div>
      <h4>Topic {id}</h4>

      <div>
        <ul>{/* <li><Link to={`${url}/:id`}>Topic A</Link></li> */}</ul>
      </div>
    </div>
  );
}

export default Topic;
