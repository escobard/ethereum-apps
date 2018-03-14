import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import web3 from "./web3";
import lottery from "./lottery";

class App extends Component {

  // with ES6 + babel, we can get rid of the constructor function entirely, with shorter syntax
  state = {
    manager: 'Loading manager...',
    players: 'Loading players...',
    balance: '',
  };

  async componentDidMount(){

    // we don't have to define the "from" property will call if we already have a contract created
    // since the call will automatically assume you are calling a function from the first account
    // on metamask
    const manager = await lottery.methods.manager().call(), 
    players = await lottery.methods.getPlayers().call(),

    //the getBalance() function within the lottery contract is obsolete,
    // we will use the web3 method instead
    balance = await web3.eth.getBalance(
        // we need to set an address, so we set the contract address to retreive the balance
        lottery.options.address 
    );

    this.setState({manager, players, balance})

  }

  render() {
    let { manager, players, balance } = this.state;

    // converts the wei returned from the .getBalance() method to ether 
    let etherConvert = web3.utils.fromWei(balance, 'ether')
    return (
      <div className="App">
        <h2>Lottery Contract</h2>
        <p>This contract is managed by {manager}</p>
        <p>There are currently {players.length ? players.length : players} people entered,
        competing to win {etherConvert} ether.</p>
      </div>
    );
  }
}

export default App;
