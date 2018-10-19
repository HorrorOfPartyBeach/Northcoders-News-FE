import React, {Component} from 'react';
import * as api from '../Api';
import Comments from '../components/Comments';
import {navigate} from '@reach/router';

class Article extends Component {
    state = {
        article: {}
    }

    render() {
        const {article} = this.state
        // console.log(article)
        return (
            <div>
                <h1>{article.title}</h1>
                <p>{article.body}</p>
                <Comments id={this.props.id} user={this.props.user}/>
            </div>
        )
    }

    componentDidMount() {
        api.getArticle(this.props.id)
        .then(article => {
            this.setState({
                article
            })
        })
        .catch((err) => {
            navigate('/error', {replace: true, state: {msg:err.message}})
        })
    }
}

export default Article;