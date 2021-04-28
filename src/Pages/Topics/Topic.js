import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { TopicsContext } from "./index";

function Topic() {
  const { id } = useParams();

  const topics = useContext(TopicsContext);
  const [currentTopic, setCurrentTopic] = useState({});

  useEffect(() => {
    const currentTopic = topics.find(item => item.id === parseInt(id));
    setCurrentTopic(currentTopic || {});
  }, [id]);

  return (
    <div>
      <h4>{currentTopic.title}</h4>
      <p>{currentTopic.description}</p>
    </div>
  );
}

export default Topic;
