import React, { Component } from "react";

class Letter extends Component {
  constructor() {
    super();
  }
  selectLetter= () =>{
  this.props.selectLetter(this.props.nletters)
}
  render() {
    return (
      <span>
        <span>{this.props.letter}</span>
        <span className={this.props.className}onClick={this.selectLetter}>{this.props.nletters}</span>
      </span>
    );
  }
}

export default Letter;
