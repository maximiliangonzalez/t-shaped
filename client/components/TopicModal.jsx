import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import * as actions from '../actions/actions';

// TopicModal: a modal with more information about a selected topic
const TopicModal = ({currentTopic, close}) => {
  const [notes, setNotes] = useState([]);

  // call setNotes here so notes for topic can be fetched when opening modal
  useEffect(() => {
    fetch('/topic/notes')
    .then(res => res.json())
    .then(res => {})
    .catch(err => console.log(err));
  }, []);

  const dispatch = useDispatch();

  return currentTopic ? (
    <section className="modal" id="background" onClick={e => close(e)}>
      <section className="modal-content">
        <section className="container">
          <h1>{currentTopic.name}</h1>
          <button onClick={() => dispatch(actions.changeConfidence(currentTopic._id))}>
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
