import React from 'react';

const Navbar = ({setDisplay}) => {
  return (
    <section className="navbar">
      <a onClick={() => setDisplay('topics')}>Topics</a>
      <a onClick={() => setDisplay('wishlist')}>Wishlist</a>
    </section>
  );
};

export default Navbar;
