import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeConfidence, deleteTopic, addNote } from '../actions/actions';
import NoteList from './NoteList.jsx';

// TopicModal: a modal with more information about a selected topic
const TopicModalContent = ({close}) => {
  const currentTopic = useSelector(store => store.topics.currentTopic);
  const [notes, setNotes] = useState([]);

  // Adding notes to the dependency array works for now, but we don't need to refetch every note when a new one is added
  // Find a better way to have the new note render that doesn't involve refetching a bunch of data (maybe pass callback to reducer?)
  useEffect(() => {
    if (currentTopic) {
      fetch(`/topic/notes/${currentTopic._id}`)
      .then(res => res.json())
      .then(res => {console.log(res); setNotes(res.notes)})
      .catch(err => console.log(err));
    }
  }, [currentTopic]);

  const dispatch = useDispatch();

  const noteRef = useRef(null);

  return (
    <section className="topic-modal-content">
      <section className="container">
        <h1>{currentTopic.name}</h1>
        <button onClick={() => dispatch(changeConfidence(currentTopic._id))}>
          {currentTopic.confident ? 'unlearn' : 'learn'}
        </button>
        <button id="delete-button" onClick={() => dispatch(deleteTopic(currentTopic._id))}>
          delet this
        </button>
        <button id="close-button">
          X
        </button>
      </section>
      <NoteList notes={notes} _id={currentTopic._id}/>
      <textarea ref={noteRef}></textarea>
      <button onClick={() => {
        if (noteRef.current.value !== '') {
          dispatch(addNote(currentTopic._id, noteRef.current.value));
          noteRef.current.value = '';
        }
      }}>add note</button>
    </section>
  );
};

export default TopicModalContent;
