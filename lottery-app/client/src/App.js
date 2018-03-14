import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import web3 from "./web3";
import lottery from "./lottery";

class App extends Component {
  constructor(props){
    super(props)

    this.state={
      manager: 'Loading...'
    }
  }

  async componentDidMount(){

    // we don't have to define the "from" property will call if we already have a contract created
    // since the call will automatically assume you are calling a function from the first account
    // on metamask
    const manager = await lottery.methods.manager().call();
    this.setState({manager})

  }
  render() {
    let { manager } = this.state
    return (
      <div className="App">
        <h2>Lottery Contract</h2>
        <p>This contract is managed by {manager}</p>
      </div>
    );
  }
}

export default App;
