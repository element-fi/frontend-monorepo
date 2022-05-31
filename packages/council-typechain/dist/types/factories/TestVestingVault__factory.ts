/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  Signer,
  utils,
  BigNumberish,
  Contract,
  ContractFactory,
  Overrides,
} from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  TestVestingVault,
  TestVestingVaultInterface,
} from "../TestVestingVault";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "_token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_stale",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: false,
        internalType: "int256",
        name: "amount",
        type: "int256",
      },
    ],
    name: "VoteChange",
    type: "event",
  },
  {
    inputs: [],
    name: "acceptGrant",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_who",
        type: "address",
      },
      {
        internalType: "uint128",
        name: "_amount",
        type: "uint128",
      },
      {
        internalType: "uint128",
        name: "_startTime",
        type: "uint128",
      },
      {
        internalType: "uint128",
        name: "_expiration",
        type: "uint128",
      },
      {
        internalType: "uint128",
        name: "_cliff",
        type: "uint128",
      },
      {
        internalType: "address",
        name: "_delegatee",
        type: "address",
      },
    ],
    name: "addGrantAndDelegate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_multiplier",
        type: "uint256",
      },
    ],
    name: "changeUnvestedMultiplier",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "claim",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
    ],
    name: "delegate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "deposit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_who",
        type: "address",
      },
    ],
    name: "getGrant",
    outputs: [
      {
        components: [
          {
            internalType: "uint128",
            name: "allocation",
            type: "uint128",
          },
          {
            internalType: "uint128",
            name: "withdrawn",
            type: "uint128",
          },
          {
            internalType: "uint128",
            name: "created",
            type: "uint128",
          },
          {
            internalType: "uint128",
            name: "expiration",
            type: "uint128",
          },
          {
            internalType: "uint128",
            name: "cliff",
            type: "uint128",
          },
          {
            internalType: "uint128",
            name: "latestVotingPower",
            type: "uint128",
          },
          {
            internalType: "address",
            name: "delegatee",
            type: "address",
          },
          {
            internalType: "uint256[2]",
            name: "range",
            type: "uint256[2]",
          },
        ],
        internalType: "struct VestingVaultStorage.Grant",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "manager_",
        type: "address",
      },
      {
        internalType: "address",
        name: "timelock_",
        type: "address",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "manager",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "blockNumber",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "queryVotePower",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "blockNumber",
        type: "uint256",
      },
    ],
    name: "queryVotePowerView",
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
        name: "_who",
        type: "address",
      },
    ],
    name: "removeGrant",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "manager_",
        type: "address",
      },
    ],
    name: "setManager",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "timelock_",
        type: "address",
      },
    ],
    name: "setTimelock",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "staleBlockLag",
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
    name: "timelock",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "pure",
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
  {
    inputs: [],
    name: "unassigned",
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
    name: "unvestedMultiplier",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_who",
        type: "address",
      },
    ],
    name: "updateVotingPower",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
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
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60c06040523480156200001157600080fd5b5060405162002ea238038062002ea2833981016040819052620000349162000050565b60609190911b6001600160601b03191660805260a0526200008a565b6000806040838503121562000063578182fd5b82516001600160a01b03811681146200007a578283fd5b6020939093015192949293505050565b60805160601c60a051612dbe620000e4600039600081816102a00152611bdc015260008181610308015281816104470152818161074001528181610a5f01528181610b1f01528181610f5601526118ea0152612dbe6000f3fe608060405234801561001057600080fd5b50600436106101765760003560e01c8063747c1255116100d8578063c2c94b881161008c578063e7d2028311610066578063e7d20283146102dd578063e91f3235146102f0578063fc0c546a1461030357610176565b8063c2c94b881461029b578063d0ebdbe7146102c2578063d33219b4146102d557610176565b8063bdacb303116100bd578063bdacb30314610260578063bf31dbf414610273578063c1006f4f1461029357610176565b8063747c12551461023a578063b6b55f251461024d57610176565b8063485cc9551161012f5780635c19a95c116101145780635c19a95c146101fe5780635f389a9d1461021157806373afce6e1461022457610176565b8063485cc955146101e35780634e71d92d146101f657610176565b8063267406cb11610160578063267406cb146101a35780633e0bdaf7146101b6578063481c6a75146101be57610176565b8062f714ce1461017b5780632168034d14610190575b600080fd5b61018e6101893660046129e2565b61032a565b005b61018e61019e3660046129ca565b6104c9565b61018e6101b1366004612840565b6105c3565b61018e610987565b6101c6610c34565b6040516001600160a01b0390911681526020015b60405180910390f35b61018e6101f136600461285a565b610c44565b61018e610e4a565b61018e61020c366004612840565b61109e565b61018e61021f36600461288c565b61139b565b61022c6117eb565b6040519081526020016101da565b61018e610248366004612840565b6117fb565b61018e61025b3660046129ca565b61182a565b61018e61026e366004612840565b61196e565b610286610281366004612840565b611a0f565b6040516101da9190612a6c565b61022c611aee565b61022c7f000000000000000000000000000000000000000000000000000000000000000081565b61018e6102d0366004612840565b611af8565b6101c6611b99565b61022c6102eb3660046128ff565b611ba3565b61022c6102fe366004612928565b611bc5565b6101c67f000000000000000000000000000000000000000000000000000000000000000081565b610332611c14565b516001600160a01b0316331461038f5760405162461bcd60e51b815260206004820152600860248201527f216d616e6167657200000000000000000000000000000000000000000000000060448201526064015b60405180910390fd5b6000610399611c7e565b905082816000015410156103ef5760405162461bcd60e51b815260206004820152601460248201527f496e73756666696369656e742062616c616e63650000000000000000000000006044820152606401610386565b828160000160008282546104039190612d13565b90915550506040517fa9059cbb0000000000000000000000000000000000000000000000000000000081526001600160a01b038381166004830152602482018590527f0000000000000000000000000000000000000000000000000000000000000000169063a9059cbb90604401602060405180830381600087803b15801561048b57600080fd5b505af115801561049f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104c391906129aa565b50505050565b6104d1611cc3565b516001600160a01b031633146105295760405162461bcd60e51b815260206004820152600960248201527f2174696d656c6f636b00000000000000000000000000000000000000000000006044820152606401610386565b606481111561057a5760405162461bcd60e51b815260206004820152600a60248201527f41626f76652031303025000000000000000000000000000000000000000000006044820152606401610386565b6105c06105bb6040518060400160405280601281526020017f756e7665737465644d756c7469706c6965720000000000000000000000000000815250611d10565b829055565b50565b6105cb611c14565b516001600160a01b031633146106235760405162461bcd60e51b815260206004820152600860248201527f216d616e616765720000000000000000000000000000000000000000000000006044820152606401610386565b600061062d611d89565b6001600160a01b0383811660009081526020928352604080822081516101008101835281546001600160801b038082168352700100000000000000000000000000000000918290048116978301979097526001830154808816838601528190048716606083015260028084015480891660808501529190910490961660a0820152600382015490941660c085015281518083019283905290955091936106fe9392869260e0850192600485019182845b8154815260200190600101908083116106dd57505050505081525050611dc9565b6040517fa9059cbb0000000000000000000000000000000000000000000000000000000081526001600160a01b038581166004830152602482018390529192507f00000000000000000000000000000000000000000000000000000000000000009091169063a9059cbb90604401602060405180830381600087803b15801561078657600080fd5b505af115801561079a573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107be91906129aa565b5060006107c9611c7e565b83549091506000906107f990849070010000000000000000000000000000000090046001600160801b0316612b1f565b845461080e91906001600160801b0316612d13565b9050808260000160008282546108249190612b1f565b9091555060009050610834611ead565b60038601549091506000906108539083906001600160a01b0316611f00565b6003870154600288015491925061089f916001600160a01b03909116906108979070010000000000000000000000000000000090046001600160801b031684612d13565b849190611f8b565b600386015460028701546001600160a01b038981169216907f33161cf2da28d747be9df136b6f3729390298494947268743193c53d73d3c2e0906109029070010000000000000000000000000000000090046001600160801b0316600019612b71565b60405190815260200160405180910390a361091b611d89565b6001600160a01b0397909716600090815260209790975250506040852085815560018101869055600281018690556003810180547fffffffffffffffffffffffff0000000000000000000000000000000000000000169055600481018690556005019490945550505050565b6000610991611d89565b3360009081526020919091526040812080549092506109cf906001600160801b03700100000000000000000000000000000000820481169116612ceb565b6001600160801b0316905060008111610a2a5760405162461bcd60e51b815260206004820152601260248201527f6e6f206772616e7420617661696c61626c6500000000000000000000000000006044820152606401610386565b6040517fa9059cbb000000000000000000000000000000000000000000000000000000008152336004820152602481018290527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169063a9059cbb90604401602060405180830381600087803b158015610aab57600080fd5b505af1158015610abf573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ae391906129aa565b506040517f23b872dd000000000000000000000000000000000000000000000000000000008152336004820152306024820152604481018290527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906323b872dd90606401602060405180830381600087803b158015610b6b57600080fd5b505af1158015610b7f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ba391906129aa565b506000610bae61209a565b516040805180820190915281815290915060208101610bcd8484612b1f565b9052610bdf9060048501906002612756565b50610c2f610c216040518060400160405280600581526020017f626f756e64000000000000000000000000000000000000000000000000000000815250611d10565b610c2b8484612b1f565b9055565b505050565b6000610c3e611c14565b51905090565b610c826040518060400160405280600b81526020017f696e697469616c697a6564000000000000000000000000000000000000000000815250611d10565b5415610cd05760405162461bcd60e51b815260206004820152600b60248201527f696e697469616c697a65640000000000000000000000000000000000000000006044820152606401610386565b610d17610d116040518060400160405280600b81526020017f696e697469616c697a6564000000000000000000000000000000000000000000815250611d10565b60019055565b610d8b610d586040518060400160405280600781526020017f6d616e61676572000000000000000000000000000000000000000000000000008152506120fb565b80547fffffffffffffffffffffffff0000000000000000000000000000000000000000166001600160a01b038516179055565b610dff610dcc6040518060400160405280600881526020017f74696d656c6f636b0000000000000000000000000000000000000000000000008152506120fb565b80547fffffffffffffffffffffffff0000000000000000000000000000000000000000166001600160a01b038416179055565b610e46610e406040518060400160405280601281526020017f756e7665737465644d756c7469706c6965720000000000000000000000000000815250611d10565b60649055565b5050565b6000610e54611d89565b3360009081526020918252604080822081516101008101835281546001600160801b03808216835270010000000000000000000000000000000091829004811683880152600184015480821684870152829004811660608401526002808501548083166080860152929092041660a083015260038301546001600160a01b031660c083015283518085019485905260048401805482529397509495610f1e959294889460e0870194939092909190600587019085018083116106dd57505050505081525050611dc9565b6040517fa9059cbb000000000000000000000000000000000000000000000000000000008152336004820152602481018290529091507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169063a9059cbb90604401602060405180830381600087803b158015610fa257600080fd5b505af1158015610fb6573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610fda91906129aa565b5081548190839060109061100c90849070010000000000000000000000000000000090046001600160801b0316612af4565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555060008260040160016002811061106f577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b01541115611094578060048301600101600082825461108e9190612d13565b90915550505b610e463383612136565b60006110a8611d89565b3360009081526020919091526040902060038101549091506001600160a01b038381169116141561111b5760405162461bcd60e51b815260206004820152601160248201527f416c72656164792064656c6567617465640000000000000000000000000000006044820152606401610386565b6000611125611ead565b60038301549091506000906111449083906001600160a01b0316611f00565b604080516101008101825285546001600160801b0380821683527001000000000000000000000000000000009182900481166020840152600188015480821684860152829004811660608401526002808901548083166080860152929092041660a083015260038701546001600160a01b031660c083015282518084019384905293945060009361120193889260e08501929160048501919082845b8154815260200190600101908083116111e05750505050508152505061232d565b6003850154600286015491925061124d916001600160a01b03909116906112459070010000000000000000000000000000000090046001600160801b031685612d13565b859190611f8b565b6003840154600285015433916001600160a01b0316907f33161cf2da28d747be9df136b6f3729390298494947268743193c53d73d3c2e0906112ae9070010000000000000000000000000000000090046001600160801b0316600019612b71565b60405190815260200160405180910390a360006112cb8487611f00565b9050336001600160a01b0316866001600160a01b03167f33161cf2da28d747be9df136b6f3729390298494947268743193c53d73d3c2e08460405161131291815260200190565b60405180910390a3611330866113288484612b1f565b869190611f8b565b506002840180546001600160801b03928316700100000000000000000000000000000000029216919091179055505060030180546001600160a01b039092167fffffffffffffffffffffffff0000000000000000000000000000000000000000909216919091179055565b6113a3611c14565b516001600160a01b031633146113fb5760405162461bcd60e51b815260206004820152600860248201527f216d616e616765720000000000000000000000000000000000000000000000006044820152606401610386565b826001600160801b0316826001600160801b03161115801561142f5750826001600160801b0316846001600160801b031611155b61147b5760405162461bcd60e51b815260206004820152601560248201527f496e76616c696420636f6e66696775726174696f6e00000000000000000000006044820152606401610386565b6001600160801b03841661148d574393505b6000611497611c7e565b905060006114a361239e565b9050866001600160801b0316826000015410156115025760405162461bcd60e51b815260206004820152601460248201527f496e73756666696369656e742062616c616e63650000000000000000000000006044820152606401610386565b600061150c611d89565b6001600160a01b038a1660009081526020919091526040902080549091506001600160801b0316156115805760405162461bcd60e51b815260206004820152600960248201527f486173204772616e7400000000000000000000000000000000000000000000006044820152606401610386565b6001600160a01b038416156115955783611597565b885b93506000606483600001518a6115ad9190612c29565b6115b79190612b37565b90506040518061010001604052808a6001600160801b0316815260200160006001600160801b03168152602001896001600160801b03168152602001886001600160801b03168152602001876001600160801b03168152602001826001600160801b03168152602001866001600160a01b031681526020016040518060400160405280600081526020016000815250815250611651611d89565b6001600160a01b038c8116600090815260209283526040908190208451938501516001600160801b0394851670010000000000000000000000000000000091861682021782559185015160608601519085169085168302176001820155608085015160a086015190851694169091029290921760028084019190915560c08401516003840180547fffffffffffffffffffffffff000000000000000000000000000000000000000016919093161790915560e083015161171691600484019190612756565b50905050886001600160801b03168460000160008282546117379190612d13565b9091555060009050611747611ead565b60038401549091506000906117669083906001600160a01b0316611f00565b600385015490915061178e906001600160a01b03166108976001600160801b03861684612b1f565b60038401546040516001600160801b03851681526001600160a01b038e81169216907f33161cf2da28d747be9df136b6f3729390298494947268743193c53d73d3c2e09060200160405180910390a3505050505050505050505050565b60006117f5611c7e565b54905090565b6000611805611d89565b6001600160a01b0383166000908152602091909152604090209050610e468282612136565b611832611c14565b516001600160a01b0316331461188a5760405162461bcd60e51b815260206004820152600860248201527f216d616e616765720000000000000000000000000000000000000000000000006044820152606401610386565b6000611894611c7e565b9050818160000160008282546118aa9190612b1f565b90915550506040517f23b872dd000000000000000000000000000000000000000000000000000000008152336004820152306024820152604481018390527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906323b872dd90606401602060405180830381600087803b15801561193657600080fd5b505af115801561194a573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c2f91906129aa565b611976611cc3565b516001600160a01b031633146119ce5760405162461bcd60e51b815260206004820152600960248201527f2174696d656c6f636b00000000000000000000000000000000000000000000006044820152606401610386565b6105c0610dcc6040518060400160405280600881526020017f74696d656c6f636b0000000000000000000000000000000000000000000000008152506120fb565b611a17612794565b611a1f611d89565b6001600160a01b038381166000908152602092835260409081902081516101008101835281546001600160801b038082168352700100000000000000000000000000000000918290048116968301969096526001830154808716838601528190048616606083015260028084015480881660808501529190910490951660a0820152600382015490931660c08401528151808301928390529293909260e08501929091600485019182845b815481526020019060010190808311611aca5750505050508152505090505b919050565b6000610c3e61239e565b611b00611cc3565b516001600160a01b03163314611b585760405162461bcd60e51b815260206004820152600960248201527f2174696d656c6f636b00000000000000000000000000000000000000000000006044820152606401610386565b6105c0610dcc6040518060400160405280600781526020017f6d616e61676572000000000000000000000000000000000000000000000000008152506120fb565b6000610c3e611cc3565b600080611bae611ead565b9050611bbb8185856123eb565b9150505b92915050565b600080611bd0611ead565b9050611c0a8686611c017f000000000000000000000000000000000000000000000000000000000000000043612d13565b84929190612444565b9695505050505050565b604080516020810190915260008152611c616040518060400160405280600781526020017f6d616e61676572000000000000000000000000000000000000000000000000008152506120fb565b604080516020810190915290546001600160a01b03168152905090565b6000611cbe6040518060400160405280600a81526020017f756e61737369676e656400000000000000000000000000000000000000000000815250611d10565b905090565b604080516020810190915260008152611c616040518060400160405280600881526020017f74696d656c6f636b0000000000000000000000000000000000000000000000008152506120fb565b6000807fec13d6d12b88433319b64e1065a96ea19cd330ef6603f5f6fb685dde3959a320905060008184604051602001611d4b929190612a27565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190528051602090910120949350505050565b6000611cbe6040518060400160405280600681526020017f6772616e747300000000000000000000000000000000000000000000000000008152506124b2565b600081608001516001600160801b0316431080611df2575081604001516001600160801b031643105b15611dff57506000611ae9565b81606001516001600160801b03164310611e345760208201518251611e249190612ceb565b6001600160801b03169050611ae9565b600082604001518360600151611e4a9190612ceb565b6001600160801b031683604001516001600160801b031643611e6c9190612d13565b8451611e8191906001600160801b0316612c58565b611e8b9190612b5d565b905082602001516001600160801b031681611ea69190612d13565b9392505050565b604080518082019091526060815260006020820152611cbe6040518060400160405280600b81526020017f766f74696e67506f7765720000000000000000000000000000000000000000008152506124ed565b600080611f0e846020015190565b6001600160a01b03841660009081526020919091526040902080549091506001600160801b031680611f4557600092505050611bbf565b6000611f8083611f56600185612d13565b016001015460c081901c9177ffffffffffffffffffffffffffffffffffffffffffffffff90911690565b979650505050505050565b77ffffffffffffffffffffffffffffffffffffffffffffffff811115611ff35760405162461bcd60e51b815260206004820152600360248201527f4f6f4200000000000000000000000000000000000000000000000000000000006044820152606401610386565b6000612000846020015190565b6001600160a01b03841660009081526020829052604081208054929350914360c01b9185831791608081901c916001600160801b039091169081156120525761204e86611f56600185612d13565b5090505b814382141561206957612066600184612d13565b90505b848160018901015543821461208d5761208d8785612088866001612b1f565b612526565b5050505050505050505050565b6040805160208101909152600081526120e76040518060400160405280600581526020017f626f756e64000000000000000000000000000000000000000000000000000000815250611d10565b604080516020810190915290548152905090565b6000807f421683f821a0574472445355be6d2b769119e8515f8376a1d7878523dfdecf7b905060008184604051602001611d4b929190612a27565b6000612140611ead565b600383015490915060009061215f9083906001600160a01b0316611f00565b604080516101008101825285546001600160801b0380821683527001000000000000000000000000000000009182900481166020840152600188015480821684860152829004811660608401526002808901548083166080860152929092041660a083015260038701546001600160a01b031660c0830152825180840190935292935060009261222092879160e08401919060048401908282826020028201918154815260200190600101908083116111e05750505050508152505061232d565b60028501549091506000906122529070010000000000000000000000000000000090046001600160801b031683612c77565b9050806122625750505050610e46565b600081131561228c576003850154612287906001600160a01b03166113288386612b1f565b6122b4565b60038501546122b4906001600160a01b03166122aa83600019612b71565b6113289086612d13565b60038501546040518281526001600160a01b038881169216907f33161cf2da28d747be9df136b6f3729390298494947268743193c53d73d3c2e09060200160405180910390a3506002840180546001600160801b0392831670010000000000000000000000000000000002921691909117905550505050565b60008061233983611dc9565b9050600083602001516001600160801b0316826123569190612b1f565b845161236b91906001600160801b0316612d13565b9050606461237761239e565b516123829083612c58565b61238c9190612b5d565b6123969083612b1f565b949350505050565b6040805160208101909152600081526120e76040518060400160405280601281526020017f756e7665737465644d756c7469706c6965720000000000000000000000000000815250611d10565b6000806123f9856020015190565b6001600160a01b0385166000908152602082905260408120805492935091608081901c916001600160801b03909116906124368488838686612546565b9a9950505050505050505050565b600080612452866020015190565b6001600160a01b0386166000908152602082905260408120805492935091608081901c916001600160801b039091169080612490858a8a8787612546565b9150915083821115612436576124a78483876126eb565b612436858385612526565b6000807fe09ca27c98c7039e0ebb504afcf592a1c02936970c7b5952890c3a3eea53d63c905060008184604051602001611d4b929190612a27565b604080518082019091526060815260006020820152600061250d8361271b565b6040805180820190915293845260208401525090919050565b80821061253257600080fd5b6001600160801b031660809190911b179055565b600080826125965760405162461bcd60e51b815260206004820152600d60248201527f756e696e697469616c697a6564000000000000000000000000000000000000006044820152606401610386565b858511156125a357600080fd5b8284106125af57600080fd5b60006125bc600185612d13565b90508460005b82821461266057600060026125d78585612b1f565b6125e2906001612b1f565b6125ec9190612b5d565b6001818d01015490915060c081901c9077ffffffffffffffffffffffffffffffffffffffffffffffff168b82141561262e579296509194506126e19350505050565b8b82101561264a578a821015612642578293505b829450612658565b612655600184612d13565b95505b5050506125c2565b60018a8301015460c081901c9077ffffffffffffffffffffffffffffffffffffffffffffffff168a8211156126d75760405162461bcd60e51b815260206004820152600e60248201527f536561726368204661696c7572650000000000000000000000000000000000006044820152606401610386565b9195509093505050505b9550959350505050565b818311156126f857600080fd5b60018101835b83811015612714576000828201556001016126fe565b5050505050565b6000807f7b1a68ec3e3284b167e69db1c622dcfa612281976b71d7e2d239dbe16a75891a905060008184604051602001611d4b929190612a27565b8260028101928215612784579160200282015b82811115612784578251825591602001919060010190612769565b506127909291506127df565b5090565b6040805161010081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c081019190915260e081016127da6127f4565b905290565b5b8082111561279057600081556001016127e0565b60405180604001604052806002906020820280368337509192915050565b80356001600160a01b0381168114611ae957600080fd5b80356001600160801b0381168114611ae957600080fd5b600060208284031215612851578081fd5b611ea682612812565b6000806040838503121561286c578081fd5b61287583612812565b915061288360208401612812565b90509250929050565b60008060008060008060c087890312156128a4578182fd5b6128ad87612812565b95506128bb60208801612829565b94506128c960408801612829565b93506128d760608801612829565b92506128e560808801612829565b91506128f360a08801612812565b90509295509295509295565b60008060408385031215612911578182fd5b61291a83612812565b946020939093013593505050565b6000806000806060858703121561293d578384fd5b61294685612812565b935060208501359250604085013567ffffffffffffffff80821115612969578384fd5b818701915087601f83011261297c578384fd5b81358181111561298a578485fd5b88602082850101111561299b578485fd5b95989497505060200194505050565b6000602082840312156129bb578081fd5b81518015158114611ea6578182fd5b6000602082840312156129db578081fd5b5035919050565b600080604083850312156129f4578182fd5b8235915061288360208401612812565b8060005b60028110156104c3578151845260209384019390910190600101612a08565b60008382528251815b81811015612a4c57602081860181015185830182015201612a30565b81811115612a5d5782602083860101525b50919091016020019392505050565b6000610120820190506001600160801b038084511683528060208501511660208401528060408501511660408401528060608501511660608401528060808501511660808401528060a08501511660a08401525060c0830151612ada60c08401826001600160a01b03169052565b5060e0830151612aed60e0840182612a04565b5092915050565b60006001600160801b03808316818516808303821115612b1657612b16612d2a565b01949350505050565b60008219821115612b3257612b32612d2a565b500190565b60006001600160801b0380841680612b5157612b51612d59565b92169190910492915050565b600082612b6c57612b6c612d59565b500490565b60007f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff81841382841385830485118282161615612bb057612bb0612d2a565b7f800000000000000000000000000000000000000000000000000000000000000084871286820588128184161615612bea57612bea612d2a565b858712925087820587128484161615612c0557612c05612d2a565b87850587128184161615612c1b57612c1b612d2a565b505050929093029392505050565b60006001600160801b0380831681851681830481118215151615612c4f57612c4f612d2a565b02949350505050565b6000816000190483118215151615612c7257612c72612d2a565b500290565b6000808312837f800000000000000000000000000000000000000000000000000000000000000001831281151615612cb157612cb1612d2a565b837f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff018313811615612ce557612ce5612d2a565b50500390565b60006001600160801b0383811690831681811015612d0b57612d0b612d2a565b039392505050565b600082821015612d2557612d25612d2a565b500390565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fdfea2646970667358221220d295be562a0b38e0eff9aef2729bc35a0390b5b0a803b714ec6e5a03891d83e064736f6c63430008030033";

export class TestVestingVault__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _token: string,
    _stale: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<TestVestingVault> {
    return super.deploy(
      _token,
      _stale,
      overrides || {},
    ) as Promise<TestVestingVault>;
  }
  getDeployTransaction(
    _token: string,
    _stale: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): TransactionRequest {
    return super.getDeployTransaction(_token, _stale, overrides || {});
  }
  attach(address: string): TestVestingVault {
    return super.attach(address) as TestVestingVault;
  }
  connect(signer: Signer): TestVestingVault__factory {
    return super.connect(signer) as TestVestingVault__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TestVestingVaultInterface {
    return new utils.Interface(_abi) as TestVestingVaultInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider,
  ): TestVestingVault {
    return new Contract(address, _abi, signerOrProvider) as TestVestingVault;
  }
}
