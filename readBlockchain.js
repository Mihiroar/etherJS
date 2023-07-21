const { ethers } = require("ethers");
const provider = new ethers.providers.JsonRpcProvider(`https://mainnet.infura.io/v3/5b25fb93e44d46c89d3a0071efbb22e4`);

const queryBlockchain = async () => {
  // const block = await provider.getBlockNumber();
  // console.log("Current Block Number:", block);

const balance = await provider.getBalance("0xB40C95BdB8aF62A8CC785a683c4F34aC2C9d0C2a");
console.log("Account Balance in BN", balance); //BN is BigNumber (hex) (Its in Wei form here too)

const balanceEther = ethers.utils.formatEther(balance);
console.log("Account Balance in Ether", balanceEther);

const balanceWei = ethers.utils.parseEther(balanceEther); //(Again converted here to BigN i.e wei format)  https://docs.ethers.org/v5/api/utils/bignumber/#:~:text=A%20BigNumber%20is%20an%20object,values%20will%20generally%20accept%20them.

console.log("Account Balance in Wei",balanceWei);

};
queryBlockchain();


