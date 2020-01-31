import React, { Component } from 'react';
import SearchBar from 'components/SearchBar';
import DataDisplay from 'components/DataDisplay';
import _ from 'lodash';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
    // bind functions
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onFormSubmit(number) {
    let initializePromise = this.initialize(number); // access promise
    let details; // declare details
    // TALK ABOUT THIS
    initializePromise.then(result => {
      details = result;
      let newState = this.state.data; // set here to make new state we can push to
      newState.push(details); // push new part of state
      this.setState({data:newState}); // set newState
      //console.log(this.state.data)
    }, function(err) {
      alert('Oops, something went wrong, please try again');
      console.log(err); // log error
    })

  }

  initialize(number){
    let calculation = n => {
      // calculate sum of squares
      let sumOfSquares=0;
      for (let i=0; i<=n; i++) {
        sumOfSquares += i * i;
      }

      //calculate square of sum;
      let sum=0;
      for (let x=0; x<=n; x++) {
        sum += x;
      }
      let sumOfNums = Math.pow(sum,2);
      // calculate difference
      let difference = Math.abs(sumOfSquares - sumOfNums);
      return difference;
    }

    let countOccurences = n => {
      let count = 1; // set default occurrences to 1
      this.state.data.map(z => {
        if (z.number === n) {
          count += 1 // add one everytime we see the same occurrence
        }
      })
      return count;
    }

    let lastDateTime = n => {
      let last = "first occurrence"; // mark if first occurrence
      this.state.data.map(z => {
        if (z.number === n) {
          last = z.datetime; // find last dataetime
        }
      })
      return last;
    }

    // return new Promise
    return new Promise(function(resolve, reject) {
        if(number) {
          var result = {}; // declare object
          let currentdate = new Date(); // set date then format it
          let datetime = currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/"
                + currentdate.getFullYear() + " @ "
                + currentdate.getHours() + ":"
                + currentdate.getMinutes() + ":"
                + currentdate.getSeconds();
          let value = calculation(number); // calculate answer
          let occurrences = countOccurences(number); // find occurrences
          let last_datetime = lastDateTime(number); // find lastDateTime
          result.value = value; // add to results object
          result.number = number; // add to results object
          result.datetime = datetime.toString(); // add to results object
          result.occurrences = occurrences; // add to results object
          result.last_datetime = last_datetime; // add to results object
          resolve(result); // resolve
        }
        else {
          let reason = new Error('Error on formatting'); // reason dictated
          reject(reason);
        }
    })
  }

  render() {
    // only pass component the last index of the state
    let finalIndex = this.state.data.length;
    let data = this.state.data[finalIndex-1];

    // throttle user input
    const debouncedFormSubmit = _.debounce((number) => { this.onFormSubmit(number)}, 300);

    return (
      <div>
        <SearchBar onFormSubmit={debouncedFormSubmit} />
        <DataDisplay data={data} />
      </div>
    );
  }
}

export default App;
