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
				{
					from: accounts[0],
					value: web3.utils.toWei('0.2','ether') 
			}
		);

		let players = await lottery.methods.getPlayers().call({ from: accounts[0]})
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

		try {
			await lottery.methods.enter()
				.send( {from: accounts[0], value: web3.utils.toWei('0.05','ether') }
			);
			assert(false)
		}
		catch(err){
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
		const initialBalance = await web3.eth.getBalance(accounts[0])

		await lottery.methods.pickWinner().send({ from: accounts[0]})

		const finalBalance = await web3.eth.getBalance(accounts[0])
		const difference = finalBalance - initialBalance;

		assert(difference > web3.utils.toWei('1.8', 'ether'))

	})

	it('sends money to the manager on winner selection', async() =>{

		await lottery.methods.enter()
				.send( {from: accounts[1], value: web3.utils.toWei('2','ether') }
		);

		const initialBalance = await web3.eth.getBalance(accounts[0])

		await lottery.methods.pickWinner().send({ from: accounts[0]})

		const finalBalance = await web3.eth.getBalance(accounts[0])

		assert.ok(finalBalance > initialBalance)

	})

})