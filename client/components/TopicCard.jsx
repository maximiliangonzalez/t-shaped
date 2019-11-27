import React from 'react';
import { useDispatch } from 'react-redux';
import { changeCurrentTopic } from '../actions/actions';

// TopicCard: visual representation of a topic a user is following.
// Clicking on it will render a modal with more info about that topic
const TopicCard = ({name, confident, _id, index}) => {
  const dispatch = useDispatch();

  return (
    <article 
      onClick={() => dispatch(changeCurrentTopic({name, index, confident, _id, notes: []}))} 
      className={`topic ${confident ? 'topic-confident' : 'topic-learning'}`}
    >
      <h1>
        {name}
      </h1>
    </article>
  );
};

export default TopicCard;
