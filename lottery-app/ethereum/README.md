## Lottery Application

The purpose of this application is to allow users to enter a lottery with their etherium accounts.

Expected functionality:
	- First player to deploy the contract is assigned as the manager.
	- Players can enter as many times as they want, and enter as much money as they want.
	- Players must contribute an ammount greater than 0.1 to enter the lottery.
	- Picks a random winner, sends 95% of the lottery balance to the winner.
	- 5% of the lottery balance goes to the manager.
	- Contract is reset and ready to accept new lottery after the pot has been emptied, with the same manager.

Features include:
	- Peer to peer transactions with ethereum.
	- Deployment / compile helpers with solidity / web3.
	- End to end testing with Mocha.

Tech used:
	- Solidity 
	- React
	- Web3
	- Mocha

Future functionality:
	- v0.45 - Account creation / retention with an express / MongoDB API:
		- retains account data including a base account and password.
			- stores users public key, balance, and previously donated ammount.
			- 
		- ideally handled via metamask or Web3
			- For Web3:
				- on creating ether accounts with the lib: https://web3js.readthedocs.io/en/1.0/web3-eth-accounts.html
				- article on creating accounts: https://ethereum.stackexchange.com/questions/780/does-web3-js-have-the-functionality-to-create-new-accounts-and-unlock-an-account
		- The best structure for something like this would be the starter boilerplate for the advanced react redux JWT / MongoDB auth:
			- https://github.com/escobard/udemy-advanced-react-and-redux/tree/master/auth
		- Instead of a local MongoDB set up a DB with mlab as shown:
			- https://github.com/escobard/engbook/tree/master/server
	- v??? - Multiple smart contracts for other lottery games including:
		- Create your own lottery (for users who go through the account creation process on our client).
			- this contract will assign the user as the manager, and the server admin as the global manager.
				- global manager gets a smaller percentile of the pool, but the manager gets the larger cut.
		- Timed lottery:
			- sets a lottery with any of the basic contracts, with a timer.
	- Addition of other cryptocurrencies, starting with bitcoin.

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
