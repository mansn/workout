import React, { Component } from 'react'
import { Router, Link } from '@reach/router'
import { hot } from 'react-hot-loader'
import './App.css'
import Workout from './components/Workout'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <div className="inner-header">
            <Link to="/">
              <h1> Hello, Workout! 🏋️‍♂️</h1>
            </Link>
          </div>
        </header>
        <div className="container">
          <Router>
            <Workout path="/" />
          </Router>
        </div>
      </div>
    )
  }
}

export default hot(module)(App)
