import React from "react";
import { Link } from "react-router-dom";

function PostItem({ posts }) {
  return (
    <div className="row">
      {posts.map(item => {
        return (
          <div className="col-md-4 border" key={item.id}>
            <h4>{item.title}</h4>
            <p>{item.title}</p>
            <Link to={`/posts/${item.id}`} className="btn btn-info mb-2">
              View Detail
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default PostItem;
