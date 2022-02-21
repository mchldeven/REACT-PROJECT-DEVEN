import React from 'react';
import Header from './Commponents/Header';
import Feature from './Commponents/Feature';
import About from './Commponents/About';
import aboutimage from './images/mantap2.png';

function App() {
  return (
    <div className="App">
      <Header />
      <Feature />
      <About image={aboutimage} title="Mudah Digunakan" button="Selengkapnya" />
      <About image={aboutimage} title="Efesien!" button="get the app" />
    </div>
  );
}

export default App;
