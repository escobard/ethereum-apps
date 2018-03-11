## ETHER BASICS - V0.1

**_These notes may not be 100% accurate yet, and will be updated as my understanding of the tech. stack grows_**


### From BASIC BLOCKCHAIN tutorial - This entire process can be shown here: https://anders.com/blockchain/block.html

- SHA256 Hash:
	- looks like a bunch of random numbers
	- fingerprints of whatever you type, a tiny amount or a huge amount, you will always receive a hash that is exactly 64 characters long
	- a HASH is an encrypted piece of data, could be as small as a single character, or as larger as the constitution of the united states.
	- no matter what though, the RETURNED piece of data, or the hash number, is always 64 characters long. 

- In comparison to a BLOCK:
	- a block is a SHA256 encrypted piece of data.
	- the block's DATA contains the following properties:
		- Block #
		- Nounce: how many transactions sent 
		- Data: whatever data the block contains, in most cases these are user transactions
	- mining is essentially encrypting the block with calculations to encrypt the data the block contains.
	- once a block has been MINED the hash of the block starts with 0000-1000 which indicates it has been SIGNED
	- we refer to the amount of time it takes to HASH (SIGN / ENCRYPT) the BLOCK as BLOCK TIME

- In comparison to BLOCKCHAIN:
	- contains a number of SIGNED blocks
	- each block in the chain contains the HASH of the previous and current blocks in the blockchain
	- this essentially forms a blockchain, a bunch of blocks containing data, with 2 hashes in each block, representing prev / current block in the chain.
	- if the data in any block changes, it INVALIDATES that block and ANY blocks after it.
	- this is how blockchains are SECURE, since tampering of ANY data in the chain changes the HASH, it can be immediately discerned where the data was manipulated by comparing the BLOCKCHAIN to other BLOCKCHAINS in the DISTRIBUTED BLOCKCHAIN NETWORK.

- In comparison to DISTRIBUTED BLOCKCHAIN:
	-  a DISTRIBUTED BLOCKCHAIN is a network with several NODES, each NODE contains an exact copy of the blockchain.
	- in this scenario, each BLOCKCHAIN copy is tested to make sure all the hashes match across the board, further validating the blockchain.
	- this ENSURES that the CURRENCY VALUE sent in each transaction is NOT changed, and if it does, its immediately discernable. This is the entire purpose of blockchains, to create a safe medium to secure transactions.

- Each BLOCK contains BLOCK DATA or a list of TRANSACTIONS:
	- The DATA within each BLOCK is multiple TRANSACTION OBJECTS - which are then MINED to get SIGNED, and then added to the BLOCKCHAIN
	- basic block data contains only transaction objects, not balances which are handled by COINBASE blockchains.

- With COINBASES TRANSACTIONS:
	- Essentially the balance is kept by the COINBASE BLOCKCHAINS (TRADING DASHBOARD), maintaining a BALANCE property for the user, and ensuring that the BALANCE can never go negative.
	- the COINBASE BALANCE is added as an additional property to the TRANSACTION OBJECT, for each transaction made by the user.

- BLOCK TIME:
	- The ammount of time it takes to HASH / Calculate the encryption on any given block:
	- Here is how the HASH is calculated:
		- you can copy the hash, and paste it in a browser console
		- place a 0x (instructs JS that this is a hash)
		- once enter is pressed, a number is generated - in essence the hash is a number.
		- So to re-iterate:
			- The hash takes data + other block properties to output the hash.
			- The hash is then converted to a base 10 number.
			- The hash this number then needs to be LESS than a target number, say 1000.
			- The hash iterates the data until the target solution is found.
			- This returns the VALUE of the hash, which can be between 0000-1000.
			- The number is determined by the blockchain proof of work algo. which selects a target number.
			- Once a solution has been determined, the block is considered as SIGNED, and added to the block chain.

### DIFFERENCES WITH BASIC BLOCKCHAIN AND ETHEREUM

- BLOCK TIME for ETHEREUM:
	- target block time is 15 seconds for the ether network, but in reality this is a variable factor:
		- for example, if a HASH with a HIGH target number will take longer, so if the PREVIOUS block hash has a HIGH target number, the next hash will contain a LOWER target number which is easier to solve.
		- Then an additional set of time is taken distributing the solution (or the new block in the blockchain) to other nodes.
		- To check avarage block times for Ether, we can check: https://etherscan.io/chart/blocktime

### NETWORKS

- Every network contains nodes, which a are managed by one or many users
- There can be many networks, but there is only one main network which is where real monitery transactions take place

### ETHER ACCOUNTS

- Every account contains the following identifying pieces of data:
	+ account address: like an email, which can be shared with anyone in the world to identify your account 	- this can be copied from metamask
		- a single account can be used for any other network:
		- multiple accounts can be created quite easily
	+ public key: this and the private key are used to authorize the sending and receiving of transactions to your account
		- the public key is used to receive transactions
	+ private key:
		- the private key is used to send transactions - VERY IMPORTANT TO KEEP PRIVATE KEY SECRET

### TRANSACTIONS

- Sending ether tokens from one account to another
	- requires the user account to receive tokens
- takes some ammount of time
- tokens within test networks are worthless, and only used for testing purposes
- breakdown of a transaction:
	1) submit on the form
	2) address / account sent to backend server
	3) backend server used web3 library to create a 'transaction' object
		+  What is a transaction object?
			+ record that describes one account attempting to send money to another account
			+ this is then sent to the ether network to be processed
				- each transaction has the following properties:
					- nonce: this number states how many times a SENDER has sent a transaction.
					- to: address of the account, where this money is being sent to
					- value: the ammount of ether to send to the target address defined in the to property.
						+ think of the difference between currencies as a unit of measurement.
						+ bitcoin is 1 dollar bills, either is 100 cents (as an example), etc.
					- gasPrice: ammount of ether the sender is willing to pay per unit gas to get this transaction processed.
					- startGas/gasLimit: unit of gas that this transaction can consume
					- VRS: cryptographic pieces of data that can be used to generate the senders account address - generated from the senders private key.
	4) backend server sent transaction object to the ether network, (in our case the rinkeyby test network for now) 
	5) backend server waits for transaction to be confirmed:
		+ Why did we wait?
			- cryptocurrency creators knew they had to create a system robust enough to handle billions or trillions of dollars of value being transfered between people every day - this is the answer to why transaction handling is so complex and necessary to the crypto(eco)system.
			- transaction handling by the ether network:
				1) transaction enters the network, connecting to a specific NODE which is connected to the specific network.
				2) the NODE contains an entire copy of the blockchain(for now, a blockchain is described simply as a database) and receives your transaction
					- the node can process multiple transactions at once
					- it then compiles the list of transactions into a block:
						- this block is then validated, and it goes through a long process.
							- this is the process known as MINING - the calculations taken to validate the block, are how users MINE a crypto currency. 
	6) Once transaction is confirmed, it sends the transaction data to the corresponding users
- A rule that will ALWAYS hold true within this ecosystem is that to update any data on the blockchain, we have to submit a transaction request.

### UNITS:

	- think of the difference between currencies as a unit of measurement.
	- bitcoin is 1 dollar bills, either is 100 cents (as an example), etc.
	- wei: a small unit of ether - 1 ether == 1,000,000,000,000,000,000 wei - can't have fractional units of wei.
	- etherconverter.online - a calculator for ether units of measurement.
	- mostly we will be working with wei and ether.

### GAS:

- In a nutshell, the GAS SYSTEM is meant to measure how much work we are executing with our code.
- Think of this as a HOSTING FEE - is hosting free? No! We have to pay a fee.
- Any time a smart contract is executed on an ethereum network, there is a GAS PRICE attached to it.
- some applications start getting too expensive.
	- remember that whoever is creating the transaction is the one that has to pay the gas price.
- There is a list somewhere displaying the GAS cost for each operation type, try to find that later.
	- GAS PRICE:
		- The ammount of currency we are offering per transaction to handle gas used - usually in wei.
		- Ammount of currency we are offering per unit of gas.
			- For example:
				- If I am willing to set gasPrice to 10, we would then multiply 10 by the total gas used for the entire contract.
				- Say we are doing an addition operation (uses 3 gas, need to find a table with the gas cost prices), if we are paying 10 we, then we would pay a total of 30 wei for that function ALONE.
				- The GAS COST is the TOTAL amount of gas paid at the end of the transaction.
				- gas price x gas used = gas cost OR 10 wei x 3 = 30 wei in this case.
	- startGas / gasLimit: 
		- Represents the max units of gas that the transaction can consume.
			- we are willing to pay AT MOST the set units of gas to run this contract.
		- It's difficult to calculate the gas consumed in situations when a loop is utilized.
			- if the gas limit is set to LOWER than the required ammount of gas to run the contract, the contract will stop running as shown in the following example:
			- gasLimit: 10
				- ADD - 3 gas
				- SUBTRACT - 3 gas
				------------------- the operation would stop right here since the gasLimit is set to 10
				------------------- 3 + 3 = 6, adding the MULTIPLY function to the chain would set the
				------------------- gas cost to 11, so the contract stops on the SUBTRACT function
				- MULTIPLY - 5 gas
				- EQ - 3 gas 
				- TOTAL = 14 gas 

### 12 word Mnemonic - mnemonic is a series of easy to memorize words:

- a series of 12 random words, used to encrypt your account data
- this 12 word mnemonic can be decrypted by the BIP39 mnemonic algorithm:
	- This stores the public key, private key, and account address for MULTIPLE accounts.
	- For multiple account storage, this is a fairly secure tactic
	- METAMASK uses this data structure to generate accounts.
- Creating a new password, after initially installing METAMASK creates a new MMNEOMNIC ALGORITHM:
	- this is used to securely store a list of accounts which we can use.
	- as soon as the VAULT is created, we are given 12 words which we can use to generate our mnemonic again.
- we can use this tool to see how mnemonic account chains are created: https://iancoleman.io/bip39/
	- we can paste our mnmonic into the bip39 field, to generate our account data
	- at the bottom, we have a list of derived addresses.
	- this is a fairly effective way to recover your accounts

### Getting more ether

- Go to https://faucet.rinkeby.io/
	- The easiest way to request ether is with google+ using the following instructions:
		1) sign in to google plus - https://plus.google.com/
		2) make sure you are on the home tab
		3) add a post (little red pencil bottom right)
		4) paste only your ether account address as the content, make sure post is public.
		5) click on the post, then copy the URL to the rinkeby faucet
		6) your account is credited with the specified ammount

### SMART CONTRACTS:

- Think of a Smart contract as an account, like the one created on MetaMask.
- Instead of being controlled by a human being however, this is controlled by some ammount of code.
	- This creates a behavioral pattern for the smart contract, to handle a transaction in a specific way.
- Smart Contract accounts contain the following additional properties:
	- balance: ammount of ether this account owns.
	- storage: data storage for this contract.
	- code: raw machine code for this contract.
- Accounts created via metamask, are refered to as EXTERNAL ACCOUNTS
- Acounts created for smart contracts, are called CONTRACT ACCOUNTS.
	- Unlike EXTERNAL ACCOUNTS, CONTRACT ACCOUNTS are NETWORK SPECIFIC.
	- In other words, contracts that work for the Rinkeby network will not work for the Kovan network, until re-deployed.
	- contract production process:
		1) create the contract locally - creates a CLASS
		2) deploy it to the specific network.
		3) creates an instance of smart contract within the network - or an INSTANCE of that CLASS. 
		4) the instance can then be manipulated with the CALLBACK FUNCTIONS within the CLASS.
		5) the contract then lives on the NETWORK continuing to handle TRANSACTIONS - all logical code is exposed to the world, so no secret data should be deployed with any smart contract.
- Different ways to run functions on our contracts:
	- call - a function like message within scontract_1, does not create a transaction since this function only RETREIVES data from an INSTANCE - instantenous, free, not complication.
		- important points:
			1) cannot modify data.
			2) can return data.
			3) runs instantly
			4) is free
	- modify / transact - these types of functions modify any data within the instance, creating a transaction request.
		- important points to remember:
			1) Returning data takes time to execute - takes a while to validate the blockchain.
			2) can modify a contracts data.
			3) takes time to execute - way more on public networks, on any test networks like REMIX transactions are almost immediate. This is why we will build applications EXPECTING the delay.
			4) returns the transaction proof of work hash.
			5) costs money - more on this in another unit but essentially any TRANSACTION costs a certain ammount.

### CONTRACT ACCOUNTS && EXTERNAL ACCOUNT RELATIONSHIP:

- Transaction process is as follows:
	1) User creates an account / logs into account.
	2) This account creates a TRANSACTION REQUEST, which is handled by the CONTRACT ACCOUNT (SMART CONTRACT)
	3) The CONTRACT ACCOUNT handles the TRANSACTION OBJECT, manipulating the data as instructed by its logic.
	4) The CONTRACT serves two purposes:
		- it stores the TRANSACTION OBJECT within a BLOCK for later storage into a BLOCKCHAIN.
		- it manipulates the TRANSACTION OBJECT returning logic which returns something to the receiving users's account.
		- with a contract transaction (no currency), data is returned to the receiving user, and the VALUE property can be filled with currency, which returns a currency value to the receiving user.
		- within a currency transaction, the VALUE of the transaction is DEDUCTED from the contract creator's account, and ADDED to the receiving user's account.
- differences between contract transactions (no money) vs currency transactions are:
	- the to property is null / undefined within contract transactions.
	- contains the data property: compiled bytecode of the contract.
	- the value property is irrelevant, since no currency is being sent.


### SOLIDITY:

- Used to develop smart contracts
- strongly typed language
- similar to javascript, with some big GOTCHA'S that will be explored later
- Basic syntax breakdown here: [https://github.com/escobard/ethereum-apps/blob/master/smart-contracts-basics/scontract_1.sol](https://github.com/escobard/ethereum-apps/blob/master/smart-contracts-basics/scontract_1.sol)
- Contract process with solidity:
	- Solidity contract definition (code needed for the contract to work)
	- Solidity compiler compiles the code into two seperate files:
		- Byte code ready for deployment to network.
		- Application Binary Interface (ABI):
			- Key to write applications that utilize smart contracts.
			- The ABI is used to interface the Byte code used for the smart constract, to visually show data from the contract.
- changing base smart contract machine code does NOT change already existing INSTANCES of the CLASS
- we can use the remix online application to debug solidity code while writing it - remix.ethereum.org

### REMIX: remix.ethereum.org

- IDE for solidity, can test / compile smart contracts live.
	- REMIX is powered by a testing ETHEREUM network.
	- in the RUN tab, we can change the following network properties:
		- Environment: can choose the environment that we want.
		- Account: Creates accounts automatically created for testing purposes.
			+ has multiple accounts with 100 ether - makes testing contracts really easy
		- Gas limit: will return to this concept later.
		- Value: sets the value of the currency that we want.
		- SUPER AWESOME - THE CONTRACT FUNCTION UI:
			- This area of the IDE shows the functions within your contract.
			- We can create an INSTANCE of our smart contract CLASS here.
			- This allows us to test returned data, by analysing the INSTANCES created on the test network.
			- We can also test the function callbacks to retreive data from the smart contract.
			- We can also check the TRANSACTION OBJECT with each instance, by clicking on the details button within the console.

## CONTRACT DEPLOYMENT - V0.2

- How do we deploy our contract to the network?
	- Several options- but all have the following problems:
		- Undergoing rapid development
		- Some things don't work well
		- Some things don't work at all
		- Stuff breaks - patience is required
		- Truffle - most popular:
			- One stop shop for development of etherium contracts, boilerplate contains:
				- contract creation
				- local testing
				- deployment
	- To solve this problem, we are going to create our own custom node boilerplate to allow:
		- contract creation - set up solidity compiler to build our contracts.
			- this allows us to generate the BYTE code necessary to deploy, and the code necessary to interact on the front end with JS
		- local testing - set up mocha tester runner to test solidity code.
		- deployment - set up deploy script to compile + deploy our contract.

### LOCAL TESTING:

- We are going to create a local ethereum network for testing with Ganache/TestRPC
	- this tests contract deployment instances, and functionality
		- For windows, users need to install the following global dependency:
			`npm install --global --production windows-build-tools`

### WEB3

- This is the absolute solution to access ethereum networks with javascript applications
- version issues:
	- v0.x.x:
		- Primitive interface, only callbacks for async code
		- most stackoverflow posts use the earlier versions of the API
	- v1.x.x:
		- support for promises + async/await
		- we are using v1
- A provider must be set up with web3 to communicate with an ethereum network.
	- this allows us to send a request to the network (in v0.2's case, the ganache test network)
	- which returns a response back to web3, which we then use within our application