import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { CTokenStorage, CTokenStorageInterface } from "../CTokenStorage";
declare type CTokenStorageConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;
export declare class CTokenStorage__factory extends ContractFactory {
  constructor(...args: CTokenStorageConstructorParams);
  deploy(
    overrides?: Overrides & {
      from?: string | Promise<string>;
    },
  ): Promise<CTokenStorage>;
  getDeployTransaction(
    overrides?: Overrides & {
      from?: string | Promise<string>;
    },
  ): TransactionRequest;
  attach(address: string): CTokenStorage;
  connect(signer: Signer): CTokenStorage__factory;
  static readonly bytecode =
    "0x608060405234801561001057600080fd5b50610691806100206000396000f3fe608060405234801561001057600080fd5b50600436106100cf5760003560e01c80635fe3b5671161008c5780638f840ddd116100665780638f840ddd146101e257806395d89b4114610200578063aa5af0fd1461021e578063f851a4401461023c576100cf565b80635fe3b567146101885780636752e702146101a65780636c540baf146101c4576100cf565b806306fdde03146100d4578063173b9904146100f257806318160ddd14610110578063267822471461012e578063313ce5671461014c57806347bd37181461016a575b600080fd5b6100dc61025a565b6040516100e991906104d5565b60405180910390f35b6100fa6102e8565b60405161010791906104f7565b60405180910390f35b6101186102ee565b60405161012591906104f7565b60405180910390f35b6101366102f4565b604051610143919061049f565b60405180910390f35b61015461031a565b6040516101619190610512565b60405180910390f35b61017261032d565b60405161017f91906104f7565b60405180910390f35b610190610333565b60405161019d91906104ba565b60405180910390f35b6101ae610359565b6040516101bb91906104f7565b60405180910390f35b6101cc610364565b6040516101d991906104f7565b60405180910390f35b6101ea61036a565b6040516101f791906104f7565b60405180910390f35b610208610370565b60405161021591906104d5565b60405180910390f35b6102266103fe565b60405161023391906104f7565b60405180910390f35b610244610404565b604051610251919061049f565b60405180910390f35b60018054610267906105e9565b80601f0160208091040260200160405190810160405280929190818152602001828054610293906105e9565b80156102e05780601f106102b5576101008083540402835291602001916102e0565b820191906000526020600020905b8154815290600101906020018083116102c357829003601f168201915b505050505081565b60075481565b600c5481565b600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600360009054906101000a900460ff1681565b600a5481565b600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b666379da05b6000081565b60085481565b600b5481565b6002805461037d906105e9565b80601f01602080910402602001604051908101604052809291908181526020018280546103a9906105e9565b80156103f65780601f106103cb576101008083540402835291602001916103f6565b820191906000526020600020905b8154815290600101906020018083116103d957829003601f168201915b505050505081565b60095481565b600360019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b61043381610549565b82525050565b61044281610592565b82525050565b60006104538261052d565b61045d8185610538565b935061046d8185602086016105b6565b6104768161064a565b840191505092915050565b61048a8161057b565b82525050565b61049981610585565b82525050565b60006020820190506104b4600083018461042a565b92915050565b60006020820190506104cf6000830184610439565b92915050565b600060208201905081810360008301526104ef8184610448565b905092915050565b600060208201905061050c6000830184610481565b92915050565b60006020820190506105276000830184610490565b92915050565b600081519050919050565b600082825260208201905092915050565b60006105548261055b565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600060ff82169050919050565b600061059d826105a4565b9050919050565b60006105af8261055b565b9050919050565b60005b838110156105d45780820151818401526020810190506105b9565b838111156105e3576000848401525b50505050565b6000600282049050600182168061060157607f821691505b602082108114156106155761061461061b565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000601f19601f830116905091905056fea26469706673582212202a073e42581e231461b211720bdc249ace365724d2f2e9508200512c28b947b464736f6c63430008000033";
  static readonly abi: {
    inputs: never[];
    name: string;
    outputs: {
      internalType: string;
      name: string;
      type: string;
    }[];
    stateMutability: string;
    type: string;
  }[];
  static createInterface(): CTokenStorageInterface;
  static connect(
    address: string,
    signerOrProvider: Signer | Provider,
  ): CTokenStorage;
}
export {};
