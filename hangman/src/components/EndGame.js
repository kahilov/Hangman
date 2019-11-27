import React, { Component } from "react";

class EndGame extends Component {
  constructor() {
    super();
  }
   
  render() {
    return (
      this.props.gameStatus ? <div>Congratulations</div> : <div>{this.props.solution}</div>
    );
  }
}

export default EndGame;