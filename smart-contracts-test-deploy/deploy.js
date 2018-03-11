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
const web3 = new Web3(provider)