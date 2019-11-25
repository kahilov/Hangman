import Letter from "./Letter";
import React, { Component } from 'react';

class Letters extends Component {
    render() {
        return (<div>
                Available Letters
                <span><Letter/></span>
            </div>
        )
    }
}
export default Letters