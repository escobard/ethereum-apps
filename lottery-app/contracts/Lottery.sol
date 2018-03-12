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
				ether
			);

			players.push(msg.sender);
	}

	// solidity does not offer a random number generator like javascript and other languages
	// therefore we have to use a `trick` to generated a random number, but this randomness can be affected
	// the number is generated from block difficulty, current time, and the addresses of entrants / players
	// this is used by the SHA3 (keccak256) algorithm - this is not a TRUE random number however, and can be exploited
	function random() 

		// private since we want nobody but this contract to access this function
		private view 

		// specifies that this function is returning a value
		returns 

		// unsigned integer, always positive, no decimal
		(uint){

			// since we need to return a unit value (no decimal, positive) we need to convert our hex number
			// generated by the sha3 algo, with the uint() global function
			return uint(

				// this is a global call, with the keccak256 encryption mentioned on line 58 
				keccak256(

					// here are some more global variables with solidity
					// block - contains properties for the block containing our transaction
					// .difficulty - contains the current difficulty level of the block
					block.difficulty,

					// now - grabs the current time from block.timestamp
					// this can be influenced by miners in some way
					now,
					players
				)
			);

	}

	function pickWinner() public{
		// this will stop ANYONE but the manager from running our contract, to ensure that only the manager
		// can run the pickWinner() function
		require(msg.sender == manager);

		// the modulo function returns the remaining values multiplication.
		// For example:
		// 10 % 3 = 1 - this is true since 3x3 = 9, and the remaining value is 1
		// 10 % 4 = 2 - this is true since 4x2 = 8, and the remaining value is 2
		// to calculate randomness(ish) we use our random() returned number and our players.length() number to 
		// select the winning player.
		// random() % players.length() = winner
		uint index = random() % players.length;

		// converting the contract to an address object is necessary since this.balance is depracated
		address con = address(this);

		// selects the player within our players array
		players[index]

		// every address variable type stored in solidity has some attached functions
		// to transfer money to any address, we use the .transfer() method
		
		.transfer(

			// this grabs the balance from the contract
			// the this. object can be used to reference to the scoped contract, just like in JS
			// this.balance is depracted - refer to line 8-10
			con.balance
			)
		;

		// this resets our players array back to an empty array with the following syntax
		players = new 

			// creates a new address array
			address[]

			// ensures that the initial length of the array is 0
			(0);
	}
}