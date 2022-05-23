import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  TestWrappedPosition,
  TestWrappedPositionInterface,
} from "../TestWrappedPosition";
declare type TestWrappedPositionConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;
export declare class TestWrappedPosition__factory extends ContractFactory {
  constructor(...args: TestWrappedPositionConstructorParams);
  deploy(
    _token: string,
    overrides?: Overrides & {
      from?: string | Promise<string>;
    },
  ): Promise<TestWrappedPosition>;
  getDeployTransaction(
    _token: string,
    overrides?: Overrides & {
      from?: string | Promise<string>;
    },
  ): TransactionRequest;
  attach(address: string): TestWrappedPosition;
  connect(signer: Signer): TestWrappedPosition__factory;
  static readonly bytecode =
    "0x60a060405260646007553480156200001657600080fd5b5060405162002b2d38038062002b2d83398181016040528101906200003c91906200044f565b806040518060400160405280600f81526020017f454c656d656e742046696e616e636500000000000000000000000000000000008152506040518060400160405280601381526020017f5465737457726170706564506f736974696f6e0000000000000000000000000081525081818160009080519060200190620000c392919062000371565b508060019080519060200190620000dc92919062000371565b506012600260006101000a81548160ff021916908360ff1602179055507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff600360008073ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff600360003073ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550620001d16200035160201b60201c565b7f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f600060405162000203919062000565565b60405180910390206040518060400160405280600181526020017f3100000000000000000000000000000000000000000000000000000000000000815250805190602001204630604051602001620002609594939291906200057e565b6040516020818303038152906040528051906020012060068190555050508273ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff1660601b81525050620003478373ffffffffffffffffffffffffffffffffffffffff1663313ce5676040518163ffffffff1660e01b815260040160206040518083038186803b1580156200030057600080fd5b505afa15801562000315573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200033b91906200047b565b6200035360201b60201c565b50505050620006fd565b565b80600260006101000a81548160ff021916908360ff16021790555050565b8280546200037f9062000664565b90600052602060002090601f016020900481019282620003a35760008555620003ef565b82601f10620003be57805160ff1916838001178555620003ef565b82800160010185558215620003ef579182015b82811115620003ee578251825591602001919060010190620003d1565b5b509050620003fe919062000402565b5090565b5b808211156200041d57600081600090555060010162000403565b5090565b6000815190506200043281620006c9565b92915050565b6000815190506200044981620006e3565b92915050565b6000602082840312156200046257600080fd5b6000620004728482850162000421565b91505092915050565b6000602082840312156200048e57600080fd5b60006200049e8482850162000438565b91505092915050565b620004b281620005fb565b82525050565b620004c3816200060f565b82525050565b60008154620004d88162000664565b620004e48186620005f0565b9450600182166000811462000502576001811462000514576200054b565b60ff198316865281860193506200054b565b6200051f85620005db565b60005b83811015620005435781548189015260018201915060208101905062000522565b838801955050505b50505092915050565b6200055f816200064d565b82525050565b6000620005738284620004c9565b915081905092915050565b600060a082019050620005956000830188620004b8565b620005a46020830187620004b8565b620005b36040830186620004b8565b620005c2606083018562000554565b620005d16080830184620004a7565b9695505050505050565b60008190508160005260206000209050919050565b600081905092915050565b600062000608826200062d565b9050919050565b6000819050919050565b60006200062682620005fb565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600060ff82169050919050565b600060028204905060018216806200067d57607f821691505b602082108114156200069457620006936200069a565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b620006d48162000619565b8114620006e057600080fd5b50565b620006ee8162000657565b8114620006fa57600080fd5b50565b60805160601c6123f56200073860003960008181610a21015281816110ec0152818161112c015281816111d701526114d901526123f56000f3fe608060405234801561001057600080fd5b50600436106101375760003560e01c80637ecebe00116100b8578063a9059cbb1161007c578063a9059cbb1461038f578063b5c5f672146103bf578063d505accf146103ef578063dd62ed3e1461040b578063e613deb21461043b578063fc0c546a1461046b57610137565b80637ecebe00146102d557806385f45c8814610305578063886263d01461033757806395d89b41146103555780639c08be581461037357610137565b80633644e515116100ff5780633644e515146101f65780633af9e6691461021457806347e7ef241461024457806367caf8711461027457806370a08231146102a557610137565b806306fdde031461013c578063095ea7b31461015a57806323b872dd1461018a57806330adf81f146101ba578063313ce567146101d8575b600080fd5b610144610489565b6040516101519190611d0f565b60405180910390f35b610174600480360381019061016f9190611758565b610517565b6040516101819190611c18565b60405180910390f35b6101a4600480360381019061019f919061166b565b610609565b6040516101b19190611c18565b60405180910390f35b6101c261098c565b6040516101cf9190611c33565b60405180910390f35b6101e06109b3565b6040516101ed9190611e8c565b60405180910390f35b6101fe6109c6565b60405161020b9190611c33565b60405180910390f35b61022e60048036038101906102299190611606565b6109cc565b60405161023b9190611e11565b60405180910390f35b61025e60048036038101906102599190611758565b610a1d565b60405161026b9190611e11565b60405180910390f35b61028e60048036038101906102899190611794565b610af0565b60405161029c929190611e2c565b60405180910390f35b6102bf60048036038101906102ba9190611606565b610b5d565b6040516102cc9190611e11565b60405180910390f35b6102ef60048036038101906102ea9190611606565b610b75565b6040516102fc9190611e11565b60405180910390f35b61031f600480360381019061031a9190611606565b610b8d565b60405161032e93929190611e55565b60405180910390f35b61033f610c02565b60405161034c9190611e11565b60405180910390f35b61035d610c08565b60405161036a9190611d0f565b60405180910390f35b61038d6004803603810190610388919061180c565b610c96565b005b6103a960048036038101906103a49190611758565b610ca0565b6040516103b69190611c18565b60405180910390f35b6103d960048036038101906103d49190611794565b610cb5565b6040516103e69190611e11565b60405180910390f35b610409600480360381019061040491906116ba565b610ccd565b005b6104256004803603810190610420919061162f565b6110b3565b6040516104329190611e11565b60405180910390f35b6104556004803603810190610450919061180c565b6110d8565b6040516104629190611e11565b60405180910390f35b6104736110ea565b6040516104809190611cf4565b60405180910390f35b600080546104969061221c565b80601f01602080910402602001604051908101604052809291908181526020018280546104c29061221c565b801561050f5780601f106104e45761010080835404028352916020019161050f565b820191906000526020600020905b8154815290600101906020018083116104f257829003601f168201915b505050505081565b600081600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925846040516105f79190611e11565b60405180910390a36001905092915050565b600080600360008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905082811015610691576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161068890611df1565b60405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff161461083e576000600460008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff811461083c57838110156107af576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107a690611d31565b60405180910390fd5b83816107bb9190612120565b600460008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055505b505b828161084a9190612120565b600360008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555082600360008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546108d89190611ece565b600360008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508373ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef856040516109789190611e11565b60405180910390a360019150509392505050565b7f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c960001b81565b600260009054906101000a900460ff1681565b60065481565b6000610a16600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461110e565b9050919050565b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166323b872dd3330856040518463ffffffff1660e01b8152600401610a7c93929190611b8f565b602060405180830381600087803b158015610a9657600080fd5b505af1158015610aaa573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ace91906117e3565b506000610ad9611125565b509050610ae6848261127b565b8091505092915050565b6000806000600260009054906101000a900460ff16600a610b119190611fa8565b90506000610b1e8261110e565b90506000818388610b2f91906120c6565b610b399190611f24565b90506000610b4989838986611373565b905080829550955050505050935093915050565b60036020528060005260406000206000915090505481565b60056020528060005260406000206000915090505481565b6000806000806000610b9d611125565b915091506000600360008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050610bef878461127b565b8282829550955095505050509193909250565b60075481565b60018054610c159061221c565b80601f0160208091040260200160405190810160405280929190818152602001828054610c419061221c565b8015610c8e5780601f10610c6357610100808354040283529160200191610c8e565b820191906000526020600020905b815481529060010190602001808311610c7157829003601f168201915b505050505081565b8060078190555050565b6000610cad338484610609565b905092915050565b6000610cc48484846000611373565b90509392505050565b60006006547f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c960001b898989600560008e73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020548a604051602001610d4f96959493929190611c4e565b60405160208183030381529060405280519060200120604051602001610d76929190611b3d565b604051602081830303815290604052805190602001209050600073ffffffffffffffffffffffffffffffffffffffff168873ffffffffffffffffffffffffffffffffffffffff161415610dfe576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610df590611d71565b60405180910390fd5b60018185858560405160008152602001604052604051610e219493929190611caf565b6020604051602081039080840390855afa158015610e43573d6000803e3d6000fd5b5050506020604051035173ffffffffffffffffffffffffffffffffffffffff168873ffffffffffffffffffffffffffffffffffffffff1614610eba576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610eb190611d91565b60405180910390fd5b6000851480610ec95750844211155b610f08576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610eff90611dd1565b60405180910390fd5b7f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a08260001c1115610f6e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f6590611d51565b60405180910390fd5b600560008973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000815480929190610fbe9061224e565b919050555085600460008a73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508673ffffffffffffffffffffffffffffffffffffffff168873ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925886040516110a19190611e11565b60405180910390a35050505050505050565b6004602052816000526040600020602052806000526040600020600091509150505481565b60006110e38261110e565b9050919050565b7f000000000000000000000000000000000000000000000000000000000000000081565b60006007548261111e91906120c6565b9050919050565b60008060007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b81526004016111839190611b74565b60206040518083038186803b15801561119b57600080fd5b505afa1580156111af573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111d39190611835565b90507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663e30443bc3060006040518363ffffffff1660e01b8152600401611231929190611bc6565b600060405180830381600087803b15801561124b57600080fd5b505af115801561125f573d6000803e3d6000fd5b50505050600754816112719190611f24565b8192509250509091565b80600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546112c69190611ece565b600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040516113679190611e11565b60405180910390a35050565b600061137f33856113dd565b600061138c8587856114d5565b9050838110156113d1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016113c890611db1565b60405180910390fd5b80915050949350505050565b80600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546114289190612120565b600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040516114c99190611e11565b60405180910390a35050565b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663e22f03c1846007548761152291906120c6565b6040518363ffffffff1660e01b815260040161153f929190611bef565b600060405180830381600087803b15801561155957600080fd5b505af115801561156d573d6000803e3d6000fd5b505050506007548461157f91906120c6565b90509392505050565b6000813590506115978161234c565b92915050565b6000815190506115ac81612363565b92915050565b6000813590506115c18161237a565b92915050565b6000813590506115d681612391565b92915050565b6000815190506115eb81612391565b92915050565b600081359050611600816123a8565b92915050565b60006020828403121561161857600080fd5b600061162684828501611588565b91505092915050565b6000806040838503121561164257600080fd5b600061165085828601611588565b925050602061166185828601611588565b9150509250929050565b60008060006060848603121561168057600080fd5b600061168e86828701611588565b935050602061169f86828701611588565b92505060406116b0868287016115c7565b9150509250925092565b600080600080600080600060e0888a0312156116d557600080fd5b60006116e38a828b01611588565b97505060206116f48a828b01611588565b96505060406117058a828b016115c7565b95505060606117168a828b016115c7565b94505060806117278a828b016115f1565b93505060a06117388a828b016115b2565b92505060c06117498a828b016115b2565b91505092959891949750929550565b6000806040838503121561176b57600080fd5b600061177985828601611588565b925050602061178a858286016115c7565b9150509250929050565b6000806000606084860312156117a957600080fd5b60006117b786828701611588565b93505060206117c8868287016115c7565b92505060406117d9868287016115c7565b9150509250925092565b6000602082840312156117f557600080fd5b60006118038482850161159d565b91505092915050565b60006020828403121561181e57600080fd5b600061182c848285016115c7565b91505092915050565b60006020828403121561184757600080fd5b6000611855848285016115dc565b91505092915050565b61186781612154565b82525050565b61187681612166565b82525050565b61188581612172565b82525050565b61189c61189782612172565b612297565b82525050565b6118ab816121b3565b82525050565b6118ba816121d7565b82525050565b60006118cb82611ea7565b6118d58185611eb2565b93506118e58185602086016121e9565b6118ee8161232e565b840191505092915050565b6000611906601d83611eb2565b91507f45524332303a20696e73756666696369656e742d616c6c6f77616e63650000006000830152602082019050919050565b6000611946600283611ec3565b91507f19010000000000000000000000000000000000000000000000000000000000006000830152600282019050919050565b6000611986602283611eb2565b91507f45524332303a20696e76616c6964207369676e6174757265202773272076616c60008301527f75650000000000000000000000000000000000000000000000000000000000006020830152604082019050919050565b60006119ec601883611eb2565b91507f45524332303a20696e76616c69642d616464726573732d3000000000000000006000830152602082019050919050565b6000611a2c601583611eb2565b91507f45524332303a20696e76616c69642d7065726d697400000000000000000000006000830152602082019050919050565b6000611a6c601583611eb2565b91507f4e6f7420656e6f75676820756e6465726c79696e6700000000000000000000006000830152602082019050919050565b6000611aac601583611eb2565b91507f45524332303a207065726d69742d6578706972656400000000000000000000006000830152602082019050919050565b6000611aec601b83611eb2565b91507f45524332303a20696e73756666696369656e742d62616c616e636500000000006000830152602082019050919050565b611b288161219c565b82525050565b611b37816121a6565b82525050565b6000611b4882611939565b9150611b54828561188b565b602082019150611b64828461188b565b6020820191508190509392505050565b6000602082019050611b89600083018461185e565b92915050565b6000606082019050611ba4600083018661185e565b611bb1602083018561185e565b611bbe6040830184611b1f565b949350505050565b6000604082019050611bdb600083018561185e565b611be860208301846118b1565b9392505050565b6000604082019050611c04600083018561185e565b611c116020830184611b1f565b9392505050565b6000602082019050611c2d600083018461186d565b92915050565b6000602082019050611c48600083018461187c565b92915050565b600060c082019050611c63600083018961187c565b611c70602083018861185e565b611c7d604083018761185e565b611c8a6060830186611b1f565b611c976080830185611b1f565b611ca460a0830184611b1f565b979650505050505050565b6000608082019050611cc4600083018761187c565b611cd16020830186611b2e565b611cde604083018561187c565b611ceb606083018461187c565b95945050505050565b6000602082019050611d0960008301846118a2565b92915050565b60006020820190508181036000830152611d2981846118c0565b905092915050565b60006020820190508181036000830152611d4a816118f9565b9050919050565b60006020820190508181036000830152611d6a81611979565b9050919050565b60006020820190508181036000830152611d8a816119df565b9050919050565b60006020820190508181036000830152611daa81611a1f565b9050919050565b60006020820190508181036000830152611dca81611a5f565b9050919050565b60006020820190508181036000830152611dea81611a9f565b9050919050565b60006020820190508181036000830152611e0a81611adf565b9050919050565b6000602082019050611e266000830184611b1f565b92915050565b6000604082019050611e416000830185611b1f565b611e4e6020830184611b1f565b9392505050565b6000606082019050611e6a6000830186611b1f565b611e776020830185611b1f565b611e846040830184611b1f565b949350505050565b6000602082019050611ea16000830184611b2e565b92915050565b600081519050919050565b600082825260208201905092915050565b600081905092915050565b6000611ed98261219c565b9150611ee48361219c565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115611f1957611f186122a1565b5b828201905092915050565b6000611f2f8261219c565b9150611f3a8361219c565b925082611f4a57611f496122d0565b5b828204905092915050565b6000808291508390505b6001851115611f9f57808604811115611f7b57611f7a6122a1565b5b6001851615611f8a5780820291505b8081029050611f988561233f565b9450611f5f565b94509492505050565b6000611fb38261219c565b9150611fbe836121a6565b9250611feb7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8484611ff3565b905092915050565b60008261200357600190506120bf565b8161201157600090506120bf565b8160018114612027576002811461203157612060565b60019150506120bf565b60ff841115612043576120426122a1565b5b8360020a91508482111561205a576120596122a1565b5b506120bf565b5060208310610133831016604e8410600b84101617156120955782820a9050838111156120905761208f6122a1565b5b6120bf565b6120a28484846001611f55565b925090508184048111156120b9576120b86122a1565b5b81810290505b9392505050565b60006120d18261219c565b91506120dc8361219c565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0483118215151615612115576121146122a1565b5b828202905092915050565b600061212b8261219c565b91506121368361219c565b925082821015612149576121486122a1565b5b828203905092915050565b600061215f8261217c565b9050919050565b60008115159050919050565b6000819050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600060ff82169050919050565b60006121be826121c5565b9050919050565b60006121d08261217c565b9050919050565b60006121e28261219c565b9050919050565b60005b838110156122075780820151818401526020810190506121ec565b83811115612216576000848401525b50505050565b6000600282049050600182168061223457607f821691505b60208210811415612248576122476122ff565b5b50919050565b60006122598261219c565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82141561228c5761228b6122a1565b5b600182019050919050565b6000819050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000601f19601f8301169050919050565b60008160011c9050919050565b61235581612154565b811461236057600080fd5b50565b61236c81612166565b811461237757600080fd5b50565b61238381612172565b811461238e57600080fd5b50565b61239a8161219c565b81146123a557600080fd5b50565b6123b1816121a6565b81146123bc57600080fd5b5056fea264697066735822122098e1afd288b19c667e5fbea20d9a1272e84051029b154eba33b1321343637d5e64736f6c63430008000033";
  static readonly abi: (
    | {
        inputs: {
          internalType: string;
          name: string;
          type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
        name?: undefined;
        outputs?: undefined;
      }
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
        stateMutability?: undefined;
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
        anonymous?: undefined;
      }
  )[];
  static createInterface(): TestWrappedPositionInterface;
  static connect(
    address: string,
    signerOrProvider: Signer | Provider,
  ): TestWrappedPosition;
}
export {};
