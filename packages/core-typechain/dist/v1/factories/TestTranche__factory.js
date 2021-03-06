"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestTranche__factory = void 0;
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
const ethers_1 = require("ethers");
const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "baseToken",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "underlying",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "unlockTimestamp",
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
];
const _bytecode =
  "0x608060405234801561001057600080fd5b506040516102e13803806102e1833981810160405281019061003291906100aa565b816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550806001819055505050610150565b60008151905061008f81610122565b92915050565b6000815190506100a481610139565b92915050565b600080604083850312156100bd57600080fd5b60006100cb85828601610080565b92505060206100dc85828601610095565b9150509250929050565b60006100f1826100f8565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b61012b816100e6565b811461013657600080fd5b50565b61014281610118565b811461014d57600080fd5b50565b6101828061015f6000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c80636f307dc31461003b578063aa082a9d14610059575b600080fd5b610043610077565b60405161005091906100c8565b60405180910390f35b6100616100a0565b60405161006e91906100e3565b60405180910390f35b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6000600154905090565b6100b381610128565b82525050565b6100c28161011e565b82525050565b60006020820190506100dd60008301846100aa565b92915050565b60006020820190506100f860008301846100b9565b92915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b60006101338261013a565b9050919050565b6000610145826100fe565b905091905056fea264697066735822122007891031792d8ce0a0963aee11422a3b5140086c7c90b6998b4b0f278d552ef164736f6c63430008000033";
const isSuperArgs = (xs) => xs.length > 1;
class TestTranche__factory extends ethers_1.ContractFactory {
  constructor(...args) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }
  deploy(baseToken, timestamp, overrides) {
    return super.deploy(baseToken, timestamp, overrides || {});
  }
  getDeployTransaction(baseToken, timestamp, overrides) {
    return super.getDeployTransaction(baseToken, timestamp, overrides || {});
  }
  attach(address) {
    return super.attach(address);
  }
  connect(signer) {
    return super.connect(signer);
  }
  static createInterface() {
    return new ethers_1.utils.Interface(_abi);
  }
  static connect(address, signerOrProvider) {
    return new ethers_1.Contract(address, _abi, signerOrProvider);
  }
}
exports.TestTranche__factory = TestTranche__factory;
TestTranche__factory.bytecode = _bytecode;
TestTranche__factory.abi = _abi;
