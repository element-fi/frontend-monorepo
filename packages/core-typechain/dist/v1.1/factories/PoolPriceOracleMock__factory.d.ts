import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  PoolPriceOracleMock,
  PoolPriceOracleMockInterface,
} from "../PoolPriceOracleMock";
declare type PoolPriceOracleMockConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;
export declare class PoolPriceOracleMock__factory extends ContractFactory {
  constructor(...args: PoolPriceOracleMockConstructorParams);
  deploy(
    overrides?: Overrides & {
      from?: string | Promise<string>;
    },
  ): Promise<PoolPriceOracleMock>;
  getDeployTransaction(
    overrides?: Overrides & {
      from?: string | Promise<string>;
    },
  ): TransactionRequest;
  attach(address: string): PoolPriceOracleMock;
  connect(signer: Signer): PoolPriceOracleMock__factory;
  static readonly bytecode =
    "0x608060405234801561001057600080fd5b50611649806100206000396000f3fe608060405234801561001057600080fd5b506004361061009e5760003560e01c8063c3748ef111610066578063c3748ef114610173578063d4376804146101a3578063d5125db6146101d3578063e5fe5f3c146101ef578063ff7b6f1e1461020b5761009e565b8063259efd16146100a3578063264959fb146100bf5780633d48f8c1146100ef57806360d1507c1461011f578063b48b5b4014610155575b600080fd5b6100bd60048036038101906100b89190611177565b61023b565b005b6100d960048036038101906100d491906110d6565b61025e565b6040516100e6919061141e565b60405180910390f35b61010960048036038101906101049190611125565b610276565b6040516101169190611403565b60405180910390f35b6101396004803603810190610134919061114e565b6102aa565b60405161014c9796959493929190611439565b60405180910390f35b61015d6102f5565b60405161016a91906114c3565b60405180910390f35b61018d60048036038101906101889190611036565b6102ff565b60405161019a91906114a8565b60405180910390f35b6101bd60048036038101906101b89190610fe2565b6103bb565b6040516101ca91906113b8565b60405180910390f35b6101ed60048036038101906101e891906111b4565b610494565b005b61020960048036038101906102049190610f76565b6104f1565b005b6102256004803603810190610220919061105f565b61053f565b60405161023291906114a8565b60405180910390f35b61024481610276565b600080848152602001908152602001600020819055505050565b600061026d8484844203610573565b90509392505050565b60006102a3826000015183602001518460400151856060015186608001518760a001518860c001516106fc565b9050919050565b60008060008060008060006102c5610400891061013b61079d565b60006102d0896107b0565b90506102db816107cc565b975097509750975097509750975050919395979092949650565b6000610400905090565b610307610d15565b6040518060e0016040528061032660008561082f90919063ffffffff16565b815260200161033f6000856108a090919063ffffffff16565b815260200161035860018561082f90919063ffffffff16565b81526020016103716001856108a090919063ffffffff16565b815260200161038a60028561082f90919063ffffffff16565b81526020016103a36002856108a090919063ffffffff16565b81526020016103b184610911565b8152509050919050565b6060825167ffffffffffffffff811180156103d557600080fd5b5060405190808252806020026020018201604052801561040f57816020015b6103fc610d52565b8152602001906001900390816103f45790505b50905060005b835181101561048d5760008061043e86848151811061043057fe5b60200260200101518661092e565b91509150604051806040016040528061045684610911565b815260200161046483610911565b81525084848151811061047357fe5b602002602001018190525050508080600101915050610415565b5092915050565b6000854203905060006104aa8287878787610a05565b90507fa7f3e984c65d79d0fa58244dddb6522f661c9dea23fe4940801cbfe08810750686821415826040516104e09291906113da565b60405180910390a150505050505050565b60005b825181101561053a5761052d83828151811061050c57fe5b602002602001015183838151811061052057fe5b602002602001015161023b565b80806001019150506104f4565b505050565b610547610d15565b610568610563868686868b610a7290949392919063ffffffff16565b6102ff565b905095945050505050565b60006105848242101561013861079d565b600082420390506000610596856107b0565b905060006105a382610911565b90506105b46000821161013961079d565b8281116105f65760008184039050806105d6898561082f90919063ffffffff16565b026105ea89856108a090919063ffffffff16565b019450505050506106f5565b600061060187610ad3565b9050600061060e826107b0565b9050600061061b82610911565b905061062c6000821161013961079d565b61063b8682111561013a61079d565b505060008061064a868461092e565b91509150600061065983610911565b61066283610911565b03905060008111156106d85760006106838c856108a090919063ffffffff16565b6106968d856108a090919063ffffffff16565b03905060006106a485610911565b8903905082818302816106b357fe5b056106c78e876108a090919063ffffffff16565b0199505050505050505050506106f5565b6106eb8b846108a090919063ffffffff16565b9750505050505050505b9392505050565b6000610712600083610ae790919063ffffffff16565b610726601f85610af890919063ffffffff16565b61073a605487610b1290919063ffffffff16565b61074e606a89610af890919063ffffffff16565b610762609f8b610b1290919063ffffffff16565b61077660b58d610af890919063ffffffff16565b61078a60ea8f610b1290919063ffffffff16565b1717171717179050979650505050505050565b816107ac576107ab81610b28565b5b5050565b6000806000838152602001908152602001600020549050919050565b60008060008060008060006107e088610b98565b96506107eb88610bb5565b95506107f688610bd2565b945061080188610bef565b935061080c88610c0c565b925061081788610c29565b915061082288610911565b9050919395979092949650565b600080600281111561083d57fe5b82600281111561084957fe5b141561085f5761085883610b98565b905061089a565b6001600281111561086c57fe5b82600281111561087857fe5b141561088e5761088783610bd2565b905061089a565b61089783610c0c565b90505b92915050565b60008060028111156108ae57fe5b8260028111156108ba57fe5b14156108d0576108c983610bb5565b905061090b565b600160028111156108dd57fe5b8260028111156108e957fe5b14156108ff576108f883610bef565b905061090b565b61090883610c29565b90505b92915050565b6000610927600083610c4690919063ffffffff16565b9050919050565b600080600080600161040003905060008060005b8385116109c357600060028686018161095757fe5b04905061096d8982610c5d90919063ffffffff16565b9350610978846107b0565b925061098383610911565b915089821015610998576001810195506109bd565b898211156109ab576001810394506109bc565b8283975097505050505050506109fe565b5b50610942565b8881106109e1576109db6109d684610c75565b6107b0565b826109f4565b816109f36109ee85610ad3565b6107b0565b5b9650965050505050505b9250929050565b600080610a2985858542610a188b6107b0565b610a7290949392919063ffffffff16565b9050600060788842031015905080610a415786610a4b565b610a4a87610ad3565b5b96508160008089815260200190815260200160002081905550869250505095945050505050565b600080610a7e87610911565b830390506000818702610a9089610bb5565b0190506000828702610aa18a610bef565b0190506000838702610ab28b610c29565b019050610ac489848a858b868c6106fc565b94505050505095945050505050565b6000610ae0826001610c5d565b9050919050565b60008183901b60001b905092915050565b600081661fffffffffffff8416901b60001b905092915050565b600081623fffff8416901b60001b905092915050565b6030600a820601600a820491506030600a830601600a830492506030600a8406018060101b8260081b8401016642414c230000000160c81b7f08c379a000000000000000000000000000000000000000000000000000000000600052602060045260076024528060445260646000fd5b6000610bae60ea83610c8990919063ffffffff16565b9050919050565b6000610bcb60b583610cbb90919063ffffffff16565b9050919050565b6000610be8609f83610c8990919063ffffffff16565b9050919050565b6000610c05606a83610cbb90919063ffffffff16565b9050919050565b6000610c22605483610c8990919063ffffffff16565b9050919050565b6000610c3f601f83610cbb90919063ffffffff16565b9050919050565b6000637fffffff8284901c60001c16905092915050565b600061040082840181610c6c57fe5b06905092915050565b6000610c82826001610cf9565b9050919050565b600080623fffff8385901c60001c169050621fffff8113610caa5780610cb2565b623fffff1981175b91505092915050565b600080661fffffffffffff8385901c60001c169050660fffffffffffff8113610ce45780610cf0565b661fffffffffffff1981175b91505092915050565b60006104008261040085010381610d0c57fe5b06905092915050565b6040518060e00160405280600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b604051806040016040528060008152602001600081525090565b600082601f830112610d7d57600080fd5b8135610d90610d8b8261150b565b6114de565b915081818352602084019350602081019050838560e0840282011115610db557600080fd5b60005b83811015610de55781610dcb8882610eb1565b845260208401935060e08301925050600181019050610db8565b5050505092915050565b600082601f830112610e0057600080fd5b8135610e13610e0e82611533565b6114de565b91508181835260208401935060208101905083856020840282011115610e3857600080fd5b60005b83811015610e685781610e4e8882610f61565b845260208401935060208301925050600181019050610e3b565b5050505092915050565b600081359050610e81816115be565b92915050565b600081359050610e96816115d5565b92915050565b600081359050610eab816115e5565b92915050565b600060e08284031215610ec357600080fd5b610ecd60e06114de565b90506000610edd84828501610e9c565b6000830152506020610ef184828501610e9c565b6020830152506040610f0584828501610e9c565b6040830152506060610f1984828501610e9c565b6060830152506080610f2d84828501610e9c565b60808301525060a0610f4184828501610e9c565b60a08301525060c0610f5584828501610f61565b60c08301525092915050565b600081359050610f70816115fc565b92915050565b60008060408385031215610f8957600080fd5b600083013567ffffffffffffffff811115610fa357600080fd5b610faf85828601610def565b925050602083013567ffffffffffffffff811115610fcc57600080fd5b610fd885828601610d6c565b9150509250929050565b60008060408385031215610ff557600080fd5b600083013567ffffffffffffffff81111561100f57600080fd5b61101b85828601610def565b925050602061102c85828601610f61565b9150509250929050565b60006020828403121561104857600080fd5b600061105684828501610e72565b91505092915050565b600080600080600060a0868803121561107757600080fd5b600061108588828901610e72565b955050602061109688828901610e9c565b94505060406110a788828901610e9c565b93505060606110b888828901610e9c565b92505060806110c988828901610f61565b9150509295509295909350565b6000806000606084860312156110eb57600080fd5b60006110f986828701610e87565b935050602061110a86828701610f61565b925050604061111b86828701610f61565b9150509250925092565b600060e0828403121561113757600080fd5b600061114584828501610eb1565b91505092915050565b60006020828403121561116057600080fd5b600061116e84828501610f61565b91505092915050565b600080610100838503121561118b57600080fd5b600061119985828601610f61565b92505060206111aa85828601610eb1565b9150509250929050565b600080600080600060a086880312156111cc57600080fd5b60006111da88828901610f61565b95505060206111eb88828901610f61565b94505060406111fc88828901610e9c565b935050606061120d88828901610e9c565b925050608061121e88828901610e9c565b9150509295509295909350565b600061123783836112dd565b60408301905092915050565b600061124e8261156b565b6112588185611583565b93506112638361155b565b8060005b8381101561129457815161127b888261122b565b975061128683611576565b925050600181019050611267565b5085935050505092915050565b6112aa81611594565b82525050565b6112b9816115a0565b82525050565b6112c8816115aa565b82525050565b6112d7816115aa565b82525050565b6040820160008201516112f3600085018261139a565b506020820151611306602085018261139a565b50505050565b60e08201600082015161132260008501826112bf565b50602082015161133560208501826112bf565b50604082015161134860408501826112bf565b50606082015161135b60608501826112bf565b50608082015161136e60808501826112bf565b5060a082015161138160a08501826112bf565b5060c082015161139460c085018261139a565b50505050565b6113a3816115b4565b82525050565b6113b2816115b4565b82525050565b600060208201905081810360008301526113d28184611243565b905092915050565b60006040820190506113ef60008301856112a1565b6113fc60208301846113a9565b9392505050565b600060208201905061141860008301846112b0565b92915050565b600060208201905061143360008301846112ce565b92915050565b600060e08201905061144e600083018a6112ce565b61145b60208301896112ce565b61146860408301886112ce565b61147560608301876112ce565b61148260808301866112ce565b61148f60a08301856112ce565b61149c60c08301846113a9565b98975050505050505050565b600060e0820190506114bd600083018461130c565b92915050565b60006020820190506114d860008301846113a9565b92915050565b6000604051905081810181811067ffffffffffffffff8211171561150157600080fd5b8060405250919050565b600067ffffffffffffffff82111561152257600080fd5b602082029050602081019050919050565b600067ffffffffffffffff82111561154a57600080fd5b602082029050602081019050919050565b6000819050602082019050919050565b600081519050919050565b6000602082019050919050565b600082825260208201905092915050565b60008115159050919050565b6000819050919050565b6000819050919050565b6000819050919050565b6115c7816115a0565b81146115d257600080fd5b50565b600381106115e257600080fd5b50565b6115ee816115aa565b81146115f957600080fd5b50565b611605816115b4565b811461161057600080fd5b5056fea26469706673582212200a79b3473bc4c3affffa86594807a22d71fdb7acd19199331f9db0ba9affbe5164736f6c63430007010033";
  static readonly abi: (
    | {
        anonymous: boolean;
        inputs: {
          indexed: boolean;
          internalType: string;
          name: string;
          type: string;
        }[];
        name: string;
        type: string;
        outputs?: undefined;
        stateMutability?: undefined;
      }
    | {
        inputs: {
          internalType: string;
          name: string;
          type: string;
        }[];
        name: string;
        outputs: {
          components: {
            internalType: string;
            name: string;
            type: string;
          }[];
          internalType: string;
          name: string;
          type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
      }
    | {
        inputs: {
          components: {
            internalType: string;
            name: string;
            type: string;
          }[];
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
        anonymous?: undefined;
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
        anonymous?: undefined;
      }
    | {
        inputs: (
          | {
              internalType: string;
              name: string;
              type: string;
              components?: undefined;
            }
          | {
              components: {
                internalType: string;
                name: string;
                type: string;
              }[];
              internalType: string;
              name: string;
              type: string;
            }
        )[];
        name: string;
        outputs: never[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
      }
  )[];
  static createInterface(): PoolPriceOracleMockInterface;
  static connect(
    address: string,
    signerOrProvider: Signer | Provider,
  ): PoolPriceOracleMock;
}
export {};
