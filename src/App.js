import React, { Component } from 'react';
import {Router} from '@reach/router';
import './App.css';
import Nav from './components/Nav';
import ArticleList from './components/ArticleList';
import Article from './components/Article';
import Login from './components/Login';
import * as api from './Api';
import Users from './components/Users';

class App extends Component {
  state = {
    articles: [],
    user: {},
    users: [],
    isLoggedIn: false 
  }
  
  render() {
    return (
      <div className="App">
          <header><h1>Northcoders News</h1></header>
          <Nav />
          <Login login={this.login} user={this.state.user}>
        <Router className="main">
          <ArticleList path='/'user={this.state.user}/>
          <ArticleList path='/articles'user={this.state.user}/>
          <ArticleList path='/topics/:topic'user={this.state.user}/>
          <Article path='/articles/:id' user={this.state.user}/>
          <Users path='/users' users={this.state.users}/>
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
        isLoggedIn: true,
        user
      })
    })
  }

  handleLogout = () => {
    if(this.isLoggedIn === true)
    this.setState({
      username: {}
    });
  };

}

export default App;
