import React from 'react';

export default ({name, confident, changeConfidence, setCurrentTopic, index}) => {
  return (
    <article onClick={() => setCurrentTopic(name)} className={`topic ${confident ? 'topic-confident' : 'topic-learning'}`}>
      <h1>
        {name}
      </h1>
      {/* move the learn functionality to the */}
      <button onClick={() => changeConfidence(index)}>
        {confident ? 'unlearn' : 'learn'}
      </button>
    </article>
  );
};