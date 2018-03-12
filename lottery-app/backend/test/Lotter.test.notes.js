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

		

		// equal() compares the first value, to make sure it matches the second value
		assert.ok(players.length >= 1)
		assert.equal(accounts[0], players[0])
	})

	it('allows multiple accounts to enter', async () =>{
		await lottery.methods.enter()
			.send( {from: accounts[0], value: web3.utils.toWei('0.2','ether') }
		);
		await lottery.methods.enter()
			.send( {from: accounts[1], value: web3.utils.toWei('0.2','ether') }
		);
		await lottery.methods.enter()
			.send( {from: accounts[2], value: web3.utils.toWei('0.2','ether') }
		);

		let players = await lottery.methods.getPlayers().call({ from: accounts[0]})

		assert.ok(players.length === 3)
	})

	it('requires a minimum amount, (>= 0.01) of ether to enter', async() =>{
		
		// this syntax allows you to do the following:
		// attempt to run the code inside the try{} statement
		try {
			await lottery.methods.enter()
				.send( {from: accounts[0], value: web3.utils.toWei('0.05','ether') }
			);

			// this ensures that the test fails if this doesn't throw an error
			assert(false)
		}

		// if this code is executed with errors, an error is thrown 
		catch(err){

			// since we want this to throw an error due to the low ammount of sent ether
			// we simply call the assert method here
			assert(err)
		}
	})

	it('only manager can call pickWinner', async() =>{
		try{
			await lottery.methods.pickWinner()
				.send( {from: accounts[1], value: web3.utils.toWei('0.2','ether') }
			);
			assert(false)
		}
		catch(err){
			assert(err)
		}
	})

	it('sends money to the winner', async() =>{
		await lottery.methods.enter()
				.send( {from: accounts[0], value: web3.utils.toWei('2','ether') }
		);

		// finds init balance of manager account
		const initialBalance = await web3.eth

			// the .getBalance() method returns the balance of the selected account
			.getBalance(accounts[0])

		await lottery.methods.pickWinner().send({ from: accounts[0]})

		const finalBalance = await web3.eth.getBalance(accounts[0])

		// since each transaction costs gas, we can't expect an exact value of 2 to be returned to the account
		// due to this, we do a loose comparison
		const difference = finalBalance - initialBalance;

		// this ensures that the difference between the two values is around 2 ether, but slightly less
		// to compensate for the gas cost 
		assert(difference > web3.utils.toWei('1.8', 'ether'))

	})

	it('sends money to the manager on winner selection', async() =>{

		await lottery.methods.enter()
				.send( {from: accounts[1], value: web3.utils.toWei('2','ether') }
		);

		const initialBalance = await web3.eth.getBalance(accounts[0])

		await lottery.methods.pickWinner().send({ from: accounts[0]})

		const finalBalance = await web3.eth.getBalance(accounts[0])

		// ensures the final balance is greater than the initial balance for the manager
		assert.ok(finalBalance > initialBalance)

	})

})