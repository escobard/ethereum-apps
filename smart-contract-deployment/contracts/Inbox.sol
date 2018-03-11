// expanded description with notes here : https://github.com/escobard/ethereum-apps/blob/master/smart-contracts-basics/scontract_1.notes.sol
// running instructions here: https://github.com/escobard/ethereum-apps/blob/master/smart-contracts-basics/README.md

pragma solidity ^0.4.17;

contract Inbox{

	string public message;

	function Inbox(string initialMessage) public {
		message = initialMessage;
	}

	function setMessage(string newMessage) public {
		message = newMessage;
	}
	
}