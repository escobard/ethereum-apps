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

This will test the methods, and options property of the contract instance.

To test network connection, initial message, and changing message functions run the following command:

```
$ npm run test
```

### Deployment

Before even deploying the smart contract to the network, we must sign up to several different API's:

1) Metamask - install the extension, create your account mneumonic: https://metamask.io/
2) Get ether - go to https://faucet.rinkeby.io/ - instructions on how to most easily claim ether within (the notes file, like 175)[https://github.com/escobard/ethereum-apps/blob/master/notes.md]
3) Sign up to Infura - https://infura.io/signup - grab the network URI for Rinkeby, or to any other network you want to deploy to.
4) Set your account mnemonic and network URI within /constants/config.js (instructions on /constants/config.sample.js)
5) Open up a terminal, navigate to this directory and run the following command

```
$ node deploy
```

6) Watch your terminal for confirmation logs of network connection and contract deployment addresses.
7) We can also keep track of our contract on the Rinkeby network by going to:
	- https://rinkeby.etherscan.io/
	- paste the outputted deployment address on step 6 into the search bar to view your deployed contract
8) We can then manipulate our contract with Remix, by doing the following:
	- Click on the Run tab.
	- Select the Injected Web3 environment - this environment is automatically generated into the remix tool from the metamask extension.
	- Any transaction we create will cost some ether, which will prompt a metamask popup confirming the transaction payment.
	- We can load our contract on the Rinkeby network by filling out the `At Address` field with our deployed contract's address.
		- Once loaded, the message call returns our set message string.
		- When we make a send request, (changing the message via setMessage) we get prompted by metamask to approve the transaction.
			- this shows the amount, gas limit, gas price, transaction fee, and max total properties of the transaction.
			- once approved, the transaction object is returned after some time and returns the object within the console.
9) Have fun!
