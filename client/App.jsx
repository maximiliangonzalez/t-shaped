import React, { useState } from 'react';
import TopicsContainer from './containers/TopicsContainer.jsx';
import Navbar from './components/Navbar.jsx';

const App = () => {

  return (
    <>
      <Navbar />
      <div className="offset-top">
        <TopicsContainer />
      </div>
    </>
  );
};

export default App;
