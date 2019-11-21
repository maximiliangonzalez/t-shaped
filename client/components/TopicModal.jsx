import React from 'react';

// TopicModal: a modal with more information about a selected topic
const TopicModal = ({currentTopic, changeConfidence, close}) => {
  return currentTopic ? (
    <section className="modal" id="background" onClick={e => close(e)}>
      <section className="modal-content">
        <section className="container">
          <h1>{currentTopic.name}</h1>
          <button onClick={() => changeConfidence(currentTopic.index)}>
            {currentTopic.confident ? 'unlearn' : 'learn'}
          </button>
          <button id="close-button">
            X
          </button>
        </section>
        <textarea></textarea>
      </section>
    </section>
  ) : (
    null
  );
};

export default TopicModal;
