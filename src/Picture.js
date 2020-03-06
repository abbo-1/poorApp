import React from 'react';
import store from './store';
import jeff from './images/bezos.png';
import bill from './images/gates.png';
import warren from './images/buffett.png';
import bernard from './images/Arnault.png';
import mark from './images/zuckerberg.png';

class Picture extends React.Component {

  state = this.getCurrentStateFromStore()
  
  getCurrentStateFromStore() {
    return {
      person: store.getState().person
    }
  }
  
  updateStateFromStore = () => {
    const currentState = this.getCurrentStateFromStore();
    
    if (this.state.person !== currentState.person) {
      this.setState(currentState);
    }
  }
  
  componentDidMount() {
    this.unsubscribeStore = store.subscribe(this.updateStateFromStore);
  }
  
  componentWillUnmount() {
    this.unsubscribeStore();
  }


//       const arnaultImg = require('./images/Arnault.png');
//       const bezosImg = require('./images/bezos.png');
//       const buffettImg = require('./images//buffett.png');
//       const gatesImg = require('./images/gates.png');
//       const zuckerbergImg = require('./images/zuckerberg.png');


render() {
  switch(this.state.person) { 
    case "jeff":
      return (
        <div>
          <img src={jeff} className="" alt="logo" />
        </div>
      )
    case "warren":
      return (
        <div>
          <img src={warren} className="" alt="logo" />
        </div>
      )
    case "mark":
      return (
        <div>
          <img src={mark} className="" alt="logo" />
        </div>
    )
    case "bill":
      return (
        <div>
          <img src={bill} className="" alt="logo" />
        </div>
    )
    case "bernard":
      return (
       <div>
        <img src={bernard} className="" alt="logo" />
      </div>
    )
      default:
        return (
          <div></div>
        )
   }
}
}

export default Picture;