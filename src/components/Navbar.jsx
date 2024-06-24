import React from 'react';

const NavBar = () => {
  return (
    <div className="navbar">
      <h1>My App</h1>
      <div className="links">
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
      </div>
    </div>
  );
};

export default NavBar;
