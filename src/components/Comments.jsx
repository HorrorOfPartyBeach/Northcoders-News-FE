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
}

export default Comments;