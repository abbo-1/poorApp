import React from 'react';
import { connect } from 'react-redux';

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
      let rate = this.state.value;
      this.props.dispatch({ type:'UPDATE_RATE', rate: rate});
      event.preventDefault();
    }
    
    // handleSubmit(event) {
    //   let rate = this.state.value;
    //   if (event.target.value < 25000) {
    //     alert("Sorry, you have to make at least $25,000 to play.");
    //   }
    //   else if (event.target.value >= 25000) {
    //     console.log('A salary was submitted: ' + this.state.value);
    //     this.props.dispatch({ type:'UPDATE_RATE', rate: rate});
    //     event.preventDefault();
    //   }
    // }

    render() {
        return (
          <form onSubmit={this.handleSubmit}>
            <label>
              <br/>
              <p>First, enter a yearly salary.</p>
              <input value = {this.state.value} onChange={event => this.handleChange(event)}/>
            </label>
            <input type="submit" value="Submit" />
          </form>
        );
      }
    }

    export default connect()(Form);