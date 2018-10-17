import React, {Component} from 'react';

class CommentAdder extends Component {
    state = {
        body: ""
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
            <label htmlFor="addyourcomment">Add your comment: </label>
            <input
            type="text"
            onChange={this.handleChange}
            name="body"
            />
            <button>Post Comment</button>
            </form>
        )
    }

    handleChange = (event) => {
        const {name, value} = event.target;
        this.setState({
            [name]: value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.addComment(this.state.body)
    }
}

export default CommentAdder;