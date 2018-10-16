import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <header><h1>Header</h1></header>
          <nav>Home Topics Users</nav>
          
          <section>
            <h2>The Rise Of Thinking Machines: How IBM's Watson Takes On The World</h2>
            <p>
            Many people know Watson as the IBM-developed cognitive super computer that won the Jeopardy! gameshow in 2011. In truth, Watson is not actually a computer but a set of algorithms and APIs, and since winning TV fame (and a $1 million prize) IBM has put it to use tackling tough problems in every industry from healthcare to finance. Most recently, IBM has announced several new partnerships which aim to take things even further, and put its cognitive capabilities to use solving a whole new range of problems around the world.
            </p>
            </section>
          
          <footer>Footer</footer>
      </div>
    );
  }
}

export default App;
