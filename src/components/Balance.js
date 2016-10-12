import React, { Component } from 'react';

import './Balance.css';

const styles = {
  balance: {
    letterSpacing: '1px'
  }
}

export default class Balance extends Component {
  render() {
    return (
      <div className="balance">
        <h3 style={styles.balance} className=""> CURRENT BALANCE </h3>
        <h2> ₱40,000 <span className="small"> PHP</span> </h2>
      </div>
    );
  }
}

