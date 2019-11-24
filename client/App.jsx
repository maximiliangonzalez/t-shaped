import React, { useState } from 'react';
import TopicsContainer from './containers/TopicsContainer.jsx';
import Navbar from './components/Navbar.jsx';

const App = () => {

  return (
    <>
      <Navbar />
      <TopicsContainer />
    </>
  );
};

export default App;
