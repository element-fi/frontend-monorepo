/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  Overrides,
  BigNumberish,
} from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Spender, SpenderInterface } from "../Spender";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "_spender",
        type: "address",
      },
      {
        internalType: "contract IERC20",
        name: "_token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_smallSpendLimit",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_mediumSpendLimit",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_highSpendLimit",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
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
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "blockExpenditure",
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
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "destination",
        type: "address",
      },
    ],
    name: "highSpend",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "highSpendLimit",
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
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "destination",
        type: "address",
      },
    ],
    name: "mediumSpend",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "mediumSpendLimit",
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
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "destination",
        type: "address",
      },
    ],
    name: "removeToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256[]",
        name: "limits",
        type: "uint256[]",
      },
    ],
    name: "setLimits",
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
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "destination",
        type: "address",
      },
    ],
    name: "smallSpend",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "smallSpendLimit",
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
    name: "token",
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
];

const _bytecode =
  "0x60a060405234801561001057600080fd5b50604051610fbd380380610fbd83398101604081905261002f9161010f565b600080546001600160a01b0319163317905561006c856001600160a01b03166000908152600160208190526040909120805460ff19169091179055565b6100758661009c565b60609390931b6001600160601b0319166080526003919091556004556005555061018f9050565b6000546001600160a01b031633146100ed5760405162461bcd60e51b815260206004820152601060248201526f29b2b73232b9103737ba1037bbb732b960811b604482015260640160405180910390fd5b600080546001600160a01b0319166001600160a01b0392909216919091179055565b60008060008060008060c08789031215610127578182fd5b865161013281610177565b602088015190965061014381610177565b604088015190955061015481610177565b80945050606087015192506080870151915060a087015190509295509295509295565b6001600160a01b038116811461018c57600080fd5b50565b60805160601c610dfb6101c26000396000818161026a0152818161060c015281816106ea0152610b380152610dfb6000f3fe608060405234801561001057600080fd5b50600436106101005760003560e01c80639c19fa8111610097578063d6343f1411610066578063d6343f141461023c578063ec36ca8c14610245578063fc0c546a14610265578063fe9fbb801461028c57610100565b80639c19fa81146101da578063b6a5d7de146101e3578063b9181611146101f6578063ce0891d51461022957610100565b806327c97fa5116100d357806327c97fa51461015c57806333fe56761461016f5780635919ffb2146101825780638da5cb5b1461019557610100565b806303e41d20146101055780630d9460a01461011a57806313af40351461012d578063157e664a14610140575b600080fd5b610118610113366004610d2e565b61029f565b005b610118610128366004610d2e565b610324565b61011861013b366004610bdf565b6103a0565b61014960035481565b6040519081526020015b60405180910390f35b61011861016a366004610bdf565b610468565b61011861017d366004610d2e565b610535565b610118610190366004610c00565b61076b565b6000546101b59073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff9091168152602001610153565b61014960045481565b6101186101f1366004610bdf565b6108c7565b610219610204366004610bdf565b60016020526000908152604090205460ff1681565b6040519015158152602001610153565b610118610237366004610d2e565b6109a1565b61014960055481565b610149610253366004610cfe565b60026020526000908152604090205481565b6101b57f000000000000000000000000000000000000000000000000000000000000000081565b61021961029a366004610bdf565b610a1d565b6102a833610a1d565b610313576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601560248201527f53656e646572206e6f7420417574686f72697a6564000000000000000000000060448201526064015b60405180910390fd5b6103208282600454610a4c565b5050565b61032d33610a1d565b610393576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601560248201527f53656e646572206e6f7420417574686f72697a65640000000000000000000000604482015260640161030a565b6103208282600354610a4c565b60005473ffffffffffffffffffffffffffffffffffffffff163314610421576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601060248201527f53656e646572206e6f74206f776e657200000000000000000000000000000000604482015260640161030a565b600080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b60005473ffffffffffffffffffffffffffffffffffffffff1633146104e9576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601060248201527f53656e646572206e6f74206f776e657200000000000000000000000000000000604482015260640161030a565b73ffffffffffffffffffffffffffffffffffffffff16600090815260016020526040902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00169055565b60005473ffffffffffffffffffffffffffffffffffffffff1633146105b6576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601060248201527f53656e646572206e6f74206f776e657200000000000000000000000000000000604482015260640161030a565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82141561069e576040517f70a082310000000000000000000000000000000000000000000000000000000081523060048201527f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16906370a082319060240160206040518083038186803b15801561066357600080fd5b505afa158015610677573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061069b9190610d16565b91505b6040517fa9059cbb00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8281166004830152602482018490527f0000000000000000000000000000000000000000000000000000000000000000169063a9059cbb90604401602060405180830381600087803b15801561072e57600080fd5b505af1158015610742573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107669190610cde565b505050565b60005473ffffffffffffffffffffffffffffffffffffffff1633146107ec576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601060248201527f53656e646572206e6f74206f776e657200000000000000000000000000000000604482015260640161030a565b80600081518110610826577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200260200101516003819055508060018151811061086e577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6020026020010151600481905550806002815181106108b6577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602002602001015160058190555050565b60005473ffffffffffffffffffffffffffffffffffffffff163314610948576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601060248201527f53656e646572206e6f74206f776e657200000000000000000000000000000000604482015260640161030a565b61099e8173ffffffffffffffffffffffffffffffffffffffff16600090815260016020819052604090912080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00169091179055565b50565b6109aa33610a1d565b610a10576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601560248201527f53656e646572206e6f7420417574686f72697a65640000000000000000000000604482015260640161030a565b6103208282600554610a4c565b73ffffffffffffffffffffffffffffffffffffffff811660009081526001602052604090205460ff165b919050565b4360009081526002602052604090205481610a678286610d59565b1115610acf576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601460248201527f5370656e64204c696d6974204578636565646564000000000000000000000000604482015260640161030a565b610ad98185610d59565b436000908152600260205260409081902091909155517fa9059cbb00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8481166004830152602482018690527f0000000000000000000000000000000000000000000000000000000000000000169063a9059cbb90604401602060405180830381600087803b158015610b7c57600080fd5b505af1158015610b90573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610bb49190610cde565b5050505050565b803573ffffffffffffffffffffffffffffffffffffffff81168114610a4757600080fd5b600060208284031215610bf0578081fd5b610bf982610bbb565b9392505050565b60006020808385031215610c12578182fd5b823567ffffffffffffffff80821115610c29578384fd5b818501915085601f830112610c3c578384fd5b813581811115610c4e57610c4e610d96565b8060051b6040517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0603f83011681018181108582111715610c9157610c91610d96565b604052828152858101935084860182860187018a1015610caf578788fd5b8795505b83861015610cd1578035855260019590950194938601938601610cb3565b5098975050505050505050565b600060208284031215610cef578081fd5b81518015158114610bf9578182fd5b600060208284031215610d0f578081fd5b5035919050565b600060208284031215610d27578081fd5b5051919050565b60008060408385031215610d40578081fd5b82359150610d5060208401610bbb565b90509250929050565b60008219821115610d91577f4e487b710000000000000000000000000000000000000000000000000000000081526011600452602481fd5b500190565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fdfea2646970667358221220abf58dc611bae112acc74f77e8d9dab68c3d637c4920f3354347f0dbc1f2e51964736f6c63430008030033";

type SpenderConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: SpenderConstructorParams,
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Spender__factory extends ContractFactory {
  constructor(...args: SpenderConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    _owner: string,
    _spender: string,
    _token: string,
    _smallSpendLimit: BigNumberish,
    _mediumSpendLimit: BigNumberish,
    _highSpendLimit: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<Spender> {
    return super.deploy(
      _owner,
      _spender,
      _token,
      _smallSpendLimit,
      _mediumSpendLimit,
      _highSpendLimit,
      overrides || {},
    ) as Promise<Spender>;
  }
  getDeployTransaction(
    _owner: string,
    _spender: string,
    _token: string,
    _smallSpendLimit: BigNumberish,
    _mediumSpendLimit: BigNumberish,
    _highSpendLimit: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): TransactionRequest {
    return super.getDeployTransaction(
      _owner,
      _spender,
      _token,
      _smallSpendLimit,
      _mediumSpendLimit,
      _highSpendLimit,
      overrides || {},
    );
  }
  attach(address: string): Spender {
    return super.attach(address) as Spender;
  }
  connect(signer: Signer): Spender__factory {
    return super.connect(signer) as Spender__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SpenderInterface {
    return new utils.Interface(_abi) as SpenderInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider,
  ): Spender {
    return new Contract(address, _abi, signerOrProvider) as Spender;
  }
}
