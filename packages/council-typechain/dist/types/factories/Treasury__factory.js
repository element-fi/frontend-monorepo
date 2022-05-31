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
exports.Treasury__factory = void 0;
var ethers_1 = require("ethers");
var _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "__governance",
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
    stateMutability: "payable",
    type: "receive",
  },
];
var _bytecode =
  "0x608060405234801561001057600080fd5b50604051610b44380380610b4483398101604081905261002f916100c3565b600080546001600160a01b0319163317905561004a81610050565b506100f1565b6000546001600160a01b031633146100a15760405162461bcd60e51b815260206004820152601060248201526f29b2b73232b9103737ba1037bbb732b960811b604482015260640160405180910390fd5b600080546001600160a01b0319166001600160a01b0392909216919091179055565b6000602082840312156100d4578081fd5b81516001600160a01b03811681146100ea578182fd5b9392505050565b610a44806101006000396000f3fe60806040526004361061009a5760003560e01c80638da5cb5b11610069578063b91816111161004e578063b91816111461019f578063e1f21c67146101df578063fe9fbb80146101ff576100a1565b80638da5cb5b14610128578063b6a5d7de1461017f576100a1565b806313af4035146100a657806327c97fa5146100c85780634650c308146100e85780638522d1b214610108576100a1565b366100a157005b600080fd5b3480156100b257600080fd5b506100c66100c13660046108c9565b61021f565b005b3480156100d457600080fd5b506100c66100e33660046108c9565b6102ec565b3480156100f457600080fd5b506100c6610103366004610925565b6103b9565b34801561011457600080fd5b506100c66101233660046109a3565b610516565b34801561013457600080fd5b506000546101559073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020015b60405180910390f35b34801561018b57600080fd5b506100c661019a3660046108c9565b6106c0565b3480156101ab57600080fd5b506101cf6101ba3660046108c9565b60016020526000908152604090205460ff1681565b6040519015158152602001610176565b3480156101eb57600080fd5b506100c66101fa3660046108ea565b61079a565b34801561020b57600080fd5b506101cf61021a3660046108c9565b610876565b60005473ffffffffffffffffffffffffffffffffffffffff1633146102a5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601060248201527f53656e646572206e6f74206f776e65720000000000000000000000000000000060448201526064015b60405180910390fd5b600080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b60005473ffffffffffffffffffffffffffffffffffffffff16331461036d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601060248201527f53656e646572206e6f74206f776e657200000000000000000000000000000000604482015260640161029c565b73ffffffffffffffffffffffffffffffffffffffff16600090815260016020526040902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00169055565b60005473ffffffffffffffffffffffffffffffffffffffff16331461043a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601060248201527f53656e646572206e6f74206f776e657200000000000000000000000000000000604482015260640161029c565b60008373ffffffffffffffffffffffffffffffffffffffff1683836040516104639291906109fe565b6000604051808303816000865af19150503d80600081146104a0576040519150601f19603f3d011682016040523d82523d6000602084013e6104a5565b606091505b5050905080610510576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600b60248201527f43616c6c206661696c6564000000000000000000000000000000000000000000604482015260640161029c565b50505050565b60005473ffffffffffffffffffffffffffffffffffffffff163314610597576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601060248201527f53656e646572206e6f74206f776e657200000000000000000000000000000000604482015260640161029c565b73ffffffffffffffffffffffffffffffffffffffff831673eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee14156106125760405173ffffffffffffffffffffffffffffffffffffffff82169083156108fc029084906000818181858888f1935050505015801561060c573d6000803e3d6000fd5b506106bb565b6040517fa9059cbb00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff82811660048301526024820184905284169063a9059cbb906044015b602060405180830381600087803b15801561068357600080fd5b505af1158015610697573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061051091906109de565b505050565b60005473ffffffffffffffffffffffffffffffffffffffff163314610741576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601060248201527f53656e646572206e6f74206f776e657200000000000000000000000000000000604482015260640161029c565b6107978173ffffffffffffffffffffffffffffffffffffffff16600090815260016020819052604090912080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00169091179055565b50565b60005473ffffffffffffffffffffffffffffffffffffffff16331461081b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601060248201527f53656e646572206e6f74206f776e657200000000000000000000000000000000604482015260640161029c565b6040517f095ea7b300000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff83811660048301526024820183905284169063095ea7b390604401610669565b73ffffffffffffffffffffffffffffffffffffffff811660009081526001602052604090205460ff165b919050565b803573ffffffffffffffffffffffffffffffffffffffff811681146108a057600080fd5b6000602082840312156108da578081fd5b6108e3826108a5565b9392505050565b6000806000606084860312156108fe578182fd5b610907846108a5565b9250610915602085016108a5565b9150604084013590509250925092565b600080600060408486031215610939578283fd5b610942846108a5565b9250602084013567ffffffffffffffff8082111561095e578384fd5b818601915086601f830112610971578384fd5b81358181111561097f578485fd5b876020828501011115610990578485fd5b6020830194508093505050509250925092565b6000806000606084860312156109b7578283fd5b6109c0846108a5565b9250602084013591506109d5604085016108a5565b90509250925092565b6000602082840312156109ef578081fd5b815180151581146108e3578182fd5b600082848337910190815291905056fea2646970667358221220e14b94c9553710fdb99e79b14ceda1ce4d3d24b43fcc49f6df8f1369ac8b9fa964736f6c63430008030033";
var Treasury__factory = /** @class */ (function (_super) {
  __extends(Treasury__factory, _super);
  function Treasury__factory(signer) {
    return _super.call(this, _abi, _bytecode, signer) || this;
  }
  Treasury__factory.prototype.deploy = function (__governance, overrides) {
    return _super.prototype.deploy.call(this, __governance, overrides || {});
  };
  Treasury__factory.prototype.getDeployTransaction = function (
    __governance,
    overrides,
  ) {
    return _super.prototype.getDeployTransaction.call(
      this,
      __governance,
      overrides || {},
    );
  };
  Treasury__factory.prototype.attach = function (address) {
    return _super.prototype.attach.call(this, address);
  };
  Treasury__factory.prototype.connect = function (signer) {
    return _super.prototype.connect.call(this, signer);
  };
  Treasury__factory.createInterface = function () {
    return new ethers_1.utils.Interface(_abi);
  };
  Treasury__factory.connect = function (address, signerOrProvider) {
    return new ethers_1.Contract(address, _abi, signerOrProvider);
  };
  Treasury__factory.bytecode = _bytecode;
  Treasury__factory.abi = _abi;
  return Treasury__factory;
})(ethers_1.ContractFactory);
exports.Treasury__factory = Treasury__factory;
