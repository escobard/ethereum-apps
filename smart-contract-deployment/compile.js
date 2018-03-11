
// standard modules with the NPM library

// this module allows us to find a local path
const path = require('path');

// reads the content from the file
const fs = require('fs')

// solidity compiler library
const solc = require('solc')

// sets the path for our inbox contract
const inboxPath = path.resolve(
	// _dirname takes us to the main project folder, in this gase /smart-contract-deployment
	_dirname, 

	// first argument is the folder name
	'contracts',

	// second argument is the file name
	'Inbox.sol'
)

// reads the raw content from our contract

const source = fs.readFileSync(
	// this is the path of the file
	inboxPath,

	// this sets the expected document language
	'utf8')

// this grabs the contract file specified in the source 
solc.compile(

	// this grabs the source solidity code, compiling it
	source, 

	// this specifies the number of solidity smart contracts to compile, in our case just 1
	1)

console.log(solc.compile(source, 1));