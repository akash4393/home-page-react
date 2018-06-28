import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CardBase from './CardBase.js';

class App extends Component {
  render() {
    let cardStyle = {
      width: '85%',
      height: '98%',
      top: '50px',
      left: '50px',
      background: '#DDDDDD'
    };
    return (
      <div className="App">
        <CardBase cardStyle={cardStyle}></CardBase>
      </div>
    );
  }
}

export default App;
