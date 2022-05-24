"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CodeSizeChecker__factory = void 0;
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
const ethers_1 = require("ethers");
const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "which",
        type: "address",
      },
    ],
    name: "codeSize",
    outputs: [
      {
        internalType: "uint256",
        name: "ret",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];
const _bytecode =
  "0x608060405234801561001057600080fd5b5061015c806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c806352872cf314610030575b600080fd5b61004a60048036038101906100459190610080565b610060565b60405161005791906100b8565b60405180910390f35b6000813b9050919050565b60008135905061007a8161010f565b92915050565b60006020828403121561009257600080fd5b60006100a08482850161006b565b91505092915050565b6100b281610105565b82525050565b60006020820190506100cd60008301846100a9565b92915050565b60006100de826100e5565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b610118816100d3565b811461012357600080fd5b5056fea2646970667358221220879a8f364d3872a8d14b0c252088aa361068eb6f0f0566b0e4ca174250af02cd64736f6c63430008000033";
const isSuperArgs = (xs) => xs.length > 1;
class CodeSizeChecker__factory extends ethers_1.ContractFactory {
  constructor(...args) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }
  deploy(overrides) {
    return super.deploy(overrides || {});
  }
  getDeployTransaction(overrides) {
    return super.getDeployTransaction(overrides || {});
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
exports.CodeSizeChecker__factory = CodeSizeChecker__factory;
CodeSizeChecker__factory.bytecode = _bytecode;
CodeSizeChecker__factory.abi = _abi;