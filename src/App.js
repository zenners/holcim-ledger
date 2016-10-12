import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Balance from './components/Balance'
import Ledger from './components/Ledger'

import data from './dummy'


function maniData(arr){
  var monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];

  var map_result = data
    .map(function (item) {
      var d = new Date(item.date);
      var month = monthNames[d.getMonth()] + ", " + d.getFullYear();
      return {
          "Month": month,
          "entry": item
      };
    })
    .reduce(function (memo, item) {
      if (memo[item.Month] === undefined) {
          memo[item.Month] = []
          memo[item.Month].push(item.entry);
      }else{
          memo[item.Month].push(item.entry);
      }
      return memo;
    },{});

 
  return map_result


}

class App extends Component {
  render() {
    
    
    return (
      <div className="App" data={data}>

        <div className="App-header">
         
         <Balance />
        </div>
        <Ledger data={maniData(data)} />
      </div>
    );
  }
}

export default App;
