import React, {Component} from 'react';

class Voter extends Component {
    state = {
        voteCount: 0
    }
    render() {
    return (
        <div>
            <button onClick={() => this.props.vote(this.props.id, "up")}>UP</button>
            <span className="votesButtons"> {this.props.votes} </span>
            <button onClick={() => this.props.vote(this.props.id, "down")}>DOWN</button>
        </div>
    )
    }
}


export default Voter;