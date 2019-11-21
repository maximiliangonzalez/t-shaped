import React, { useState } from 'react';
import TopicsContainer from './containers/TopicsContainer.jsx';
import Navbar from './components/Navbar.jsx';
import Wishlist from './components/Wishlist.jsx';

const App = () => {
  const [display, setDisplay] = useState('topics');

  return (
    <>
      <Navbar setDisplay={setDisplay}/>
      <div className="offset-top">
        {display === 'topics' && <TopicsContainer />}
        {display === 'wishlist' && <Wishlist />}
      </div>
    </>
  );
};

export default App;
