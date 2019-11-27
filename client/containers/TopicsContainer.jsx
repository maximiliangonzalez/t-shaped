import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TopicCard from '../components/TopicCard.jsx';
import TopicModal from '../components/TopicModal.jsx';
import * as actions from '../actions/actions';

// TopicsContainer: a list of topics a user is following, plus a modal that pops up when a user selects a topic
const TopicsContainer = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actions.getTopics());
  }, []);
  
  // this is where the component is going to get the topics from
  const topics = useSelector(store => store.topics.following);
  console.log('followin', topics);
  // once i move these things to the redux store and set up dispatch, get rid of this
  // const [topics, setTopics] = useState(dummyData);
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
    if (e.target.id === 'background' || e.target.id === 'close-button') {
      setCurrentTopic(null);
    }
  };

  // the list of followed topics
  const topicsDisplay = topics.map(({name, confident}, index) => {
    return <TopicCard 
            name={name} 
            confident={confident} 
            changeConfidence={changeConfidence} 
            setCurrentTopic={setCurrentTopic}
            key={name} 
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
