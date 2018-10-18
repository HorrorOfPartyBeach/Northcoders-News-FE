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
            className="commentInput"
            size="35"
            type="text"
            value={this.state.body}
            onChange={this.handleChange}
            name="body"
            />
            <button type="submit">Post Comment</button>
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
        const body = this.state.body;
        this.props.addComment(body)
        this.setState({
            body: ''
        })
    }
}

export default CommentAdder;