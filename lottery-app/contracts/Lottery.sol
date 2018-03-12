pragma solidity ^0.4.17;

contract Lottery{

	// sets our address variable and calls it manager, this will be the address of whoever
	// deploys the contract
	address public manager;   

	// this is how we invoke our arrays in solidity - this is a dynamic array 
	// that can only contain addresses
	// address is the array type
	// [] represents the array
	// public is the priviledge
	// players is the identifier
	address[] public players;

	// constructor function, invoked automatically on smart contract init
	/* 
	- The msg global variable - created with every transaction like a receipt, contains the following properties:
		- data: the data field of the current transaction
		- gas: amount of gas the current function invocation has available
		- sender: address of the account that started the current function invocation
		- value: amount of ether (in wei) that was sent along with the function invocation
	*/
	function Lottery() public {

		// assigns the sender's address to the manager variable
		manager = msg.sender;
	}

	function enter() public	

		// this defines the function as a transaction function that handles ether, and costs gas
		payable {

			// require() expects a boolean, to equal true. if it does, the function runs
			// if it doesn't, the function stops running and throws an error
			
			// require statements have no detailed error statements - they are a bit difficult to work with
			require(

				// - value: amount of ether (in wei) that was sent along with the msg function invocation
				msg.value > 

				// sets the ether minimum value expected in this transaction
				.01 

				// this sets the currency to ether - this is converted to wei within the smart contract
				ether);

			players.push(msg.sender);
	}
}