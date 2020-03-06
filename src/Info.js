import React from 'react';
import store from './store';

class Info extends React.Component {

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
  
render() {
  switch(this.state.person) { 
    case "jeff":
      return (
        <div >
            <h2>Jeff Bezos</h2> 
            <br />
            <div>Net Worth: $108.6 billion</div> 
            <br />
            <div><p>Jeffrey Preston Bezos (born January 12, 1964) is an American internet and aerospace entrepreneur, media proprietor, and investor. He is best known as the founder, chief executive officer, and president of Amazon. The first centi-billionaire on the Forbes wealth index, Bezos was named the "richest man in modern history" after his net worth increased to $150 billion in July 2018. In September 2018, Forbes described him as "far richer than anyone else on the planet" as he added $1.8 billion to his net worth when Amazon became the second company in history to reach a market cap of $1 trillion.</p></div>
        </div>
    //   )
    // case "warren":
    //   return (
    //     <div>
    //       <img src={warren} className="" alt="logo" />
    //     </div>
    //   )
    // case "mark":
    //   return (
    //     <div>
    //       <img src={mark} className="" alt="logo" />
    //     </div>
    // )
    // case "bill":
    //   return (
    //     <div>
    //       <img src={bill} className="" alt="logo" />
    //     </div>
    // )
    // case "bernard":
    //   return (
    //    <div>
    //     <img src={bernard} className="" alt="logo" />
    //   </div>
    )
      default:
        return (
          <div></div>
        )
   }
}
}

export default Info;