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
	address[] public players

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

	function enter() public {

		// anything that sends ether we use the payable function type 
		payable {
			players.push(msg.sender)
		}
}