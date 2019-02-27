import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  // findMultiples() finds all of the numbers in a range given that are divisible by a specified 'divisor'
  findMultiples(divisor, bottom, top) {
    let multiples = [];
    let start = this.findStart(divisor,bottom,top);
    if(start === 0){
      return multiples; // For occurrences when a lowest multiple does not exist in the range
    }
    while(start < top) {
      multiples.push(start);
      start = start + divisor;
    }

    return multiples;
  }

  // findStart() finds the lowest number in the range that is divisible by 'divisor'
  findStart(divisor, bottom, top) {
    while(bottom < top) {
      if(bottom % divisor === 0) {
        return bottom;
      }
      bottom++;
    }
    return 0;
  }

  render() {
    let converter = require('number-to-words'); // number-to-words is a library used to convert a number into english words
    let numberList = this.findMultiples(3,5,100); // finds <multiples of 3> between <5 and 100>
    // the list of applicable numbers is reversed (to show high to low) and converted to strings during the render operation
    return (
      <div className="App">
        {numberList.reverse().map((num) => <h4>{converter.toWords(num)}</h4>)}
      </div>
    );
  }
}

export default App;
