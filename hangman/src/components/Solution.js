import Letter from "./Letter";
import React, { Component } from "react";

class Solution extends Component {
  constructor() {
    super();
  }
  render() {
    const wordArr=this.props.solution.word.split("")
    return (
      <div>
      
        {wordArr.map(l=> this.props.letterStatus[l]? <Letter nletters={l} selectLetter={l}/> :  "_")}
        <div>{this.props.solution.hint}</div>
      </div>
    );
  }
}

export default Solution;
