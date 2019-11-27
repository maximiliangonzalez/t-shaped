import React from 'react';
import { useDispatch } from 'react-redux';
import * as actions from '../actions/actions';

// TopicModal: a modal with more information about a selected topic
const TopicModal = ({currentTopic, changeConfidence, close}) => {
  const dispatch = useDispatch();

  return currentTopic ? (
    <section className="modal" id="background" onClick={e => close(e)}>
      <section className="modal-content">
        <section className="container">
          <h1>{currentTopic.name}</h1>
          <button onClick={() => changeConfidence(currentTopic.index)}>
            {currentTopic.confident ? 'unlearn' : 'learn'}
          </button>
          <button id="delete-button" onClick={() => dispatch(actions.deleteTopic(currentTopic._id))}>
            delet this
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
