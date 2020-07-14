import React, { Component } from 'react'
import { Router, Link } from '@reach/router'
import { hot } from 'react-hot-loader'
import './App.css'
import Workout from './components/Workout'
import CreateExercise from './components/CreateExercise/CreateExercise'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <Link to="/">
            <h1> Hello, Workout! 🏋️‍♂️</h1>
          </Link>
          <nav>
            <Link to="/create-exercise">Create Exercise</Link>
          </nav>
        </header>
        <div className="container">
          <Router>
            <Workout path="/" />
            <CreateExercise path="/create-exercise" />
          </Router>
        </div>
      </div>
    )
  }
}

export default hot(module)(App)
