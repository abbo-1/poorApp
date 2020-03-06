import React from 'react';
import { connect } from 'react-redux';

class Buttons extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        showMenu: false,
      }
      
      this.showMenu = this.showMenu.bind(this);
    }
    
    showMenu(event) {
      event.preventDefault();
      
      this.setState({
        showMenu: true,
      });
    }

    handlePerson(person) {
     this.props.dispatch({ type:'UPDATE_PERSON', person: person})
    }
  
    render() {
      return (
        <div>
                <div className="menu">
                  <button class = "button button1" onClick = { () =>this.handlePerson("jeff") }> Jeff Bezos </button>
                  <button class = "button button2" onClick = { () =>this.handlePerson("mark") }> Mark Zuckerberg </button>
                  <button class = "button button3" onClick = { () =>this.handlePerson("bill") }> Bill Gates </button>
                  <button class = "button button4" onClick = { () =>this.handlePerson("bernard") }> Bernard Arnault </button>
                  <button class = "button button5" onClick = { () =>this.handlePerson("warren") }> Warren Buffett </button>
                </div>
        </div>
      );
    }
  }

export default connect()(Buttons);