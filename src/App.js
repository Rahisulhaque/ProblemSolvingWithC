import React, { Component } from 'react';

import './App.css';
import Name from './Name';
import MyButton from './MyButton';


class App extends Component {
  constructor(props){
    
    super(props);
    this.state= {
      magicHappen : "Wanna see a magic?",
    
    }
  }
  mymagic(){
    this.setState({
      magicHappen : "Its magic!", 
    
      
    })
  }
  render() {
    
    return (
      <div className="App">
        This is a Component!
        
        <p>{this.state.magicHappen}</p>

        <Name/>
        <button onClick={this.mymagic.bind(this)}><MyButton /></button>
      </div>
    );
  }
}

export default App;
