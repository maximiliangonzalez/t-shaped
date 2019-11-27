import React from 'react';
import { useSelector } from 'react-redux';
import TopicCard from './TopicCard.jsx';

const TopicList = () => {
  const topics = useSelector(store => store.topics.following);

  const list = topics.map((topic, index) => {
    return <TopicCard 
            {...topic}
            key={topic._id} 
            index={index}
          />;
  });

  return (
    <section className="container">
      {list}
    </section>
  );
}

export default TopicList;
