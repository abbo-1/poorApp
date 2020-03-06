import React from 'react';
import logo from './images/logo.png';
import './App.css';
import Buttons from './Buttons';
import Form from './Form';
import Picture from './Picture';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="" alt="logo" />
          <br/>
          <p>Choose a rich guy and enter your hourly salary to see how you compare!</p>
          <div className = "Buttons">
        <Buttons />
        <br />
        <Form />
      </div>
          <Picture />
      </header>
    </div>
  );
}



export default App;
