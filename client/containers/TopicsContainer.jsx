import React, { useState } from 'react';
import TopicCard from '../components/TopicCard.jsx/index.js';

// dummy data to use before setting up database/server
// at this point, data will need to have the following properties:
// name (string, name of topic)
// confident (boolean, whether or not a user is confident in their knowledge of a topic)
const dummyData = [];
for (let i = 0; i < 50; i++) {
  dummyData.push({
    name: `topic${i}`,
    confident: false
  });
}

export default () => {
  const [topics, setTopics] = useState(dummyData);

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

  const topicsDisplay = topics.map(({name, confident}, index) => {
    return <TopicCard 
            name={name} 
            confident={confident} 
            changeConfidence={changeConfidence} 
            key={name} 
            index={index}
          />
  });

  return (
    <section className="topics-container">
      {topicsDisplay}
    </section>
  );
};