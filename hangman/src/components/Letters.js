import Letter from "./Letter";
import React, { Component } from "react";

class Letters extends Component {
  render() {
    let letters = this.props.letterStatus;
    letters = Object.keys(letters);
    const nLetters = this.props.letterStatus;
    return (
      <span>
        <div>Available Letters</div>
        <div>
          {letters.map(l => (
            <Letter
              className={nLetters[l] ? ( "true") : ("false")}
              nletters={l}
              selectLetter= {this.props.selectLetter}
            />
          ))}
        </div>
      </span>
    );
  }
}
export default Letters;
