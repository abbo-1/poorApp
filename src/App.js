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
        <img src={logo} className="logo" alt="logo" />
          <br />
          <div class = "row">
        <div class = "sideBySide">
          <img src={Buck} className="dollar" alt="buck" /> 
          <p>This dollar bill will represent $50,000</p>
          <br />
        </div>
        <div class = "sideBySide">
          <img src={Halfbuck} className="halfDollar" alt="halfbuck" />
          <br />
          <p >This half-dollar will represent $25,000</p>
        </div>
      </div>
            <div className = "Buttons">
            <Form />
            <br />
            <Buttons />
            <br />
      </div>
      <br />

      </header>
      <div class = "row">
          <div class = "sideBySide"><Picture /></div>
          <div class = "sideBySide"><Info /></div>
      </div>
      <br />
        <div>
          {/* <Comparator /> */}
        </div>
    </div>
  );
}



export default App;
