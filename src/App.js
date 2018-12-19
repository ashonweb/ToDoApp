import React, { Component } from 'react';
import ToDoComponent from './ToDoComponent';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Welcome to todoapp</h1>
        <ToDoComponent />
      </div>
    );
  }
}

export default App;
