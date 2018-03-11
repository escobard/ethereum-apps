// this specifies which account we want to unlock to use to send transactions, account must contain ether
// also used to specify what API or what network node we are going to connect to
const HDWalletProvider = require('truffle-hdwallet-provider')
const Web3 = require('web3')

const { account, url } = require('./constants/config')
const { interface, bytecode } = require('./compile')

const provider = new HDWalletProvider(
	
	// we set the account mnemonic to use as our sender account
	account,

	// here we set the URL of the node / network we want to connect to.
	// in this case we want Rinkeby, so we copy the URL from the infurio API dashboard
	url
)

// creates our Web3 instance, succesfully connecting to the Rinkeby test network, to the Infura node,
// with our account mnemonic from metamask as the sender account
// this is pretty similar to what was done on test/Inbox.test.js file for deployment
const web3 = new Web3(provider)

// literally just created to have the async / await syntax available
const deploy = async () => {

	// grabs accounts from our mnemonic
	const accounts = await web3.eth.getAccounts()
	console.log('Attempting to deploy from account: ', accounts[0])

	// this is expanded upon within Inbox.test.notes.js - essentially creates our contract
	// by grabbing the ABI interface from our compiled contract
	const result = await new web3.eth.Contract(JSON.parse(interface))

		// then deploys it with the compiled bytecode from our contract, and a base argument
		.deploy({data: bytecode, arguments: ['Hello!']})

		// sends the contract from our first account grabbed from the mnemonic, and the gas price
		.send({ from:accounts[0], gas:'1000000' })

	console.log('Address of our instance: ', result.options.address)
}
deploy()