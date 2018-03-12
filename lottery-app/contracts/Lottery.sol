pragma solidity ^0.4.17;

contract Lottery{

	// sets our address variable and calls it manager, this will be the address of whoever
	// deploys the contract
	address public manager;   

	// constructor function, invoked automatically on smart contract init
	/* 
	- The msg global variable - created with every transaction, contains the following properties:
		- data: the data field of the current transaction
		- gas: amount of gas the current function invocation has available
		- sender: address of the account that started the current function invocation
		- value: amount of ether (in wei) that was sent along with the function invocation
	*/
	function Lottery() public {

		// assigns the sender's address to the manager variable
		manager = msg.sender;
	}
}