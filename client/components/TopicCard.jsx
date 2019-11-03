import React from 'react';

export default ({name, confident, changeConfidence, index}) => {
  return (
    <article className={`topic ${confident ? 'topic-confident' : 'topic-learning'}`}>
      <h1>
        {name}
      </h1>
      <button onClick={() => changeConfidence(index)}>
        {confident ? 'unlearn' : 'learn'}
      </button>
    </article>
  );
};