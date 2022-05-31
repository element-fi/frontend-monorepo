"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
var __extends =
  (this && this.__extends) ||
  (function () {
    var extendStatics = function (d, b) {
      extendStatics =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (d, b) {
            d.__proto__ = b;
          }) ||
        function (d, b) {
          for (var p in b)
            if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
      return extendStatics(d, b);
    };
    return function (d, b) {
      if (typeof b !== "function" && b !== null)
        throw new TypeError(
          "Class extends value " + String(b) + " is not a constructor or null",
        );
      extendStatics(d, b);
      function __() {
        this.constructor = d;
      }
      d.prototype =
        b === null
          ? Object.create(b)
          : ((__.prototype = b.prototype), new __());
    };
  })();
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestTreasury__factory = void 0;
var ethers_1 = require("ethers");
var _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_governance",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_token",
        type: "address",
      },
      {
        internalType: "address",
        name: "_spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "who",
        type: "address",
      },
    ],
    name: "authorize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "authorized",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "who",
        type: "address",
      },
    ],
    name: "deauthorize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "dummy",
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
    inputs: [
      {
        internalType: "address",
        name: "_target",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "_callData",
        type: "bytes",
      },
    ],
    name: "genericCall",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "who",
        type: "address",
      },
    ],
    name: "isAuthorized",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_recipient",
        type: "address",
      },
    ],
    name: "sendFunds",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "who",
        type: "address",
      },
    ],
    name: "setOwner",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_newDummy",
        type: "uint256",
      },
    ],
    name: "updateDummy",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
];
var _bytecode =
  "0x608060405234801561001057600080fd5b50604051610bc8380380610bc883398101604081905261002f916100c5565b600080546001600160a01b031916331790558061004b81610052565b50506100f3565b6000546001600160a01b031633146100a35760405162461bcd60e51b815260206004820152601060248201526f29b2b73232b9103737ba1037bbb732b960811b604482015260640160405180910390fd5b600080546001600160a01b0319166001600160a01b0392909216919091179055565b6000602082840312156100d6578081fd5b81516001600160a01b03811681146100ec578182fd5b9392505050565b610ac6806101026000396000f3fe6080604052600436106100c05760003560e01c80638da5cb5b11610074578063ca5f9d061161004e578063ca5f9d0614610229578063e1f21c6714610249578063fe9fbb8014610269576100c7565b80638da5cb5b14610177578063b6a5d7de146101c9578063b9181611146101e9576100c7565b806332e43a11116100a557806332e43a111461010e5780634650c308146101375780638522d1b214610157576100c7565b806313af4035146100cc57806327c97fa5146100ee576100c7565b366100c757005b600080fd5b3480156100d857600080fd5b506100ec6100e7366004610933565b610289565b005b3480156100fa57600080fd5b506100ec610109366004610933565b610356565b34801561011a57600080fd5b5061012460025481565b6040519081526020015b60405180910390f35b34801561014357600080fd5b506100ec61015236600461098f565b610423565b34801561016357600080fd5b506100ec610172366004610a0d565b610580565b34801561018357600080fd5b506000546101a49073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200161012e565b3480156101d557600080fd5b506100ec6101e4366004610933565b61072a565b3480156101f557600080fd5b50610219610204366004610933565b60016020526000908152604090205460ff1681565b604051901515815260200161012e565b34801561023557600080fd5b506100ec610244366004610a68565b600255565b34801561025557600080fd5b506100ec610264366004610954565b610804565b34801561027557600080fd5b50610219610284366004610933565b6108e0565b60005473ffffffffffffffffffffffffffffffffffffffff16331461030f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601060248201527f53656e646572206e6f74206f776e65720000000000000000000000000000000060448201526064015b60405180910390fd5b600080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b60005473ffffffffffffffffffffffffffffffffffffffff1633146103d7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601060248201527f53656e646572206e6f74206f776e6572000000000000000000000000000000006044820152606401610306565b73ffffffffffffffffffffffffffffffffffffffff16600090815260016020526040902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00169055565b60005473ffffffffffffffffffffffffffffffffffffffff1633146104a4576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601060248201527f53656e646572206e6f74206f776e6572000000000000000000000000000000006044820152606401610306565b60008373ffffffffffffffffffffffffffffffffffffffff1683836040516104cd929190610a80565b6000604051808303816000865af19150503d806000811461050a576040519150601f19603f3d011682016040523d82523d6000602084013e61050f565b606091505b505090508061057a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600b60248201527f43616c6c206661696c65640000000000000000000000000000000000000000006044820152606401610306565b50505050565b60005473ffffffffffffffffffffffffffffffffffffffff163314610601576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601060248201527f53656e646572206e6f74206f776e6572000000000000000000000000000000006044820152606401610306565b73ffffffffffffffffffffffffffffffffffffffff831673eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee141561067c5760405173ffffffffffffffffffffffffffffffffffffffff82169083156108fc029084906000818181858888f19350505050158015610676573d6000803e3d6000fd5b50610725565b6040517fa9059cbb00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff82811660048301526024820184905284169063a9059cbb906044015b602060405180830381600087803b1580156106ed57600080fd5b505af1158015610701573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061057a9190610a48565b505050565b60005473ffffffffffffffffffffffffffffffffffffffff1633146107ab576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601060248201527f53656e646572206e6f74206f776e6572000000000000000000000000000000006044820152606401610306565b6108018173ffffffffffffffffffffffffffffffffffffffff16600090815260016020819052604090912080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00169091179055565b50565b60005473ffffffffffffffffffffffffffffffffffffffff163314610885576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601060248201527f53656e646572206e6f74206f776e6572000000000000000000000000000000006044820152606401610306565b6040517f095ea7b300000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff83811660048301526024820183905284169063095ea7b3906044016106d3565b73ffffffffffffffffffffffffffffffffffffffff811660009081526001602052604090205460ff165b919050565b803573ffffffffffffffffffffffffffffffffffffffff8116811461090a57600080fd5b600060208284031215610944578081fd5b61094d8261090f565b9392505050565b600080600060608486031215610968578182fd5b6109718461090f565b925061097f6020850161090f565b9150604084013590509250925092565b6000806000604084860312156109a3578283fd5b6109ac8461090f565b9250602084013567ffffffffffffffff808211156109c8578384fd5b818601915086601f8301126109db578384fd5b8135818111156109e9578485fd5b8760208285010111156109fa578485fd5b6020830194508093505050509250925092565b600080600060608486031215610a21578283fd5b610a2a8461090f565b925060208401359150610a3f6040850161090f565b90509250925092565b600060208284031215610a59578081fd5b8151801515811461094d578182fd5b600060208284031215610a79578081fd5b5035919050565b600082848337910190815291905056fea2646970667358221220b259c5be4bbd2a2747fce4443c87361f20d5c7826ef8ec2d8d1bb9bf6420c5e464736f6c63430008030033";
var TestTreasury__factory = /** @class */ (function (_super) {
  __extends(TestTreasury__factory, _super);
  function TestTreasury__factory(signer) {
    return _super.call(this, _abi, _bytecode, signer) || this;
  }
  TestTreasury__factory.prototype.deploy = function (_governance, overrides) {
    return _super.prototype.deploy.call(this, _governance, overrides || {});
  };
  TestTreasury__factory.prototype.getDeployTransaction = function (
    _governance,
    overrides,
  ) {
    return _super.prototype.getDeployTransaction.call(
      this,
      _governance,
      overrides || {},
    );
  };
  TestTreasury__factory.prototype.attach = function (address) {
    return _super.prototype.attach.call(this, address);
  };
  TestTreasury__factory.prototype.connect = function (signer) {
    return _super.prototype.connect.call(this, signer);
  };
  TestTreasury__factory.createInterface = function () {
    return new ethers_1.utils.Interface(_abi);
  };
  TestTreasury__factory.connect = function (address, signerOrProvider) {
    return new ethers_1.Contract(address, _abi, signerOrProvider);
  };
  TestTreasury__factory.bytecode = _bytecode;
  TestTreasury__factory.abi = _abi;
  return TestTreasury__factory;
})(ethers_1.ContractFactory);
exports.TestTreasury__factory = TestTreasury__factory;
