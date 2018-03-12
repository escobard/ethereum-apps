const assert = require('assert')
const ganache = require('ganache-cli')
const Web3 = require('web3')

const web3 = new Web3(ganache.provider())

const { interface, bytecode } = require('../compile')
const { INITIAL_STRING } = require('./constants')

let accounts, inbox;

beforeEach(async () =>{

	accounts = await web3.eth.getAccounts();

	inbox = await new web3.eth.Contract( JSON.parse(interface) )
		.deploy({ data: bytecode, arguments:[INITIAL_STRING] })
		.send({ from: accounts[0], gas:'1000000' })

})

describe('Inbox', () => {
	it('deploys a contract', () => {
		// console.log('inbox address', inbox.options.address)
		// console.log('inbox methods', inbox.methods)
		assert.ok(inbox.options.address)

	})
	it("checks intial message to equal 'Hi there!'", async () => {

		let message = await inbox.methods.message().call()

		assert.equal(message, INITIAL_STRING)
		// console.log('inbox methods message', inbox.methods.message)

	})
	it("modifies message variable via the setMessage() function, and tests 'New text!' value", async () => {
		
		await inbox.methods.setMessage('New text!').send({ from: accounts[0] })

		let message = await inbox.methods.message().call()
		assert.equal(message, 'New text!')
		
	})
})