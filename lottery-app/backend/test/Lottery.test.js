const assert = require('assert')
const ganache = require('ganache-cli')
const Web3 = require('web3')

const web3 = new Web3(ganache.provider())

const { interface, bytecode } = require('../compile')
const { INITIAL_STRING } = require('./constants')

let accounts, lottery;

beforeEach(async () =>{

	accounts = await web3.eth.getAccounts();

	lottery = await new web3.eth.Contract( JSON.parse(interface) )
		.deploy({ data: bytecode })
		.send({ from: accounts[0], gas:'1000000' })

})

describe('Lottery Contract', () => {

	it('deploys a contract', () =>{
		assert.ok(lottery.options.address)
	})
	it('allows one account to enter', async () =>{

		await lottery.methods.enter().send(
			// remember that each transaction object is always the same, properties listed in
			// the notes.md file
			{
				from: accounts[0], 
				value: 

					// we use a web3 helper function to translate this value from ether
					// as the value property is expecting wei, it must be converted
					web3.utils

						//toWei() is the helper function for wei conversions
						// these are INCREDIBLY helpful when working with other cryptocurrencies
						.toWei(

							// first argument is a string, of the currency value
							'0.2',

							// second argument is the currency type, in our case ether 
							'ether') }
		);

		let players = await lottery.methods.getPlayers().call({ from: accounts[0]})

		assert.ok(players.length >= 1)

		// equal() compares the first value, to make sure it matches the second value
		assert.equal(accounts[0], players[0])
	})
})