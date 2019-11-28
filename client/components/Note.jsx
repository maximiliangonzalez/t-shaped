import React, { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { updateNote, deleteNote } from '../actions/actions';

const Note = ({note, _id}) => {
  const dispatch = useDispatch();
  const [editing, setEditing] = useState(false);
  const editRef = useRef(null);

  // maybe find a way to only allow one edit to be activated at once? (sounds like a job for redux but we'll get to it)
  return (
    <li>
      {note}
      <br/>
      <button onClick={() => setEditing(true)}>edit</button>
      <button onClick={() => dispatch(deleteNote(_id, note))}>delete</button>
      {editing && 
        <div className="container-compact">
          <textarea ref={editRef}>{note}</textarea>
          <button onClick={() => {
            if (editRef.current.value !== '') {
              dispatch(updateNote(_id, note, editRef.current.value));
              editRef.current.value = '';
              setEditing(false);
            }
          }}>save</button>
          <button onClick={() => setEditing(false)}>cancel</button>
        </div>
      }
    </li>
  );
};

export default Note;