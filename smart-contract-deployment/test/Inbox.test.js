const assert = require('assert')
const ganache = require('ganache-cli')

// this is a constructor function to create instances
const Web3 = require('web3')

// this is the instance of the Web3 constructor
// the instance grabs the ganache.provider() method to connect to the ganache local test server
// in other words, this provider can be changed to any other network we want to connect to
const web3 = new Web3(ganache.provider())