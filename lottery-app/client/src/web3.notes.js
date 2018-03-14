// the purpose of this file is to overwrite the web3 instance injected by metamask

import Web3 from 'web3';

const web3 = new Web3(
	// this grabs the browser instance of web3 from metamask
	window.web3

	// current provider within the browser's copy of web3
	// our method overwrites it replacing it with our version instead
	// by doing so, we essentially hijack the provider from metamask to utilize
	// including user account information, and connection to whatever network metamask is connected to
	.currentProvider);

export default web3;
