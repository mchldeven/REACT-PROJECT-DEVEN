import React from 'react';

function About(props) {
  return (
    <div id="about">
      <div className="about-image">
        <img src={props.image} alt="" />
      </div>
      <div className="about-text">
        <h2> {props.title} </h2>
        <p>
         Kini, karyawan dapat absen dengan menggunakan gadget masing masing kapanpun,dimanapun dan akurat!
        </p>
        <button>{props.button}</button>
      </div>
    </div>
  );
}

export default About;
