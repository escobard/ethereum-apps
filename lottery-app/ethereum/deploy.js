const HDWalletProvider = require('truffle-hdwallet-provider')
const Web3 = require('web3')

const { account, url } = require('./constants/config')
const { interface, bytecode } = require('./compile')

const provider = new HDWalletProvider( account, url )

const web3 = new Web3(provider)

// new changes to this deploy script to be executable from anywhere, returning the new contract
const deploy = async () => {

	const accounts = await web3.eth.getAccounts()
	console.log('Attempting to deploy from account: ', accounts[0])

	const result = await new web3.eth.Contract(JSON.parse(interface))

		// unlike our first contract, this contract takes no initial arguments
		// so we remove the initial deploy argument
		.deploy({data: bytecode})
		.send({ from:accounts[0], gas:'1000000' })

	console.log( 'Interface code: ', interface )
	console.log('Address of our instance: ', result.options.address)
	return result
	
}
deploy()

module.exports = deploy;