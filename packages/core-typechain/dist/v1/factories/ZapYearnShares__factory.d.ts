import { Signer, ContractFactory, Overrides, BytesLike } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  ZapYearnShares,
  ZapYearnSharesInterface,
} from "../ZapYearnShares";
declare type ZapYearnSharesConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;
export declare class ZapYearnShares__factory extends ContractFactory {
  constructor(...args: ZapYearnSharesConstructorParams);
  deploy(
    __trancheFactory: string,
    __trancheBytecodeHash: BytesLike,
    overrides?: Overrides & {
      from?: string | Promise<string>;
    },
  ): Promise<ZapYearnShares>;
  getDeployTransaction(
    __trancheFactory: string,
    __trancheBytecodeHash: BytesLike,
    overrides?: Overrides & {
      from?: string | Promise<string>;
    },
  ): TransactionRequest;
  attach(address: string): ZapYearnShares;
  connect(signer: Signer): ZapYearnShares__factory;
  static readonly bytecode =
    "0x60c06040526000600260006101000a81548160ff0219169083151502179055503480156200002c57600080fd5b506040516200140338038062001403833981810160405281019062000052919062000172565b336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550620000a333620000ea60201b60201c565b8173ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff1660601b815250508060a08181525050505062000225565b60018060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff02191690831515021790555050565b6000815190506200015581620001f1565b92915050565b6000815190506200016c816200020b565b92915050565b600080604083850312156200018657600080fd5b6000620001968582860162000144565b9250506020620001a9858286016200015b565b9150509250929050565b6000620001c082620001d1565b9050919050565b6000819050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b620001fc81620001b3565b81146200020857600080fd5b50565b6200021681620001c7565b81146200022257600080fd5b50565b60805160601c60a0516111b56200024e600039600061098b0152600061096901526111b56000f3fe608060405234801561001057600080fd5b506004361061009e5760003560e01c806364eda74b1161006657806364eda74b146101345780638da5cb5b14610150578063b6a5d7de1461016e578063b91816111461018a578063fe9fbb80146101ba5761009e565b80630fcc0c28146100a357806313af4035146100ad57806327c97fa5146100c957806333eeb147146100e55780634939238614610103575b600080fd5b6100ab6101ea565b005b6100c760048036038101906100c29190610ad0565b610291565b005b6100e360048036038101906100de9190610ad0565b610362565b005b6100ed61044b565b6040516100fa9190610edd565b60405180910390f35b61011d60048036038101906101189190610b4b565b61045e565b60405161012b929190610fcf565b60405180910390f35b61014e60048036038101906101499190610af9565b610799565b005b6101586107fe565b6040516101659190610e8b565b60405180910390f35b61018860048036038101906101839190610ad0565b610822565b005b6101a4600480360381019061019f9190610ad0565b6108bc565b6040516101b19190610edd565b60405180910390f35b6101d460048036038101906101cf9190610ad0565b6108dc565b6040516101e19190610edd565b60405180910390f35b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610278576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161026f90610ef8565b60405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff16ff5b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461031f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161031690610ef8565b60405180910390fd5b806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146103f0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103e790610ef8565b60405180910390fd5b6000600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff02191690831515021790555050565b600260009054906101000a900460ff1681565b600080600260009054906101000a900460ff16156104b1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104a890610f58565b60405180910390fd5b8673ffffffffffffffffffffffffffffffffffffffff166323b872dd3330896040518463ffffffff1660e01b81526004016104ee93929190610ea6565b602060405180830381600087803b15801561050857600080fd5b505af115801561051c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105409190610b22565b508673ffffffffffffffffffffffffffffffffffffffff1663e63697c8878660006040518463ffffffff1660e01b815260040161057f93929190610f98565b602060405180830381600087803b15801561059957600080fd5b505af11580156105ad573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105d19190610bd4565b5060006105de8587610932565b905060008973ffffffffffffffffffffffffffffffffffffffff166370a08231876040518263ffffffff1660e01b815260040161061b9190610e8b565b60206040518083038186803b15801561063357600080fd5b505afa158015610647573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061066b9190610bd4565b90506000808373ffffffffffffffffffffffffffffffffffffffff166385f45c88336040518263ffffffff1660e01b81526004016106a99190610e8b565b6040805180830381600087803b1580156106c257600080fd5b505af11580156106d6573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106fa9190610bfd565b9150915082811015610741576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161073890610f78565b60405180910390fd5b86821015610784576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161077b90610f38565b60405180910390fd5b81819550955050505050965096945050505050565b6107a2336108dc565b6107e1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107d890610f18565b60405180910390fd5b80600260006101000a81548160ff02191690831515021790555050565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146108b0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108a790610ef8565b60405180910390fd5b6108b9816109e3565b50565b60016020528060005260406000206000915054906101000a900460ff1681565b6000600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff169050919050565b6000808383604051602001610948929190610e11565b604051602081830303815290604052805190602001209050600060ff60f81b7f0000000000000000000000000000000000000000000000000000000000000000837f00000000000000000000000000000000000000000000000000000000000000006040516020016109bd9493929190610e3d565b6040516020818303038152906040528051906020012090508060001c9250505092915050565b60018060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff02191690831515021790555050565b600081359050610a4c8161110c565b92915050565b600081359050610a6181611123565b92915050565b600081519050610a7681611123565b92915050565b600081359050610a8b8161113a565b92915050565b600081359050610aa081611151565b92915050565b600081359050610ab581611168565b92915050565b600081519050610aca81611168565b92915050565b600060208284031215610ae257600080fd5b6000610af084828501610a3d565b91505092915050565b600060208284031215610b0b57600080fd5b6000610b1984828501610a52565b91505092915050565b600060208284031215610b3457600080fd5b6000610b4284828501610a67565b91505092915050565b60008060008060008060c08789031215610b6457600080fd5b6000610b7289828a01610a7c565b9650506020610b8389828a01610a91565b9550506040610b9489828a01610aa6565b9450506060610ba589828a01610aa6565b9350506080610bb689828a01610a3d565b92505060a0610bc789828a01610aa6565b9150509295509295509295565b600060208284031215610be657600080fd5b6000610bf484828501610abb565b91505092915050565b60008060408385031215610c1057600080fd5b6000610c1e85828601610abb565b9250506020610c2f85828601610abb565b9150509250929050565b610c4281611009565b82525050565b610c59610c5482611009565b6110bd565b82525050565b610c688161101b565b82525050565b610c7f610c7a82611027565b6110cf565b82525050565b610c96610c9182611053565b6110d9565b82525050565b610ca5816110ab565b82525050565b6000610cb8601083610ff8565b91507f53656e646572206e6f74206f776e6572000000000000000000000000000000006000830152602082019050919050565b6000610cf8601583610ff8565b91507f53656e646572206e6f7420417574686f72697a656400000000000000000000006000830152602082019050919050565b6000610d38601483610ff8565b91507f4e6f7420656e6f756768205054206d696e7465640000000000000000000000006000830152602082019050919050565b6000610d78600f83610ff8565b91507f436f6e74726163742066726f7a656e00000000000000000000000000000000006000830152602082019050919050565b6000610db8601483610ff8565b91507f4e6f7420656e6f756768205954206d696e7465640000000000000000000000006000830152602082019050919050565b610df4816110a1565b82525050565b610e0b610e06826110a1565b6110f5565b82525050565b6000610e1d8285610c48565b601482019150610e2d8284610dfa565b6020820191508190509392505050565b6000610e498287610c6e565b600182019150610e598286610c48565b601482019150610e698285610c85565b602082019150610e798284610c85565b60208201915081905095945050505050565b6000602082019050610ea06000830184610c39565b92915050565b6000606082019050610ebb6000830186610c39565b610ec86020830185610c39565b610ed56040830184610deb565b949350505050565b6000602082019050610ef26000830184610c5f565b92915050565b60006020820190508181036000830152610f1181610cab565b9050919050565b60006020820190508181036000830152610f3181610ceb565b9050919050565b60006020820190508181036000830152610f5181610d2b565b9050919050565b60006020820190508181036000830152610f7181610d6b565b9050919050565b60006020820190508181036000830152610f9181610dab565b9050919050565b6000606082019050610fad6000830186610deb565b610fba6020830185610c39565b610fc76040830184610c9c565b949350505050565b6000604082019050610fe46000830185610deb565b610ff16020830184610deb565b9392505050565b600082825260208201905092915050565b600061101482611081565b9050919050565b60008115159050919050565b60007fff0000000000000000000000000000000000000000000000000000000000000082169050919050565b6000819050919050565b600061106882611009565b9050919050565b600061107a82611009565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b60006110b6826110a1565b9050919050565b60006110c8826110e3565b9050919050565b6000819050919050565b6000819050919050565b60006110ee826110ff565b9050919050565b6000819050919050565b60008160601b9050919050565b61111581611009565b811461112057600080fd5b50565b61112c8161101b565b811461113757600080fd5b50565b6111438161105d565b811461114e57600080fd5b50565b61115a8161106f565b811461116557600080fd5b50565b611171816110a1565b811461117c57600080fd5b5056fea2646970667358221220f36b0fb2d7947e164a385ab6819e7c700b1f3c35979d174ec9e2cd5bd9bc7d6364736f6c63430008000033";
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
        outputs: {
          internalType: string;
          name: string;
          type: string;
        }[];
        stateMutability: string;
        type: string;
      }
  )[];
  static createInterface(): ZapYearnSharesInterface;
  static connect(
    address: string,
    signerOrProvider: Signer | Provider,
  ): ZapYearnShares;
}
export {};
