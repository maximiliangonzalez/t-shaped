import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { addTopic } from '../actions/actions';

const AddTopic = () => {
  const inputRef = useRef(null);
  const dispatch = useDispatch();

  return (
    <>
      <input ref={inputRef}></input>
      <button onClick={() => {
        if (inputRef.current.value !== '') {
          dispatch(addTopic(inputRef.current.value));
          inputRef.current.value = '';
        }
      }}>
        add
      </button>
    </>
  )
};

export default AddTopic;