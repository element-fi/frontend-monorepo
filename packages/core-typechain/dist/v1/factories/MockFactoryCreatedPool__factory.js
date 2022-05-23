"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MockFactoryCreatedPool__factory = void 0;
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
const ethers_1 = require("ethers");
const _abi = [
  {
    inputs: [],
    name: "getPoolId",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];
const _bytecode =
  "0x608060405234801561001057600080fd5b5060ce8061001f6000396000f3fe6080604052348015600f57600080fd5b506004361060285760003560e01c806338fff2d014602d575b600080fd5b60336047565b604051603e91906075565b60405180910390f35b60003073ffffffffffffffffffffffffffffffffffffffff1660001b905090565b606f81608e565b82525050565b6000602082019050608860008301846068565b92915050565b600081905091905056fea2646970667358221220c467021b4f725a3e82608b00d98a059fc1dc2727e2b1ed0870007f0e392154e464736f6c63430007010033";
const isSuperArgs = (xs) => xs.length > 1;
class MockFactoryCreatedPool__factory extends ethers_1.ContractFactory {
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
exports.MockFactoryCreatedPool__factory = MockFactoryCreatedPool__factory;
MockFactoryCreatedPool__factory.bytecode = _bytecode;
MockFactoryCreatedPool__factory.abi = _abi;
