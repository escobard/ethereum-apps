## Basic not-payable smart contract - Solidity

The purpose of this smart contract is to create a simple transaction which expects a string and returns a string. 


### Usage

To run this contract, paste the code within (this)[https://github.com/escobard/ethereum-apps/blob/master/smart-contracts-basics/scontract_1.sol] file to: http:remix.ethereum.org/#optimize=false&version=soljson-v0.4.21+commit.dfe3193c.js

```
 	1) Compile the smart contract.
	2) Head to the run tab - extended description of this functionality within (nodes.md)[https://github.com/escobard/ethereum-apps/blob/master/notes.md]
  	3) Expect 3 functions:
		- Inbox() - constructor function, runs upon smart contract init.
		- message - retreives a set message - throws an error if the setMessage() argument is empty
		- setMessage() - sets the message for the transaction.
	4) Set a STRING within the stringinitialMessage [Create] field - value MUST be a string, text must be surrounded by "" - "hi there" - as an example.
	5) Click on 'CREATE'
	6) Below, we can see an INSTANCE of the contract CLASS created.
	7) Clicking on either the message or get message buttons displays the string set in step 4.
	8) Within the console (gray area) we can view the transaction object.
	9) Setting a new message within the setMessage field of an INSTANCE updates the message value.
	10) To retreive the new message value from the INSTANCE, we click on the getMessage or message buttons.
	11) Have fun!
```
