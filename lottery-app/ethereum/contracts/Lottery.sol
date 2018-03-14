pragma solidity ^0.4.17;

contract Lottery{

	address public manager;
	address[] public players;
	address con = address(this);
	address public winner;

	function Lottery() public {
		manager = msg.sender;
	}

	function enter() public	payable {
			require(msg.value >	.01 ether);
			players.push(msg.sender);
	}

	function random() private view returns (uint){
			return uint( keccak256(	block.difficulty, now, players ) );

	}

	function pickWinner() public restricted {
		uint managerAward = con.balance/20;
		uint index = random() % players.length;
		winner = players[index]
		manager.transfer(managerAward);
		players[index].transfer(con.balance);
		players = new address[](0);
	}

	function getPlayers() public view returns (address[]) {
		return players;
	}

	// this is actually obsolete, since we can use the web3.eth.getBalance() function to 
	// retreive a contract's balance
	function getBalance() public view returns (uint){
		return con.balance;
	}

	modifier restricted(){
		require(msg.sender == manager);
		_;
	}
}