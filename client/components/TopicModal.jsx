import React from 'react';

export default ({currentTopic, close}) => {
  return currentTopic ? (
    <section className="modal">
      <section className="modal-content">
        <h1>{currentTopic}</h1>
        <button onClick={close}>
          X
        </button>
      </section>
    </section>
  ) : null;
}