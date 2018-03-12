pragma solidity ^0.4.17;

contract Lottery{

	// sets our address variable and calls it manager, this will be the address of whoever
	// deploys the contract
	address public manager;   

	function Lottery(address setManager) public {
		address = setManager;
	}
}