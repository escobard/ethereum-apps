/* the purpose of this smart contract is to create a simple transaction which expects a string
// and returns a string. To run this contract, paste the code within 
// this file to: http://remix.ethereum.org/#optimize=false&version=soljson-v0.4.21+commit.dfe3193c.js
// 	1) Compile smart contract.
//	2) Head to the run tab - extended description of this functionality within nodes.md
//  3) Expect 3 functions:
		- Inbox() - constructor function, runs upon smart contract init.
		- getMessage() - retreives a set message - throws an error if the setMessage() argument is empty
		- setMessage() - sets the message for the transaction.
	4) Set a STRING within the stringinitialMessage [Create] field - value MUST be a string, text must be surrounded by "" - "hi there" - as an example.
	5) Click on 'CREATE'
	6) Below, we can see an INSTANCE of the contract CLASS created.
	7) Clicking on either the message or get message buttons displays the string set in step 4.
	8) Within the console (gray area) we can view the transaction object.
	9) Have fun!
*/

// IDE for solidity here: http://remix.ethereum.org/#optimize=false&version=soljson-v0.4.21+commit.dfe3193c.js

// specifies the version of solodity we are using within this contract file
// the compiler will first look for the version right here, and then customize how it behaves
// based on the version
pragma solidity ^0.4.17;

// defines our contract CLASS and the contract identifier
contract Inbox{

	// defines variables within the contract, with the following syntax:
	// STRING represents the data type, in this case string
	// PUBLIC represents the data permissions, in this case public
	// MESSAGE replresents the data identifier, in this gase message

	// this is called a storage variable - sort of like an instance variable
	// exists for the life of the contract 0 
	string public message;


	// this has the same spelling as the contract name - this is regarded as being a constructor function
	// constructor functions are functions that run automatically on parent declaration.
	// in other words, when the Inbox() class is called, the child function Inbox().Inbox()
	// is automatically called
	function Inbox(string initialMessage) public {
		message = initialMessage;
	}


	// further breakdown
	// defines a function, and an initial string to the function
	// function Inbox

	// the argument here describes the data type, and identifier for the expected argument
	// (string initialMessage)

	// public sets the function permissions as public
	// public

	// arguments within the curly brackers function much like JS
	//{message = newMessage}

	function setMessage(string newMessage) public {
		message = newMessage;
	}

	// breaking down returning functions by pieces as follows:
	// this is the function name, but this function accepts no arguments
	function getMessage() 

	// this is the function type, which determines the permissions for the function including:
	// can only use one - public or private:
		// public: anyone can call this function - think of these as communicating with other engineerse to comm. with this function at all
		// private only this contract can call this function
	// they mean the same thing:
		// view: this function returns data and does NOT modify the contract's data
		// constant: this function returns data and does NOT modify the contract's data
	// pure: function will not mofidy or even read the contract's data.
	// payable: when someone calls this function, they might send ether along - this is the function type we will be using the most
	public view 

	// this specifies that the function is meant to return a value, specified by the data type.
	returns (string){
		return message;
	}
}