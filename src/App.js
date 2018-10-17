import React, { Component } from 'react';
import {Router} from '@reach/router';
import './App.css';
import Nav from './components/Nav';
import ArticleList from './components/ArticleList';
import Article from './components/Article';
import Login from './components/Login';
import * as api from './Api';

class App extends Component {
  state = {
    articles: [],
    user: {}
  }
  
  render() {
    return (
      <div className="App">
          <header><h1>Northcoders News</h1></header>
          <Nav />
          <Login login={this.login} user={this.state.user}>
        <Router className="main">
          <ArticleList path='/'/>
          <ArticleList path='/articles'/>
          <ArticleList path='/topics/:topic'/>
          <Article path='/articles/:id' user={this.state.user}/>
        </Router>
        </Login>
  
          <footer>@HorrorOfPartyBeach</footer>
      </div>
    );
  }
  login = (username) => {
    api.getUser(username)
    .then(user => {
      this.setState({
        user
      })
    })
  }
}

export default App;
