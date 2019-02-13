import React, { Component } from 'react';

import './App.css';
var incrementFuntion = () => console.log("it's working!")

class MyButton extends Component {
  render() {
    
    
    return (
      <div className="Button">
        <button onClick={this.incrementFuntion}>Abrakadabra</button>
      </div>
    );
  }
}

export default MyButton;