## ETHER BASICS

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
				= each transaction has the following properties:
					- nonce: this number states how many times a SENDER has sent a transaction.
					- to: address of the account, where this money is being sent to
					- value: the ammount of ehter to send to the target address defined in the to property
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

### From BASIC BLOCKCHAIN tutorial - This entire process can be shown here: https://anders.com/blockchain/block.html

- SHA256 Hash:
	- looks like a bunch of random numbers
	- fingerprints of whatever you type, a tiny amount or a huge amount, you will always receive a hash that is exactly that long

- In comparison to a BLOCK:
	- a block is a SHA256 encrypted piece of data.
	- it contains:
		- Block #
		- Nounce: how many transactions sent 
		- Data: whatever data the block contains, in most cases these are user transactions
	- mining is essentialyl encrypting the block with calculations to encrypt the data the block contains.
	- once a block has been MINED the hash of the block starts with 0000 or FOUR ZEROES which indicates it has been SIGNED

- In comparison to BLOCKCHAIN:
	- contains a number of SIGNED blocks
	- each block in the chain contains the HASH of the previous and current blocks in the blockchain
	- this essentially forms a blockchain, a bunch of blocks containing data, with 2 hashes representing prev / current block in the chain.
	- if the data in any block changes, it INVALIDATES that block and ANY blocks after it.
	- this is how blockchains are SECURE, since tampering of ANY data in the chain changes the HASH, it can be immediately discerned where the data was manipulated by comparing the BLOCKCHAIN to other BLOCKCHAINS in the DISTRIBUTED BLOCKCHAIN NETWORK.

- In comparison to DISTRIBUTED BLOCKCHAIN:
	-  a DISTRIBUTED BLOCKCHAIN is a network with several NODES, each NODE contains an exact copy of the blockchain.
	- in this scenario, each BLOCKCHAIN copy is tested to make sure all the hashes match across the board, further validating the blockchain.
	- this ENSURES that the MONEY sent in each transaction is NOT changes, and if it is its immediately discernable. This is the entire purpose of blockchains, to create a safe medium to secure transactions

- Each BLOCK contains BLOCK DATA or a list of TRANSACTIONS:
	- The DATA within each BLOCK is multiple TRANSACTION OBJECTS - which are then MINED to get SIGNED, and added to a BLOCKCHAIN
	- remember that this is only remembering money movements, not balances

- With COINBASES TRANSACTIONS:
	- Essentially the balance is kept by the COINBASE DASHBOARD, maintaining a BALANCE for the user, and ensuring that the BALANCE can never go negative.
	- the COINBASE BALANCE is added as an additional property to the TRANSACTION OBJECT, for each transaction made by the user.