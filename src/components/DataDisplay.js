import React from 'react';
import 'styles/datadisplay.css';

const DataDisplay = ({ data }) => {
  // if data then render, otherwise don't show anything
  if (data) {
    // make formatting of last occurrence legible
    let last;
    if (data.last_datetime === 'first occurrence' ) {
      last = `This is the first occurrence of ${data.number}`
    } else {
      last = `The last occurrence of ${data.number} happened on ${data.last_datetime}`
    }
    // render and display data
    return(
      <div className="row">
        <div className="col-md-12 data">
          <h4>The difference of your request is: {data.value}</h4>
        </div>
        <div className="col-md-6 data">
          <p>Number requested: {data.number}</p>
          <p>Sent at: {data.datetime}</p>
        </div>
        <div className="col-md-6 data">
          <p>How many occurrences: {data.occurrences}.</p>
          <p>{last}</p>
        </div>
      </div>
    )
  }
  else {
    return null;
  }
}


export default DataDisplay;
