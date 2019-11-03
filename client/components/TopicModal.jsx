import React from 'react';

// TopicModal: a modal with more information about a selected topic
export default ({currentTopic, changeConfidence, close}) => {
  return currentTopic ? (
    <section className="modal">
      <section className="modal-content">
        <h1>{currentTopic.name}</h1>
        <button onClick={close}>
          X
        </button>
        <button onClick={() => changeConfidence(currentTopic.index)}>
          {currentTopic.confident ? 'unlearn' : 'learn'}
        </button>
      </section>
    </section>
  ) : null;
}