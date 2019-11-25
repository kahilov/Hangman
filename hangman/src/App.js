import React, { Component } from 'react';
import './App.css';
import Solution from './components/Solution';
import Letter from './components/Letter';
import Letters from './components/Letters';
import Score from './components/Score';

export class App extends Component {

  render() {

    return (
      <div className="app">
      <Score />
      <Solution />
      <Letters/>
      </div>
    )
  }
}
      
  
export default App;
