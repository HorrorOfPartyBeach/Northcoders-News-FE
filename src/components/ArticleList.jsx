import React, {Component} from 'react';
import * as api from '../Api.js';
import Voter from '../components/Voter';
// import {Link} from '@reach/router';
import NavLink from '../components/NavLink';

class ArticleList extends Component {
    state = {
        articles: []
    }

    render() {
       return (
           <main>
            <p>Articles</p>
            {this.state.articles.map(({_id, title, belongs_to, votes}) => {
                 return <div key={_id}>
                <NavLink to={`/articles/${_id}`}><h2 key={_id}>{title}</h2></NavLink>
                <Voter id={_id} voteUpArticle={this.voteUpArticle} voteDownArticle={this.voteDownArticle} votes={votes}/>
                <p>{belongs_to}</p>
                </div>
            })}
           </main>
       )
    }
    componentDidMount() {
        this.fetchArticles();
    }

    componentDidUpdate (prevProps) {
        if(prevProps.topic !== this.props.topic) {
            this.fetchArticles();
        }
    }

    voteUpArticle = (id) => {
        api.alterVote(id, "up")
        this.setState((state) => ({
            articles: this.state.articles.map(article => {
                if(article._id === id) {
                    return {...article, votes: article.votes + 1}
                }
                return article;
            })
        }))
    }

    voteDownArticle = (id) => {
        api.alterVote(id, "down")
        this.setState((state) => ({
            articles: this.state.articles.map(article => {
                if(article._id === id) {
                    return {...article, votes: article.votes - 1}
                }
                return article;
            })
        }))
    }

    fetchArticles = () => {
        api.getArticles(this.props.topic).then(articles => {
            this.setState({
                articles
            })
        })
    }

}

export default ArticleList;