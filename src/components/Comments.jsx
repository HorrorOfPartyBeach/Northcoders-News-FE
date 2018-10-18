import React, {Component} from 'react';
import * as api from '../Api';
import CommentAdder from './CommentAdder'

class Comments extends Component {
    state = {
        comments: []
    }
    render() {
        const {comments} = this.state
        console.log(comments)
        return (
            <div>
                <CommentAdder addComment={this.addComment}/>
                {comments.map(comment => {
                return <div key={comment._id}>
                <p>{comment.body}</p>
                <span>{comment.created_by.username} </span> 
                <span>{comment.created_at} </span> 
                <span>{comment.votes} </span>
                <button className="deleteButton" onClick={() => this.deleteComment(comment._id)}>Delete</button>
            </div>
            })}
            </div>
        )
    }

    componentDidMount() {
        api.getComments(this.props.id)
        .then(comments => {
            this.setState({
                comments
            })
        })
    }

    addComment = (body) => {
        console.log(this.props.user._id)
        api.postComment(this.props.id, body, this.props.user._id)
        .then(comment => {
            console.log(comment)
            this.setState({
                comments: [comment,...this.state.comments]
            })
        })
    }

    deleteComment =(commentId) => {
        api.removeComment(commentId)
        .then(() => {
            this.setState((state) => ({
                comments: this.state.comments.filter(comment => comment._id !== commentId)
            })
            )
        })
    }
}

export default Comments;