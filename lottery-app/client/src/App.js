import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import web3 from "./web3";
import lottery from "./lottery";

class App extends Component {

  state = {
    manager: 'Loading manager...',
    players: '',
    balance: '',
    value: '',
    message: ''
  };

  async componentDidMount(){

    const manager = await lottery.methods.manager().call(), 
    players = await lottery.methods.getPlayers().call(),

    balance = await web3.eth.getBalance(
        lottery.options.address 
    );

    this.setState({manager, players, balance})

  }

  onSubmit = async (event) => {
    
    event.preventDefault();

    const accounts = await web3.eth.getAccounts();

    this.setState({message: 'Waiting on transaction success...'})

    await lottery.methods.enter().send({ 
      from: accounts[0],
      value: web3.utils.toWei(this.state.value, 'ether')
    })

    this.setState({message: 'You have been entered'})

  }

  onClick = async () =>{

    const accounts = await web3.eth.getAccounts(), 

    balance = await web3.eth.getBalance( lottery.options.address )

    this.setState({message: "Waiting on new winner transaction..."})

    await lottery.methods.pickWinner().send({
      from: accounts[0]
    })

    const winner = await lottery.methods.winner().call(),
    convertBalance = web3.utils.fromWei(balance, 'ether')

    this.setState({message: `${winner} has won ${convertBalance} ether!`})
  }

  render() {
    let { manager, players, balance, value, message } = this.state;

    let etherConvert = web3.utils.fromWei(balance, 'ether')

    return (
      <div className="App">
        <h2>Lottery Contract</h2>
        <p>This contract is managed by {manager}</p>
        <p>There are currently {players.length ? players.length : '0'} people entered,
        competing to win {etherConvert} ether.</p>

        <hr/>

        <form onSubmit={this.onSubmit}>
          <h4>Want to try your luck?</h4>
          <div>
            <label htmlFor="">Amount of ether to enter</label>
            <span>(must be greater than 0.1)</span>
            <input 
              type="text"
              value={value}
              onChange={event => this.setState({ value: event.target.value })}
            />
          </div>
          <button>Enter</button>
        </form>

        <hr/>

          <h4>Ready to pick a winner? </h4>
          <span>(anyone other than the manager clicking this will throw an error)</span>
          <button onClick={this.onClick}>Pick a winner</button>
        <hr/>

        <h1>{message}</h1>
      </div>
    );
  }
}

export default App;
