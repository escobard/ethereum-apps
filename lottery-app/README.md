## Lottery Application

The purpose of this application is to feature a bare bones front end application to display and manipulate contract data with web3.

Players are able to add a small ammount of Ether, (greater than 0.1) to the lottery.

Only the manager is able to pick a winner - to set yourself as the manager of the contract follow the usage instructions below.

This application expects the user to have a metamask account on the Rinkeby test network, with some ether.

To set up your metamask account and fund it with Rinkeby, follow the instructions within the main directory's README.md file.

### Installation

```
$ cd client && npm install
$ cd ethereum && npm install
```

## Usage

To use the application, first start our client server with the following command:

```
$ cd client && npm start
```

Once the client has been bundled, a browser window should open on localhost:3000.

From here, you can enter the lottery an unlimited amount of times by entering a value then clicking enter.

Few things to be aware of:
	- The contract only accepts a value greater than 0.1 ether.
	- It takes anywhere from 15-30 seconds to handle the transactions, so watch the message at the bottom of the page for a status on your transactions.

### Testing

This will test the methods, and options property of the contract instance.

To test network connection, initial message, and changing message functions run the following command:

```
$ cd ethereum && npm run test
```

### Deployment & Manager setup

To deploy the contract locally, follow these instructions.
	
	1) Since our application dynamically grabs your account data from metamask, we do not need to worry about changing the provider.
	2) To run the deployment script, run the following command:
		- `$cd ethereum && npm run deploy`
	3) Keep an eye on your console, you will need to copy the following two values :
		- the interface code (everything after Interface code: )
		- the address of our contract (everything after Address of our instance: )
	4) Navigate to /client/src/lottery.js
	5) Replace the address string with the new address found on step 3.
	6) Replace the array within the abi variable found on step 3. 