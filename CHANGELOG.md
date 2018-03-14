## v0.45 - basic authentication and data retention with express / MongoDB
	- This is not part of any course, rather an experimental addition of my own.
		- I intend to apply some of the practices with this API in more advanced ether applications.
		- In later versions, JWT should be scrapped for cookie authentication instead.
	TODO:
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

## v0.4 - react frontend:
	- TODO:
		- Web3 / react integration. 
		- Base front end elements created

## v0.3 - advanced solidity:

	COMPLETED:
		- created lottery contract including features:
			- First player to deploy the contract is assigned as the manager.
			- Players can enter as many times as they want, and enter as much money as they want.
			- Players must contribute an ammount greater than 0.1 to enter the lottery.
			- Picks a random winner, sends 95% of the lottery balance to the winner.
			- 5% of the lottery balance goes to the manager.
			- Contract is reset and ready to accept new lottery after the pot has been emptied, with the same manager.

## v0.2 - solidity basics:

	COMPLETED:
		- smart contract deployment boilerplate, with the following feaures:
			- deployment
			- testing with mocha 
			- web3 usage
			- wallet provider
			- deplyment on etherscan
			- deployed contracts in remix

## v0.1:

	COMPLETED:
		- theory and some practice on solidity, blockchain networks, nodes, smart contracts, etc