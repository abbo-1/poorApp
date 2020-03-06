import React from 'react';
import logo from './images/logo.png';
import './App.css';
import Buttons from './Buttons';
import Form from './Form';
import Picture from './Picture';
import Info from './Info';
import Comparator from './Comparator'
import Buck from './images/bucks.png';
import Halfbuck from './images/halfBucks.png';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <br />
        <img src={logo} className="" alt="logo" />
          <br />
          <p>Choose a rich guy!</p>
          <div className = "Buttons">
        <Buttons />
        <br />
        <Form />
        <br />
      </div>
      </header>
      <br />
      <img src={Buck} className="" alt="buck" /> 
      <br />
      <p>This dollar bill will represent $50,000</p>
      <img src={Halfbuck} className="" alt="halfbuck" />
      <br />
      <p>This half-dollar will represent $25,000</p>
      <div class = "row">
          <div><Picture /></div>
          <div><Info /></div>
      </div>
        <div>
          <Comparator />
        </div>
    </div>
  );
}



export default App;
