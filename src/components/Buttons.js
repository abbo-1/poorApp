import React from 'react';

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
  
    render() {
      return (
        <div>
                <div className="menu">
                  <button class = "button button1"> Jeff Bezos </button>
                  <button class = "button button2"> Mark Zuckerberg </button>
                  <button class = "button button3"> Bill Gates </button>
                  <button class = "button button4"> Bernard Arnault </button>
                  <button class = "button button5"> Warren Buffett </button>
                </div>
        </div>
      );
    }
  }

export default Buttons;