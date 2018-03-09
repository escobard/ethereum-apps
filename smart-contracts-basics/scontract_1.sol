// IDE for solidity here: http://remix.ethereum.org/#optimize=false&version=soljson-v0.4.21+commit.dfe3193c.js
// specified the version of solodity we are using within this contract file
pragma solidity ^0.4.17;

// defines our contract name
contract Inbox{

	// defines variables within the contract, with the following syntax:
	// STRING represents the data type, in this case string
	// PUBLIC represents the data permissions, in this case public
	// MESSAGE replresents the data identifier, in this gase message
	string public message;

	// defines a function, and an initial string to the function
	// the argument here describes the data type, and identifier for the expected argument
	// public sets this as a public function
	function Inbox(string initialMessage) public {
		message = initialMessage;
	}

	function setMessage(string newMessage) public {
		message = newMessage;
	}

	function getMessage() public view returns (string){
		return message;
	}
}