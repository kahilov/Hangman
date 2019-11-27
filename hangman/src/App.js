import React, { Component } from 'react';
import './App.css';
import Solution from './components/Solution';
import Letter from './components/Letter';
import Letters from './components/Letters';
import Score from './components/Score';
import EndGame from './components/EndGame'

export class App extends Component {
  constructor() {
    super()
    this.state = {
      letterStatus: this.generateLetterStatuses(),
      solution: 
      {word:"HERO",hint:"Superman"},
      score: 10,
      gameOver:null
    }
  }
  selectLetter = letter => {
    if (this.state.letterStatus[letter]) { return }
    let letterStatus = { ...this.state.letterStatus }
    letterStatus[letter] = true
    this.setState({ letterStatus })
    this.checkAnswer(letter)
  }

  checkAnswer = letter => {
    this.state.solution.word.includes(letter) ?
      this.updateScore(true) : this.updateScore(false)
  }
  updateScore = async isCorrect => {
    let newScore = isCorrect ? this.state.score + 5 : this.state.score - 20
    await this.setState({ score: newScore })
    this.getGameStatus()
  }
  getGameStatus() {
    this.checkIfWon()
    this.checkIfLost()
  }
  checkIfWon() {
    let won = this.state.solution.word.split("").every(l => this.state.letterStatus[l])
    if (won) {
      this.setState({ gameOver: true })
    }
  }
  checkIfLost() {
    let lost = this.state.score <= 0
    if (lost) {
      this.setState({ gameOver: false })
    }
  }
  generateLetterStatuses() {
    let letterStatus = {}
    for (let i = 65; i < 91; i++) {
      letterStatus[String.fromCharCode(i)] = false
    }
    return letterStatus
  }

  render() {
    console.log(this.selectLetter)
    return (
      <div className="app">
        <Score score = {this.state.score}/>
        <Solution selectLetter={this.selectLetter} solution = {this.state.solution} letterStatus = {this.state.letterStatus}/>
        <Letters checkAnswer={this.checkAnswer} selectLetter={this.selectLetter} letterStatus = {this.state.letterStatus}/>
        {this.state.gameOver == null ? null : <EndGame solution ={this.state.solution.word}gameStatus= {this.state.gameOver}/>}  
      </div>
    )
  }
}
      
  
export default App;
