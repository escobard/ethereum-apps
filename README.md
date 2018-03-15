# Ethereum Applications

The purpose of this repository is to create some boilerplate applications that can be expanded in the future for client and personal projects.

In addition, this repository contains all of my own programming files, notes, applications, and libraries for the [Ethereum and Solidity: The complete developer's guide](https://www.udemy.com/ethereum-and-solidity-the-complete-developers-guide) course with [Udemy](https://www.udemy.com). 

## Browser + test account requirements:

IMPORTANT: As of March 14th, 2018, there is no simple way to fund newly created accounts on the Rinkeby test network.

Due to this, we will be relying on two libraries to utilize each project in this repository.

1) Metamask - install the extension, create your account mneumonic: https://metamask.io/
2) Get ether - go to https://faucet.rinkeby.io/:
		- The easiest way to request ether is with google+ using the following instructions:
			1) sign in to google plus - https://plus.google.com/
			2) make sure you are on the home tab
			3) add a post (little red pencil bottom right)
			4) paste only your ether account address as the content, make sure post is public.
			5) click on the post, then copy the URL to the rinkeby faucet
			6) your account is credited with the specified ammount

The API prototype being developed post v0.45 will focus on simply creating and storing ether accounts with web3/express/mongoDB which will work perfectly on the main ether network. Since with test accounts we want to have some ammount of Ether available after account creation, the API cannot utilize any public faucet without user interaction so the automatic funding of your Ether account will be implementing at a later date.

## Demo

Barebones demo can be found (here)[https://lottery-app-1990.herokuapp.com/]

## Installation & Usage

To install and run this locally on your computer, you will need a local web to open the files in this repository with a text editor, or preview them on a browser.

You may also clone this locally to your computer, using the following line of code:

```
$ git clone https://github.com/escobard/ethereum-apps.git
```

Usage instructions available within each application folder.

## Notes on blockchain, ethereum, smart contracts, solidity & other theory:

- [Notes](https://github.com/escobard/ethereum-apps/wiki/Notes)

## Libraries & tools

More usage instructions on this application coming in the future.

- (metamask.io)[https://metamask.io/]
- (remix)[https://remix.ethereum.org]
- (rinkby fawcet)(https://faucet.rinkeby.io/)
- web3.js

## Known bugs:

- Installing the web3 version with npm install does not always install the correct package and may cause errors.
	- To fix this, run the following command: `npm install web3@1.0.0-beta.26`

## Application breakdown

To be expanded in the future...

## Contribution

Feel free to contribute to any and all of the files within this repository as you see fit. These files are mainly for personal use, but my goal is to help others better understand JavaScript Object Oriented programming with my software and helpful commentary.

## License

As of March 8th, 2018, these files are open for all to use and contribute to. This repository is protected under the [MIT License](http://choosealicense.com/licenses/mit/).
