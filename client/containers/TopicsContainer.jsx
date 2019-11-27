import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TopicCard from '../components/TopicCard.jsx';
import TopicModal from '../components/TopicModal.jsx';
import { getTopics, changeCurrentTopic } from '../actions/actions';

const TopicsContainer = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTopics());
  }, []);
  
  const topics = useSelector(store => store.topics.following);

  // if currentTopic is null, the modal will not render anything
  // if not null, currentTopic will be an object with name, index, and confident properites

  // if users clicks exit button or anywhere off of the pop-up, close sets currentTopic to null to stop modal from rendering anything
  const close = e => {
    if (['background', 'close-button', 'delete-button'].includes(e.target.id)) {
      dispatch(changeCurrentTopic(null));
    }
  };

  // the list of followed topics
  const topicsDisplay = topics.map((topic, index) => {
    return <TopicCard 
            {...topic}
            key={topic._id} 
            index={index}
          />
  });

  return (
    <div className="offset-top">
      <TopicModal 
        close={close}
      />
      <section className="container">
        {topicsDisplay}
      </section>
    </div>
  );
};

export default TopicsContainer;
