import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TopicCard from '../components/TopicCard.jsx';
import TopicModal from '../components/TopicModal.jsx';
import * as actions from '../actions/actions';

const TopicsContainer = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.getTopics());
  }, []);
  
  const topics = useSelector(store => store.topics.following);

  // if currentTopic is null, the modal will not render anything
  // if not null, currentTopic will be an object with name, index, and confident properites
  const [currentTopic, setCurrentTopic] = useState(null);

  // if a user changes their confidence in a topic to "learned" the topic will show as green, otherwise it will be gray
  const changeConfidence = index => {
    setTopics(prevTopics => {
      // this will have to take place only after database has been successfully updated to reflect change in confidence
      const updatedTopics = [...prevTopics];
      updatedTopics[index] = {
        ...prevTopics[index], 
        confident: !prevTopics[index].confident
      }
      return updatedTopics;
    });
  };

  // if users clicks exit button or anywhere off of the pop-up, close sets currentTopic to null to stop modal from rendering anything
  const close = e => {
    if (['background', 'close-button', 'delete-button'].includes(e.target.id)) {
      setCurrentTopic(null);
    }
  };

  // the list of followed topics
  const topicsDisplay = topics.map((topic, index) => {
    return <TopicCard 
            {...topic}
            changeConfidence={changeConfidence} 
            setCurrentTopic={setCurrentTopic}
            key={topic._id} 
            index={index}
          />
  });

  return (
    <div className="offset-top">
      <TopicModal 
        currentTopic={currentTopic}
        changeConfidence={changeConfidence}
        close={close}
      />
      <section className="container">
        {topicsDisplay}
      </section>
    </div>
  );
};

export default TopicsContainer;
