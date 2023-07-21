import { useEffect } from "react";
import { ethers } from "ethers";
import "./App.css";

function App() {
  const walletAddress = "0x37e4e98f0367f5e09effecc2242800ebdc10c8e7";

  useEffect(() => {
    const walletAbi = [
      {
        inputs: [
          {
            internalType: "address",
            name: "_address",
            type: "address",
          },
        ],
        name: "accountBalance",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "contractBalance",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "getValue",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "name",
        outputs: [
          {
            internalType: "string",
            name: "",
            type: "string",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "sendEthContract",
        outputs: [],
        stateMutability: "payable",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "_user",
            type: "address",
          },
        ],
        name: "sendEthUser",
        outputs: [],
        stateMutability: "payable",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "uint256",
            name: "_num",
            type: "uint256",
          },
        ],
        name: "setValue",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
    ];

    const writeContract = async () => {
      try {
        if (window.ethereum) {
          await window.ethereum.request({ method: "eth_requestAccounts" });
          const provider = new ethers.providers.Web3Provider(window.ethereum);
          const signer = provider.getSigner();
          const contract = new ethers.Contract(
            walletAddress,
            walletAbi,
            signer
          );
          // await contract.setValue(2);
          // await contract.sendEthContract({ value: ethers.utils.parseEther("0.1") });
          await contract.sendEthUser("0xD080163A90F2a513cBDeAaC76762E44Ae4FC2ac1", { value: ethers.utils.parseEther("0.03") });
        } else {
          console.error("MetaMask not detected");
        }
      } catch (error) {
        console.error(error);
      }
    };

    writeContract();
  }, []);

  return <div className="App"></div>;
}

export default App;
