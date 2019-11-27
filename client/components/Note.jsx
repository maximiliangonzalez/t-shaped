import React from 'react';
import { useDispatch } from 'react-redux';
import { updateNote, deleteNote } from '../actions/actions';

const Note = ({note, _id}) => {
  const dispatch = useDispatch();

  return (
    <li>
      {note}
      <br/>
      <button>edit</button>
      <button onClick={() => dispatch(deleteNote(_id, note))}>delete</button>
    </li>
  );
};

export default Note;