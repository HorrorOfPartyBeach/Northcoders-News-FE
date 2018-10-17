import React, {Component} from 'react';
import * as api from '../Api.js';
import Voter from '../components/Voter';

class ArticleList extends Component {
    state = {
        articles: []
    }

    render() {
        console.log(this.props);
       return (
           <main>
            <p>Articles</p>
            {this.state.articles.map(({_id, title, belongs_to}) => {
                 return <div key={_id}>
                <h2 key={_id}>{title}</h2>
                <Voter id={_id}/>
                <p>{belongs_to}</p>
                </div>
            })}
           </main>
       )
    }
    componentDidMount() {
        console.log(this.props.topic)
        this.fetchArticles();
    }

    componentDidUpdate (prevProps) {
        // console.log(this.props)
        if(prevProps.topic !== this.props.topic) {
            this.fetchArticles();
        }
    }

    fetchArticles = () => {
        api.getArticles().then(articles => {
            this.setState({
                articles
            })
        })
    }

}

export default ArticleList;