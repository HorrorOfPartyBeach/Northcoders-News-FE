import React, {Component} from 'react';

class ArticleList extends Component {
    state = {
        articles: []
    }

    render() {
       return (
           <main>
            <p>Articles</p>
            {this.state.articles.map(({_id, title}) => {
                 return <div key={_id}>
                <h2 key={_id}>{title}></h2>
                </div>
            })}
           </main>
       )
    }
}

export default ArticleList;