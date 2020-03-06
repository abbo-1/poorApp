import React from 'react';

class Form  extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
      let input = event.target.value.replace(/\D/,'');
      /**
      * add any extra code you need here
      **/
       this.setState({value: input});
    }
    handleSubmit(event) {
      console.log('A salary was submitted: ' + this.state.value);
      event.preventDefault();
    }

    render() {
        return (
          <form onSubmit={this.handleSubmit}>
            <label>
              Enter an hourly salary!
              <br/>
              <input value = {this.state.value} onChange={event => this.handleChange(event)}/>
            </label>
            <input type="submit" value="Submit" />
          </form>
        );
      }
    }

export default Form