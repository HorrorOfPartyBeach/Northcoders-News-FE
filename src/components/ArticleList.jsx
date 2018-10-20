import React, {Component} from 'react';
import {Link} from '@reach/router';
import * as api from '../Api.js';
import Voter from '../components/Voter';
import ArticleAdder from '../components/ArticleAdder';

class ArticleList extends Component {
    state = {
        articles: []
    }

    render() {
        console.log(this.state.articles)
       return (
           <main>
            <h2>Articles</h2>
            <ArticleAdder addArticle={this.addArticle}/>
            {this.state.articles.map(({_id, title, belongs_to, votes}) => {
                 return <div key={_id} className="articleCard">
                <Link to={`/articles/${_id}`}><h2 key={_id}>{title}</h2></Link>
                <Voter id={_id} vote={this.vote} votes={votes}/>
                <p className="topicSubhead">{belongs_to}</p>
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

    addArticle = (title, body) => {
        api.postArticle(this.props.topic, title, body, this.props.user._id)
        .then(article => {
            this.setState({
                articles: [article,...this.state.articles]
            })
        })
    }

    vote = (id, direction) => {
        api.alterVote(id, direction)
        this.setState((state) => ({
            articles: this.state.articles.map(article => {
                console.log(this.state.articles.votes)
                if(article._id === id && direction === "up") {
                    return {...article, votes: article.votes + 1}
                } else if (article._id === id && direction === "down") {
                    return {...article, votes: article.votes - 1}
                }
                return article;
            })
        }))
    }

    // voteUpArticle = (id) => {
    //     api.alterVote(id, "up")
    //     this.setState((state) => ({
    //         articles: this.state.articles.map(article => {
    //             if(article._id === id) {
    //                 return {...article, votes: article.votes + 1}
    //             }
    //             return article;
    //         })
    //     }))
    // }

    // voteDownArticle = (id) => {
    //     api.alterVote(id, "down")
    //     this.setState((state) => ({
    //         articles: this.state.articles.map(article => {
    //             if(article._id === id) {
    //                 return {...article, votes: article.votes - 1}
    //             }
    //             return article;
    //         })
    //     }))
    // }

    fetchArticles = () => {
        api.getArticles(this.props.topic).then(articles => {
            this.setState({
                articles
            })
        })
    }

}

export default ArticleList;