const assert = require('assert')

// the cli create a list of accounts automatically for us to use, once the provider is set up 
// these are known as 'unlocked' accounts, which do not require a public or private key to access
const ganache = require('ganache-cli')

// this is a constructor function to create instances
const Web3 = require('web3')

// this is the instance of the Web3 constructor
// the instance grabs the ganache.provider() method to connect to the ganache local test server
// in other words, this provider can be changed to any other network we want to connect to
const web3 = new Web3(ganache.provider())

// this returns the two objects we want to deploy the contract
const { interface, bytecode } = require('../compile')

let accounts, inbox;

beforeEach(async () =>{

	// grab our list of all accounts, from our Web3 instance - all of these are async in nature
	// web3 can connect to several other crypto networks, in our case we connect to the .eth() method
	// the .getAccounts() callback returns all accounts within our ether account
	/* refactored to use es7 async / awwait
	web3.eth.getAccounts()
		.then(fetchedAccounts =>{
			
	}) */
	accounts = await web3.eth.getAccounts();
	console.log(accounts)

	// use one of those accounts to deploy the contract

	// this creates an instance of a contract
	inbox = await new web3.eth.Contract(

		// this returns the interface (ABI) as a json for us to use within our js app
		JSON.parse(interface))

			// deploys this to our ether network as a contract
			.deploy({

				// this is the bytecode that consists of the contract.
				data: bytecode,

				// this sets the arguments for the smart contract - this is for the message string
				// that the Inbox() constructor function expects on /contracts/Inbox.sol
				arguments:['Hi There!']
			})
			.send({ 

				// the account that this is being sent from - in this case the first account created by
				// the ganache server 
				from: accounts[0], 

				// sets the gas price for the contract
				gas:'1000000'
			})

})

describe('Inbox', () =>{
	it('deploys a contract', () =>{
		console.log('accounts', accounts)
		console.log('inbox', inbox)

	})
})