//0x37e4e98f0367f5e09effecc2242800ebdc10c8e7

const { ethers } = require("ethers");
const provider = new ethers.providers.JsonRpcProvider(`https://goerli.infura.io/v3/5b25fb93e44d46c89d3a0071efbb22e4`);

const walletAddress = "0x37e4e98f0367f5e09effecc2242800ebdc10c8e7";
const walletAbi = [
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_address",
        "type": "address"
      }
    ],
    "name": "accountBalance",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "contractBalance",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getValue",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "name",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "sendEthContract",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_user",
        "type": "address"
      }
    ],
    "name": "sendEthUser",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_num",
        "type": "uint256"
      }
    ],
    "name": "setValue",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }
]

const contractInteraction = async () => {
  const walletContract = new ethers.Contract(walletAddress, walletAbi, provider); //instance of Contract 0R Wallet

  // const contractName = await walletContract.name();
  // console.log("Contract Name:", contractName);

  // const num = await walletContract.getValue();
  // console.log("Number Value:", String(num));

  const contractBalance = await walletContract.contractBalance();
  const balethContract = ethers.utils.formatEther(contractBalance);
  console.log("Contract Balance:", balethContract);

  // const accountBalance = await walletContract.accountBalance("0xB40C95BdB8aF62A8CC785a683c4F34aC2C9d0C2a");
  // const balethAccount = ethers.utils.formatEther(accountBalance);
  // console.log("Account Balance:", balethAccount);

};
contractInteraction();