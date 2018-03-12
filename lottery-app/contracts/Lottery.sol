pragma solidity ^0.4.17;

contract Lottery{

	address public manager;
	address[] public players;
	address public con = address(this);

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

		uint index = random() % players.length;
		
		// ensures manager gets a 5% cut of the lottery profit
		uint managerAward = con.balance/20;

		// pays the manager
		manager.transfer( managerAward );
		
		players[index].transfer( con.balance);

		players = new address[](0);
	}

	function getPlayers() public view returns (address[]) {
		return players;
	}

	function getBalance() public view returns (uint){
		return con.balance;
	}

	modifier restricted(){
		require(msg.sender == manager);
		_;
	}
}