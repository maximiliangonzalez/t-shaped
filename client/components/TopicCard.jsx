import React from 'react';

// TopicCard: visual representation of a topic a user is following.
// Clicking on it will render a modal with more info about that topic
const TopicCard = ({name, confident, _id, setCurrentTopic, index}) => {
  return (
    <article 
      onClick={() => setCurrentTopic({name, index, confident, _id})} 
      className={`topic ${confident ? 'topic-confident' : 'topic-learning'}`}
    >
      <h1>
        {name}
      </h1>
    </article>
  );
};

export default TopicCard;
