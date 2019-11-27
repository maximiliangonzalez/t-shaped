import React from 'react';
import Note from './Note.jsx';

const NoteList = ({notes, _id}) => {
  const list = notes.map(note => (
    <Note note={note} _id={_id} key={note.slice(0, 10)}/>
  ));

  return (
    <ul>
      {list}
    </ul>
  )
};

export default NoteList;