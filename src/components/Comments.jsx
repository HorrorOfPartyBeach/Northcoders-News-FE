import React, {Component} from 'react';
import * as api from '../Api';
import CommentAdder from './CommentAdder';
import Voter from './Voter';

class Comments extends Component {
    state = {
        comments: []
    }
    render() {
        const {comments} = this.state
        return (
            <div>
                <CommentAdder addComment={this.addComment}/>
                {comments.map(comment => {
                return <div key={comment._id}>
                <p>{comment.body}</p>
                <span>{comment.created_by.username} </span> 
                <span>{comment.created_at} </span> 
                <p>{comment.votes} </p>
                <Voter id={comment._id} vote={this.vote} votes={comments.votes}/> 
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

    vote = (id, direction) => {
        api.alterVote(id, direction)
        this.setState((state) => ({
            comments: this.state.comments.map(comment => {
                console.log(this.state.comments.votes)
                if(comment._id === id && direction === "up") {
                    return {...comment, votes: comment.votes + 1}
                } else if (comment._id === id && direction === "down") {
                    return {...comment, votes: comment.votes - 1}
                }
                return comment;
            })
        }))
    }

    // voteUpComment = (id) => {
    //     api.alterVote(id, "up")
    //     this.setState((state) => ({
    //         comments: this.state.comments.map(comment => {
    //             if(comment._id === id) {
    //                 return {...comment, votes: comment.votes + 1}
    //             }
    //             return comment;
    //         })
    //     }))
    // }

    // voteDownComment = (id) => {
    //     api.alterVote(id, "down")
    //     this.setState((state) => ({
    //         comments: this.state.comments.map(comment => {
    //             if(comment._id === id) {
    //                 return {...comment, votes: comment.votes - 1}
    //             }
    //             return comment;
    //         })
    //     }))
    // }
}

export default Comments;