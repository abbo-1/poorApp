import React from 'react';
import logo from '../../public/images/logo';
import '../../public/App.css';
import Buttons from './Buttons';
import Form from './Form';
import Picture from './Picture';

function App() {
  return (
    <div className="App">

      <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <br/>
          <p>Choose a rich guy and enter your hourly salary to see how you compare!</p>
          <div className = "Buttons">
        <Buttons />
        <br />
        <Form />
      </div>
    </header>

      <div className="Container">
        You Chose {} <br/> He has a networth of {}
        <div className="Picture">
          <Picture />
        </div>
        <div className="Info">
          {/* <Info /> */}
        </div>
     </div>
    </div>

  );
}

export default App;