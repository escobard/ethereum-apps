import web3 from "./web3";

// we are using static content for this app, purely to showcase basic ethereum features on the fe
// the deploy script can now be exported and utilized ANYWHERE to create a new contract, as long as the 
// proper address is provided. 
// for 0.45+, try to add a script that allows the user to create a contract,
// as long as the user provides an address

// the address, and the abi were grabbed from the /ethereum/deploy.js console logs, after deploying to rinkby
// for this project, we really want to focus only on a single instance of the contract, 
let address = "0x1785bdC6eE6160a93166643dC396C64876bDACC1",
abi = [{"constant":true,"inputs":[],"name":"getBalance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"manager","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"pickWinner","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getPlayers","outputs":[{"name":"","type":"address[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"enter","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"players","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"}]


// this creates a LOCAL COPY of our contract, not to be confused with the real contract wihtin the rinkeby server
// this allows us to visually display changes to the contract on the front end
// this gives us access to all the contract functions!
export default new web3.eth.Contract(abi, address); 