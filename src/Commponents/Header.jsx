import React from 'react';
import Navbar from './Navbar';

function Header() {
  return (
    <div id="main">
      <Navbar />
      <div className="name">
        <h1>
          <span>The future of technology starts here</span>
        </h1>
      </div>
    </div>
  );
}

export default Header;
