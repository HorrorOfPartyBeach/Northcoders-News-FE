import React, { Component } from 'react';
import {Router} from '@reach/router';
import './App.css';
import Nav from './components/Nav';
import ArticleList from './components/ArticleList';

class App extends Component {
  state = {
    articles: []
  }
  
  render() {
    return (
      <div className="App">
          <header><h1>Northcoders News</h1></header>
          <Nav />
          
        <Router className="main">
          <ArticleList path='/'/>
          <ArticleList path='/articles'/>
          <ArticleList path='/topics/:topic'/>
        </Router>
  
          <footer>@HorrorOfPartyBeach</footer>
      </div>
    );
  }
}

export default App;
