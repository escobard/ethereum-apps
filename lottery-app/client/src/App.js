import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import web3 from "./web3";

class App extends Component {
  render() {
    console.log("web3 version", web3.version)

    // this returns our list of accounts - this will need to be tweaked with the API version
    web3.eth.getAccounts().then(console.log)
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;