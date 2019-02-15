import React, { Component } from 'react';

import './App.css';
//import Name from './Name';
import MyButton from './MyButton';
import { Jumbotron} from 'react-bootstrap';
import { Button } from 'react-bootstrap';


import Select from 'react-select'

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
]

const MyComponent = () => (
  <Select options={options} />
)


class App extends Component {
  render() {
    
    return (
      <Jumbotron>
  <h1>ReactJS Project!</h1>
  <p>
    This is a website made by ReactJS. React is fun and easy to to develop. I am building different project to get a
    a hand's on React development.
  </p>
  <p>
    <Button variant="primary">Other projects</Button>
  </p>
  <MyComponent/>
</Jumbotron>


    
    );
  }
}

export default App;
