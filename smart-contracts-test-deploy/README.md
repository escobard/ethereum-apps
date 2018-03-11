## Smart contract deployment boilerplate

The purpose of this application is to provide a boilerplate for smart contract with solidity including:
	- contract creation - set up solidity compiler to build our contracts.
		- this allows us to generate the BYTE code necessary to deploy, and the code necessary to interact on the front end with JS
	- local testing - set up mocha tester runner to test solidity code.
	- deployment - set up deploy script to compile + deploy our contract.

## Usage

To be expanded on in the future

### Installation

```
$ npm install
```

### Testing

To test network connection, initial message, and changing message functions run the following command:

```
$ npm run test
```

### Deployment

Before even deploying the smart contract to the network, we must sign up to several different API's:

1) Metamask - install the extension, create your account mneumonic: https://metamask.io/
2) Get ether - go to https://faucet.rinkeby.io/ - instructions on how to most easily claim ether within (the notes file, like 175)[https://github.com/escobard/ethereum-apps/blob/master/notes.md]
3) Sign up to Infura - https://infura.io/signup

Additionally, this will the methods, and options property of the contract instance.