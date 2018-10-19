import React, {Component} from 'react';

class ArticleAdder extends Component {
    state = {
        title: "",
        body: ""
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
            <label htmlFor="ArticleTitle">Article Title: </label>
            <input
            className="articleTitle"
            maxLength="55"
            type="text"
            value={this.state.title}
            onChange={this.handleChange}
            name="title"
            />
            <label htmlFor="text">Text: </label>
            <input
            className="articleInput"
            size="45"
            type="text"
            value={this.state.body}
            onChange={this.handleChange}
            name="body"
            />
            <button type="submit">Post New Article</button>
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
        const title = this.state.title;
        const body = this.state.body;
        this.props.addArticle(title, body)
        this.setState({
            title: '',
            body: ''
        })
    }
}

export default ArticleAdder;