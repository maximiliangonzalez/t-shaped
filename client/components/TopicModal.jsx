import React from 'react';

export default ({currentTopic, close}) => {
  return currentTopic ? (
    <>
      <h1>{currentTopic}</h1>
      <button onClick={close}></button>
    </>
  ) : null;
}