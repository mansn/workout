import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import './App.css';
import Workout from './components/Workout';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1> Hello, Workout! </h1>
        <div className="container">
          <Workout />
        </div>
      </div>
    );
  }
}

export default hot(module)(App);
