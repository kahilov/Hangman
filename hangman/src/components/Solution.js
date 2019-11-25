import Letter from "./Letter";
import React, { Component } from 'react';


class Solution extends Component {
    render(){
        let letterArr = [".",".",".","."]
        return(<div><div>{letterArr.map(l => " _ ")}</div>Hint</div>)
    }
}

export default Solution