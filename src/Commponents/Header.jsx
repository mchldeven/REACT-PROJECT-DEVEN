import React from 'react';
import Navbar from './Navbar';

function Header() {
  return (
    <div id="main">
      <Navbar />
      <div className="name">
        <h1>
          <span>The future of technology</span> starts here!
        </h1>
        <p className="details"> Absensi Online Universal BPR, kini lebih mudah,cepat dan aman!</p>
        <a href="#" className="cv-btn">
          Masuk
        </a>
      </div>
    </div>
  );
}

export default Header;
