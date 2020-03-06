import React from 'react';
import store from './store';

import Buck from './images/bucks.png';
// import Halfbuck from './images/halfBucks.png';

class Comparator extends React.Component {

    state = this.getCurrentStateFromStore()
    
    getCurrentStateFromStore() {
      return {
        rate: store.getState().rate,
        person: store.getState().person
      }
    }
    
    updateStateFromStore = () => {
      const currentState = this.getCurrentStateFromStore();
      
      if (this.state.rate !== currentState.rate || this.state.person !== currentState.person) {
        this.setState(currentState);
      }
    }
    
    componentDidMount() {
      this.unsubscribeStore = store.subscribe(this.updateStateFromStore);
    }
    
    componentWillUnmount() {
      this.unsubscribeStore();
    }
    
  render() {
    switch(this.state.person) { 
        case "jeff":
            return (
            <div>
              <img src={Buck} className="" alt="logo" />
            </div>
          )
        case "warren":
          return (
            <div>
              <img src={Buck} className="" alt="logo" />
            </div>
          )
        case "mark":
          return (
            <div>
              <img src={Buck} className="" alt="logo" />
            </div>
        )
        case "bill":
          return (
            <div>
              <img src={Buck} className="" alt="logo" />
            </div>
        )
        case "bernard":
          return (
           <div>
            <img src={Buck} className="" alt="logo" />
          </div>
        )  
        default:
        return (
          <div></div>
        )
    }
}

}
export default Comparator;