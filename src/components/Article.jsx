import React, {Component} from 'react';
import * as api from '../Api';

class Article extends Component {
    state = {
        article: {}
    }

    render() {
        const {article} = this.state
        console.log(article)
        return (
            <div>
                <h1>{article.title}</h1>
                <p>{article.body}</p>
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
    }
}

export default Article;