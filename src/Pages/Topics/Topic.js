import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { TopicsContext } from "./index";

function Topic() {
  const { id } = useParams();

  const topics = useContext(TopicsContext);
  const [currentTopic, setCurrentTopic] = useState({});

  useEffect(() => {
    const currentTopic = topics.find(item => item.id === parseInt(id));
    setCurrentTopic({ ...currentTopic, isDetail: false } || {});
  }, [id]);

  return (
    <div>
      <h4>{currentTopic.title}</h4>
      {currentTopic.isDetail ? <p>{currentTopic.description}</p> : ""}
      <button
        type="button"
        className={`btn btn-info`}
        onClick={() =>
          setCurrentTopic({ ...currentTopic, isDetail: !currentTopic.isDetail })
        }
      >
        {currentTopic.isDetail ? "Show Less" : "Show More"}
      </button>
    </div>
  );
}

export default Topic;
