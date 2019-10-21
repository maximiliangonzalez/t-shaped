import React, { useState } from 'react';
import Topic from '../components/Topic.jsx';

// dummy data to use before setting up database/server
const dummyData = [{name: 'topic1', confident: false}, {name: 'topic2', confident: false}, {name: 'topic3', confident: false}];

export default () => {
  
  const [topics, setTopics] = useState(dummyData);

  const changeConfidence = index => {
    setTopics(prevTopics => {
      // this will have to take place only after database has been successfully updated to reflect change in confidence
      const updatedTopics = [...prevTopics];
      updatedTopics[index] = {...prevTopics[index], confident: !prevTopics[index].confident}
      return updatedTopics;
    });
  };

  const topicsDisplay = topics.map(({name, confident}, index) => <Topic name={name} confident={confident} changeConfidence={changeConfidence} key={name} index={index} />);

  return (
    <div className="topics-container">
      {topicsDisplay}
    </div>
  );
};