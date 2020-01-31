import React, { Component } from 'react';
import 'styles/searchbar.css';

class SearchBar extends Component {
  // set up constructor
  constructor(props) {
    super(props);

    this.state = {
      number: '',
      //error: false
    }

    // bind functions
    this.onSubmit = this.onSubmit.bind(this);
    this.updateInput = this.updateInput.bind(this);
    this.validateInput = this.validateInput.bind(this);
  }

  updateInput(e){
    // update state for input
    this.setState({number: e.target.value})
  }

  validateInput(number) {
    // check if number is between 0 and 100
    if (number < 0 || number > 100) { // TODO better error handling/form validation
      alert('Please enter a number between 0 and 100');
      this.setState({number: ''});
      return false;
    }
    // check if a number
    if (Number.isInteger(number)) {
      alert('Please enter a whole number between 0 and 100');
      this.setState({number: ''});
      return false;
    }
    return true;
  }

  onSubmit(e) {
    // prevent form from being sent
    e.preventDefault();

    // grab number value
    let number = this.state.number;

    // reset state so nothing displays in input
    this.setState({number: ''})

    // call onFormSubmit if no errors
    if (this.validateInput(number)) {
      this.props.onFormSubmit(number);
    }
  }

  render() {
    return(
      <div className="row search">
        <div className="col-md-12">
          <h3>Input a number to find the sum of the squares of the first n natural numbers and the square of the sum of the same first n natural numbers</h3>
          <form onSubmit={this.onSubmit}>
            <input type="number" ref="number" value={this.state.number} onChange={this.updateInput} className="form-control {error}" placeholder="Input a number!"></input>
          </form>
        </div>
      </div>
    )
  }
}

export default SearchBar;
