import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import web3 from "./web3";
import lottery from "./lottery";

class App extends Component {

  // with ES6 + babel, we can get rid of the constructor function entirely, with shorter syntax
  state = {
    manager: 'Loading manager...',
    players: '',
    balance: '',
    value: '',
    message: ''
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

  // again, this syntax binds the 'this' keyword into the function without needing to declare it 
  // within the constructor
  onSubmit = async (event) => {
    
    event.preventDefault();

    // grabs the accounts from our metamask instance
    const accounts = await web3.eth.getAccounts();

    this.setState({message: 'Waiting on transaction success...'})

    await lottery.methods.enter().send({
      
      // unlike our call() method, send() needs to have a from account specified
      from: accounts[0],

      // uses our web3 conversion util again
      value: web3.utils.toWei(this.state.value, 'ether')
    })


    // the code here will NOT be run until after the await function is completed.
    // this is a HUGE advantage of the async / await es7 syntax
    this.setState({message: 'You have been entered'})

  }

  onClick = async () =>{

    // grabs provider accounts 
    const accounts = await web3.eth.getAccounts(), 

    // grabs the balance prior to submit
    balance = await web3.eth.getBalance( lottery.options.address )

    this.setState({message: "Waiting on new winner transaction..."})


    // sends a transaction with the pickWinner() method from the contract
    await lottery.methods.pickWinner().send({
      from: accounts[0]
    })

    // grabs the winner's key
    const winner = await lottery.methods.winner().call(),
    convertBalance = web3.utils.fromWei(balance, 'ether')

    // we could further expand the FE to show who was picked
    this.setState({message: `${winner} has won ${convertBalance} ether!`})
  }

  render() {
    let { manager, players, balance, value, message } = this.state;

    // converts the wei returned from the .getBalance() method to ether 
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
