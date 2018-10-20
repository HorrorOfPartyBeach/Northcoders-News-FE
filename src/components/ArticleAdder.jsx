import React, {Component} from 'react';

class ArticleAdder extends Component {
    state = {
        title: "",
        body: ""
    }

    render() {
        return (
            <div className="container">
            <form onSubmit={this.handleSubmit}>
            <textarea id="articleTitlearea" rows="2" cols="80"
            aria-label="article title area"
            placeholder="Write title in here..."
            type="text"
            value={this.state.title}
            onChange={this.handleChange}
            name="title"
            /> 
            <p>
            <textarea id="articleTextarea" rows="6" cols="80"
            aria-label="article text area"
            placeholder="Write text in here..."
            height="100"
            value={this.state.body}
            onChange={this.handleChange}
            name="body"
            /> </p>
            <button type="submit">Post New Article</button>
            </form>
            </div>
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