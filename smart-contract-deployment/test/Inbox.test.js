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

let accounts;

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
})

describe('Inbox', () =>{
	it('deploys a contract', () =>{

	})
})