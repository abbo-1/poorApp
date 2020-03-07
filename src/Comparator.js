import React from 'react';
import { connect } from 'react-redux';
import store from './store';

import Buck from './images/bucks.png';
import Halfbuck from './images/halfBucks.png';

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
      console.log("test")
    if(this.state.person && this.state.rate) {
        let rich_rate = 0
        switch(this.state.person) {
           case "jeff":
               rich_rate = 9307760800;
               break;
           case "mark":
               rich_rate = 3561642240;
               break;
            case "bill":
                rich_rate = 2870400000;
                break;
            case "bernard":
                rich_rate = 9272640000;
                break;
            case "warren":
                rich_rate = 3203200000;
                break;
            default :
        }
        let bucksRender = rich_rate / 1000000;
        console.log("hopefully this will render " + bucksRender + " bucks");
        let items = [];
        for (let i= 0; i < bucksRender; i++) {
            console.log("test 2")
            items.push(<img src={Buck} className="dollarRich" alt="logo" />)
        }
        let userBucksRender = this.state.rate /25000;
        let itemsUser = [];
        for (let i= 0; i < userBucksRender; i++) {
            console.log("test 3")
            itemsUser.push(<img src={Halfbuck} className="dollarRich" alt="logo" />)
        }
        console.log("hopefully this will render " + userBucksRender + " bucks");
        return (
        <div class= "row">
                <div class="bumper"></div>
                <div class="sideBySide">
                {items}
                </div>
                <div class="bumper"></div>
                <div class="sideBySide">
                {itemsUser}
                </div>
        </div>
        )
    }
    return (
        <div></div>
    )
}






    // switch (this.state.person && this.state.rate) { 
    //     case "jeff":
    //         // let jeffNetworth = "$108.6 billion",
    //         // $9.3 Billion Dollars Last Year
    //         // let jeffYearly = 9307760800,
    //         return (
    //         <div>
    //           <img src={Buck} className="" alt="logo" />
    //         </div>
    //       )
    //     case "warren":
    //       return (
    //         <div>
    //           <img src={Buck} className="" alt="logo" />
    //         </div>
    //       )
    //     case "mark":
    //       return (
    //         <div>
    //           <img src={Buck} className="" alt="logo" />
    //         </div>
    //     )
    //     case "bill":
    //       return (
    //         <div>
    //           <img src={Buck} className="" alt="logo" />
    //         </div>
    //     )
    //     case "bernard":
    //       return (
    //        <div>
    //         <img src={Buck} className="" alt="logo" />
    //       </div>
    //     )  
    //     // else if () {
    //     default:
    //     return (
    //       <div></div>
    //     )
    // // }
    // }
// }

}
// export default Comparator;
export default connect()(Comparator);