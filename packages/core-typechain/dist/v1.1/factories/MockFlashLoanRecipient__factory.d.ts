import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  MockFlashLoanRecipient,
  MockFlashLoanRecipientInterface,
} from "../MockFlashLoanRecipient";
declare type MockFlashLoanRecipientConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;
export declare class MockFlashLoanRecipient__factory extends ContractFactory {
  constructor(...args: MockFlashLoanRecipientConstructorParams);
  deploy(
    _vault: string,
    overrides?: Overrides & {
      from?: string | Promise<string>;
    },
  ): Promise<MockFlashLoanRecipient>;
  getDeployTransaction(
    _vault: string,
    overrides?: Overrides & {
      from?: string | Promise<string>;
    },
  ): TransactionRequest;
  attach(address: string): MockFlashLoanRecipient;
  connect(signer: Signer): MockFlashLoanRecipient__factory;
  static readonly bytecode =
    "0x60a060405234801561001057600080fd5b50604051610cfb380380610cfb8339818101604052602081101561003357600080fd5b81019080805190602001909291905050508073ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff1660601b8152505060016000806101000a81548160ff02191690831515021790555060008060016101000a81548160ff02191690831515021790555060008060026101000a81548160ff0219169083151502179055505060805160601c610c0f6100ec600039806108d152806109405250610c0f6000f3fe608060405234801561001057600080fd5b50600436106100885760003560e01c8063b77f3a231161005b578063b77f3a231461012d578063f04f27071461015d578063f966ade7146103d4578063fbfa77cf146103f457610088565b80633207ce3c1461008d57806362a82399146100ad578063a0fe97e3146100dd578063a6af1703146100fd575b600080fd5b610095610428565b60405180821515815260200191505060405180910390f35b6100db600480360360208110156100c357600080fd5b8101908080351515906020019092919050505061043b565b005b6100e5610457565b60405180821515815260200191505060405180910390f35b61012b6004803603602081101561011357600080fd5b8101908080351515906020019092919050505061046a565b005b61015b6004803603602081101561014357600080fd5b81019080803515159060200190929190505050610487565b005b6103d26004803603608081101561017357600080fd5b810190808035906020019064010000000081111561019057600080fd5b8201836020820111156101a257600080fd5b803590602001918460208302840111640100000000831117156101c457600080fd5b919080806020026020016040519081016040528093929190818152602001838360200280828437600081840152601f19601f8201169050808301925050505050505091929192908035906020019064010000000081111561022457600080fd5b82018360208201111561023657600080fd5b8035906020019184602083028401116401000000008311171561025857600080fd5b919080806020026020016040519081016040528093929190818152602001838360200280828437600081840152601f19601f820116905080830192505050505050509192919290803590602001906401000000008111156102b857600080fd5b8201836020820111156102ca57600080fd5b803590602001918460208302840111640100000000831117156102ec57600080fd5b919080806020026020016040519081016040528093929190818152602001838360200280828437600081840152601f19601f8201169050808301925050505050505091929192908035906020019064010000000081111561034c57600080fd5b82018360208201111561035e57600080fd5b8035906020019184600183028401116401000000008311171561038057600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f8201169050808301925050505050505091929192905050506104a4565b005b6103dc61092d565b60405180821515815260200191505060405180910390f35b6103fc61093e565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b600060019054906101000a900460ff1681565b806000806101000a81548160ff02191690831515021790555050565b600060029054906101000a900460ff1681565b80600060026101000a81548160ff02191690831515021790555050565b80600060016101000a81548160ff02191690831515021790555050565b60005b84518110156109265760008582815181106104be57fe5b6020026020010151905060008583815181106104d657fe5b6020026020010151905060008584815181106104ee57fe5b60200260200101519050818373ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b15801561056057600080fd5b505afa158015610574573d6000803e3d6000fd5b505050506040513d602081101561058a57600080fd5b81019080805190602001909291905050501461060e576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260198152602001807f494e56414c49445f464c4153484c4f414e5f42414c414e43450000000000000081525060200191505060405180910390fd5b600060029054906101000a900460ff16156107a4573373ffffffffffffffffffffffffffffffffffffffff16635c38449e308a8a896040518563ffffffff1660e01b8152600401808573ffffffffffffffffffffffffffffffffffffffff168152602001806020018060200180602001848103845287818151815260200191508051906020019060200280838360005b838110156106b957808201518184015260208101905061069e565b50505050905001848103835286818151815260200191508051906020019060200280838360005b838110156106fb5780820151818401526020810190506106e0565b50505050905001848103825285818151815260200191508051906020019080838360005b8381101561073a57808201518184015260208101905061071f565b50505050905090810190601f1680156107675780820380516001836020036101000a031916815260200191505b50975050505050505050600060405180830381600087803b15801561078b57600080fd5b505af115801561079f573d6000803e3d6000fd5b505050505b8273ffffffffffffffffffffffffffffffffffffffff166340c10f1930600060019054906101000a900460ff166107db57836107f0565b6107ef60018561096290919063ffffffff16565b5b6040518363ffffffff1660e01b8152600401808373ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050600060405180830381600087803b15801561084357600080fd5b505af1158015610857573d6000803e3d6000fd5b505050506000610870828461096290919063ffffffff16565b905060008054906101000a900460ff1661089f5761089860018261098290919063ffffffff16565b90506108cc565b600060019054906101000a900460ff16156108cb576108c860018261096290919063ffffffff16565b90505b5b6109177f0000000000000000000000000000000000000000000000000000000000000000828673ffffffffffffffffffffffffffffffffffffffff166109a39092919063ffffffff16565b505050508060010190506104a7565b5050505050565b60008054906101000a900460ff1681565b7f000000000000000000000000000000000000000000000000000000000000000081565b6000808284019050610978848210156000610a45565b8091505092915050565b6000610992838311156001610a45565b600082840390508091505092915050565b610a408363a9059cbb60e01b8484604051602401808373ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050610a58565b505050565b81610a5457610a5381610b69565b5b5050565b600060608373ffffffffffffffffffffffffffffffffffffffff16836040518082805190602001908083835b60208310610aa75780518252602082019150602081019050602083039250610a84565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d8060008114610b09576040519150601f19603f3d011682016040523d82523d6000602084013e610b0e565b606091505b50915091506000821415610b26573d6000803e3d6000fd5b610b63600082511480610b5b5750818060200190516020811015610b4957600080fd5b81019080805190602001909291905050505b6101a2610a45565b50505050565b6030600a820601600a820491506030600a830601600a830492506030600a8406018060101b8260081b8401016642414c230000000160c81b7f08c379a000000000000000000000000000000000000000000000000000000000600052602060045260076024528060445260646000fdfea2646970667358221220099118577e9580807c7dafc8140062d5eb192aaa164d5b34bbeaeaac0aa5c1a864736f6c63430007010033";
  static readonly abi: (
    | {
        inputs: {
          internalType: string;
          name: string;
          type: string;
        }[];
        stateMutability: string;
        type: string;
        name?: undefined;
        outputs?: undefined;
      }
    | {
        inputs: {
          internalType: string;
          name: string;
          type: string;
        }[];
        name: string;
        outputs: never[];
        stateMutability: string;
        type: string;
      }
    | {
        inputs: never[];
        name: string;
        outputs: {
          internalType: string;
          name: string;
          type: string;
        }[];
        stateMutability: string;
        type: string;
      }
  )[];
  static createInterface(): MockFlashLoanRecipientInterface;
  static connect(
    address: string,
    signerOrProvider: Signer | Provider,
  ): MockFlashLoanRecipient;
}
export {};
