import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <div>
      <div class="topnav">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
        <input type="text" placeholder="Search.." />
      </div>
    </div>
  );
};

export default Header;