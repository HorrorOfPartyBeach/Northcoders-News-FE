import React, {Component} from 'react';

class Voter extends Component {
    state = {
        voteCount: 0
    }
    render() {
    return (
        <div>
            <button>UP</button>
            <button>DOWN</button>
        </div>
    )
    }
}

export default Voter;