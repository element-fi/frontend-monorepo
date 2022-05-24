import { Signer, ContractFactory, Overrides, BigNumberish } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { MockBasePool, MockBasePoolInterface } from "../MockBasePool";
declare type MockBasePoolConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;
export declare class MockBasePool__factory extends ContractFactory {
  constructor(...args: MockBasePoolConstructorParams);
  deploy(
    vault: string,
    specialization: BigNumberish,
    name: string,
    symbol: string,
    tokens: string[],
    swapFeePercentage: BigNumberish,
    pauseWindowDuration: BigNumberish,
    bufferPeriodDuration: BigNumberish,
    owner: string,
    overrides?: Overrides & {
      from?: string | Promise<string>;
    },
  ): Promise<MockBasePool>;
  getDeployTransaction(
    vault: string,
    specialization: BigNumberish,
    name: string,
    symbol: string,
    tokens: string[],
    swapFeePercentage: BigNumberish,
    pauseWindowDuration: BigNumberish,
    bufferPeriodDuration: BigNumberish,
    owner: string,
    overrides?: Overrides & {
      from?: string | Promise<string>;
    },
  ): TransactionRequest;
  attach(address: string): MockBasePool;
  connect(signer: Signer): MockBasePool__factory;
  static readonly bytecode =
    "0x6103e06040527f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c9610120908152503480156200003a57600080fd5b50604051620043f1380380620043f1833981810160405281019062000060919062000de9565b88888888888888888882828888816040518060400160405280600181526020017f3100000000000000000000000000000000000000000000000000000000000000815250863373ffffffffffffffffffffffffffffffffffffffff1660001b8060808181525050508073ffffffffffffffffffffffffffffffffffffffff1660a08173ffffffffffffffffffffffffffffffffffffffff1660601b8152505050818051906020012060c08181525050808051906020012060e081815250507f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f6101008181525050505081600390805190602001906200016192919062000b8d565b5080600490805190602001906200017a92919062000b8d565b505050620001976276a700831115610194620008e360201b60201c565b620001b162278d00821115610195620008e360201b60201c565b600082420190508061014081815250508181016101608181525050505050620001e760028651101560c8620008e360201b60201c565b620001ff60088651111560c9620008e360201b60201c565b6200021585620008ff60201b620010da1760201c565b62000226846200091960201b60201c565b60008973ffffffffffffffffffffffffffffffffffffffff166309b2760f8a6040518263ffffffff1660e01b8152600401620002639190620010e1565b602060405180830381600087803b1580156200027e57600080fd5b505af115801562000293573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620002b9919062000dbd565b90508973ffffffffffffffffffffffffffffffffffffffff166366a9c7d28288895167ffffffffffffffff81118015620002f257600080fd5b50604051908082528060200260200182016040528015620003225781602001602082028036833780820191505090505b506040518463ffffffff1660e01b8152600401620003439392919062001096565b600060405180830381600087803b1580156200035e57600080fd5b505af115801562000373573d6000803e3d6000fd5b505050508973ffffffffffffffffffffffffffffffffffffffff166101808173ffffffffffffffffffffffffffffffffffffffff1660601b81525050806101a0818152505085516101c081815250506000865111620003d4576000620003eb565b85600081518110620003e257fe5b60200260200101515b73ffffffffffffffffffffffffffffffffffffffff166101e08173ffffffffffffffffffffffffffffffffffffffff1660601b815250506001865111620004345760006200044b565b856001815181106200044257fe5b60200260200101515b73ffffffffffffffffffffffffffffffffffffffff166102008173ffffffffffffffffffffffffffffffffffffffff1660601b81525050600286511162000494576000620004ab565b85600281518110620004a257fe5b60200260200101515b73ffffffffffffffffffffffffffffffffffffffff166102208173ffffffffffffffffffffffffffffffffffffffff1660601b815250506003865111620004f45760006200050b565b856003815181106200050257fe5b60200260200101515b73ffffffffffffffffffffffffffffffffffffffff166102408173ffffffffffffffffffffffffffffffffffffffff1660601b815250506004865111620005545760006200056b565b856004815181106200056257fe5b60200260200101515b73ffffffffffffffffffffffffffffffffffffffff166102608173ffffffffffffffffffffffffffffffffffffffff1660601b815250506005865111620005b4576000620005cb565b85600581518110620005c257fe5b60200260200101515b73ffffffffffffffffffffffffffffffffffffffff166102808173ffffffffffffffffffffffffffffffffffffffff1660601b815250506006865111620006145760006200062b565b856006815181106200062257fe5b60200260200101515b73ffffffffffffffffffffffffffffffffffffffff166102a08173ffffffffffffffffffffffffffffffffffffffff1660601b815250506007865111620006745760006200068b565b856007815181106200068257fe5b60200260200101515b73ffffffffffffffffffffffffffffffffffffffff166102c08173ffffffffffffffffffffffffffffffffffffffff1660601b815250506000865111620006d4576000620006fb565b620006fa86600081518110620006e657fe5b60200260200101516200099560201b60201c565b5b6102e081815250506001865111620007155760006200073c565b6200073b866001815181106200072757fe5b60200260200101516200099560201b60201c565b5b61030081815250506002865111620007565760006200077d565b6200077c866002815181106200076857fe5b60200260200101516200099560201b60201c565b5b6103208181525050600386511162000797576000620007be565b620007bd86600381518110620007a957fe5b60200260200101516200099560201b60201c565b5b61034081815250506004865111620007d8576000620007ff565b620007fe86600481518110620007ea57fe5b60200260200101516200099560201b60201c565b5b610360818152505060058651116200081957600062000840565b6200083f866005815181106200082b57fe5b60200260200101516200099560201b60201c565b5b610380818152505060068651116200085a57600062000881565b62000880866006815181106200086c57fe5b60200260200101516200099560201b60201c565b5b6103a0818152505060078651116200089b576000620008c2565b620008c186600781518110620008ad57fe5b60200260200101516200099560201b60201c565b5b6103c0818152505050505050505050505050505050505050505050620013bf565b81620008fb57620008fa8162000a4860201b60201c565b5b5050565b6060819050620009158162000ab860201b60201c565b5050565b6200093464e8d4a5100082101560cb620008e360201b60201c565b6200095267016345785d8a000082111560ca620008e360201b60201c565b806007819055507fa9ba3ffe0b6c366b81232caab38605a0699ad5398d6cce76f91ee809e322dafc816040516200098a9190620010fe565b60405180910390a150565b6000808273ffffffffffffffffffffffffffffffffffffffff1663313ce5676040518163ffffffff1660e01b815260040160206040518083038186803b158015620009df57600080fd5b505afa158015620009f4573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062000a1a919062000f0d565b60ff169050600062000a3960128362000b6460201b620010ec1760201c565b905080600a0a92505050919050565b6030600a820601600a820491506030600a830601600a830492506030600a8406018060101b8260081b8401016642414c230000000160c81b7f08c379a000000000000000000000000000000000000000000000000000000000600052602060045260076024528060445260646000fd5b60028151101562000ac95762000b61565b60008160008151811062000ad957fe5b602002602001015190506000600190505b825181101562000b5e57600083828151811062000b0357fe5b6020026020010151905062000b4e8173ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff16106065620008e360201b60201c565b8092505080600101905062000aea565b50505b50565b600062000b7c838311156001620008e360201b60201c565b600082840390508091505092915050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1062000bd057805160ff191683800117855562000c01565b8280016001018555821562000c01579182015b8281111562000c0057825182559160200191906001019062000be3565b5b50905062000c10919062000c14565b5090565b5b8082111562000c2f57600081600090555060010162000c15565b5090565b60008151905062000c448162001312565b92915050565b600082601f83011262000c5c57600080fd5b815162000c7362000c6d8262001149565b6200111b565b9150818183526020840193506020810190508385602084028201111562000c9957600080fd5b60005b8381101562000ccd578162000cb2888262000cee565b84526020840193506020830192505060018101905062000c9c565b5050505092915050565b60008151905062000ce8816200132c565b92915050565b60008151905062000cff8162001346565b92915050565b60008151905062000d168162001360565b92915050565b60008151905062000d2d816200137a565b92915050565b600082601f83011262000d4557600080fd5b815162000d5c62000d568262001172565b6200111b565b9150808252602083016020830185838301111562000d7957600080fd5b62000d86838284620012ce565b50505092915050565b60008151905062000da0816200138b565b92915050565b60008151905062000db781620013a5565b92915050565b60006020828403121562000dd057600080fd5b600062000de08482850162000cd7565b91505092915050565b60008060008060008060008060006101208a8c03121562000e0957600080fd5b600062000e198c828d0162000d05565b995050602062000e2c8c828d0162000d1c565b98505060408a015167ffffffffffffffff81111562000e4a57600080fd5b62000e588c828d0162000d33565b97505060608a015167ffffffffffffffff81111562000e7657600080fd5b62000e848c828d0162000d33565b96505060808a015167ffffffffffffffff81111562000ea257600080fd5b62000eb08c828d0162000c4a565b95505060a062000ec38c828d0162000d8f565b94505060c062000ed68c828d0162000d8f565b93505060e062000ee98c828d0162000d8f565b92505061010062000efd8c828d0162000c33565b9150509295985092959850929598565b60006020828403121562000f2057600080fd5b600062000f308482850162000da6565b91505092915050565b600062000f47838362000f6d565b60208301905092915050565b600062000f61838362001063565b60208301905092915050565b62000f788162001200565b82525050565b600062000f8b82620011bf565b62000f978185620011ef565b935062000fa4836200119f565b8060005b8381101562000fdb57815162000fbf888262000f39565b975062000fcc83620011d5565b92505060018101905062000fa8565b5085935050505092915050565b600062000ff582620011ca565b620010018185620011ef565b93506200100e83620011af565b8060005b838110156200104557815162001029888262000f53565b97506200103683620011e2565b92505060018101905062001012565b5085935050505092915050565b6200105d8162001214565b82525050565b6200106e8162001292565b82525050565b6200107f81620012ba565b82525050565b62001090816200127b565b82525050565b6000606082019050620010ad600083018662001052565b8181036020830152620010c1818562000fe8565b90508181036040830152620010d7818462000f7e565b9050949350505050565b6000602082019050620010f8600083018462001074565b92915050565b600060208201905062001115600083018462001085565b92915050565b6000604051905081810181811067ffffffffffffffff821117156200113f57600080fd5b8060405250919050565b600067ffffffffffffffff8211156200116157600080fd5b602082029050602081019050919050565b600067ffffffffffffffff8211156200118a57600080fd5b601f19601f8301169050602081019050919050565b6000819050602082019050919050565b6000819050602082019050919050565b600081519050919050565b600081519050919050565b6000602082019050919050565b6000602082019050919050565b600082825260208201905092915050565b60006200120d826200125b565b9050919050565b6000819050919050565b60006200122b8262001200565b9050919050565b60006200123f8262001200565b9050919050565b6000819050620012568262001304565b919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600060ff82169050919050565b60006200129f82620012a6565b9050919050565b6000620012b3826200125b565b9050919050565b6000620012c78262001246565b9050919050565b60005b83811015620012ee578082015181840152602081019050620012d1565b83811115620012fe576000848401525b50505050565b600381106200130f57fe5b50565b6200131d8162001200565b81146200132957600080fd5b50565b620013378162001214565b81146200134357600080fd5b50565b62001351816200121e565b81146200135d57600080fd5b50565b6200136b8162001232565b81146200137757600080fd5b50565b600381106200138857600080fd5b50565b62001396816200127b565b8114620013a257600080fd5b50565b620013b08162001285565b8114620013bc57600080fd5b50565b60805160a05160601c60c05160e051610100516101205161014051610160516101805160601c6101a0516101c0516101e05160601c6102005160601c6102205160601c6102405160601c6102605160601c6102805160601c6102a05160601c6102c05160601c6102e05161030051610320516103405161036051610380516103a0516103c051612f20620014d160003980611b29525080611ad7525080611a85525080611a335250806119e152508061198f52508061193d5250806118eb5250505050505050505080611648525080610847525080610b735250806113205250806112f8525080610cb552508061152c52508061156e52508061154d525080610b4b525080610ac25250612f206000f3fe608060405234801561001057600080fd5b50600436106101a95760003560e01c806370a08231116100f957806395d89b4111610097578063d505accf11610071578063d505accf14610515578063d5c096c414610531578063d73dd62314610562578063dd62ed3e14610592576101a9565b806395d89b41146104a9578063a9059cbb146104c7578063aaabadc5146104f7576101a9565b8063851c1bb3116100d3578063851c1bb31461040c57806387ec68171461043c578063893d20e81461046d5780638d928af81461048b576101a9565b806370a082311461037b57806374f3b009146103ab5780637ecebe00146103dc576101a9565b8063313ce5671161016657806338fff2d01161014057806338fff2d0146102de57806355c67628146102fc5780636028bfd41461031a578063661884631461034b576101a9565b8063313ce567146102865780633644e515146102a457806338e9922e146102c2576101a9565b806306fdde03146101ae578063095ea7b3146101cc57806316c38b3c146101fc57806318160ddd146102185780631c0de0511461023657806323b872dd14610256575b600080fd5b6101b66105c2565b6040516101c39190612b89565b60405180910390f35b6101e660048036038101906101e19190612557565b610664565b6040516101f391906129b6565b60405180910390f35b61021660048036038101906102119190612593565b61067b565b005b61022061068f565b60405161022d9190612bab565b60405180910390f35b61023e610699565b60405161024d939291906129d1565b60405180910390f35b610270600480360381019061026b919061246a565b6106c2565b60405161027d91906129b6565b60405180910390f35b61028e61080f565b60405161029b9190612bf6565b60405180910390f35b6102ac610818565b6040516102b99190612a08565b60405180910390f35b6102dc60048036038101906102d79190612705565b610827565b005b6102e6610843565b6040516102f39190612a08565b60405180910390f35b61030461086b565b6040516103119190612bab565b60405180910390f35b610334600480360381019061032f91906125e5565b610875565b604051610342929190612bc6565b60405180910390f35b61036560048036038101906103609190612557565b6108ac565b60405161037291906129b6565b60405180910390f35b61039560048036038101906103909190612405565b61096f565b6040516103a29190612bab565b60405180910390f35b6103c560048036038101906103c091906125e5565b6109b7565b6040516103d392919061297f565b60405180910390f35b6103f660048036038101906103f19190612405565b610a75565b6040516104039190612bab565b60405180910390f35b610426600480360381019061042191906126b3565b610abe565b6040516104339190612a08565b60405180910390f35b610456600480360381019061045191906125e5565b610b10565b604051610464929190612bc6565b60405180910390f35b610475610b47565b6040516104829190612964565b60405180910390f35b610493610b6f565b6040516104a09190612b6e565b60405180910390f35b6104b1610b97565b6040516104be9190612b89565b60405180910390f35b6104e160048036038101906104dc9190612557565b610c39565b6040516104ee91906129b6565b60405180910390f35b6104ff610c50565b60405161050c9190612b53565b60405180910390f35b61052f600480360381019061052a91906124b9565b610c5f565b005b61054b600480360381019061054691906125e5565b610e38565b60405161055992919061297f565b60405180910390f35b61057c60048036038101906105779190612557565b610fae565b60405161058991906129b6565b60405180910390f35b6105ac60048036038101906105a7919061242e565b611053565b6040516105b99190612bab565b60405180910390f35b606060038054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561065a5780601f1061062f5761010080835404028352916020019161065a565b820191906000526020600020905b81548152906001019060200180831161063d57829003601f168201915b5050505050905090565b600061067133848461110d565b6001905092915050565b6106836111f8565b61068c81611241565b50565b6000600254905090565b60008060006106a66112cb565b1592506106b16112f4565b91506106bb61131c565b9050909192565b600080600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490506107898573ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614806107815750838210155b610197611344565b610794858585611357565b8473ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141580156107f057507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8114155b1561080357610802853385840361110d565b5b60019150509392505050565b60006012905090565b6000610822611528565b905090565b61082f6111f8565b6108376115c5565b610840816115da565b50565b60007f0000000000000000000000000000000000000000000000000000000000000000905090565b6000600754905090565b6000606061088b8651610886611644565b61166c565b6108a08989898989898961167d61168f6116f9565b97509795505050505050565b600080600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050808310610946576109413385600061110d565b610964565b610963338561095e86856110ec90919063ffffffff16565b61110d565b5b600191505092915050565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b606080886109fb6109c6610b6f565b73ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161460cd611344565b610a10610a06610843565b82146101f4611344565b6060610a1a611887565b9050610a268882611b79565b6000606080610a3a8e8e8e8e8e8e8e61167d565b925092509250610a4a8d84611be3565b610a54828561168f565b610a5e818561168f565b818196509650505050505097509795505050505050565b6000600560008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b60007f000000000000000000000000000000000000000000000000000000000000000082604051602001610af39291906128e8565b604051602081830303815290604052805190602001209050919050565b60006060610b268651610b21611644565b61166c565b610b3b89898989898989611d00611d126116f9565b97509795505050505050565b60007f0000000000000000000000000000000000000000000000000000000000000000905090565b60007f0000000000000000000000000000000000000000000000000000000000000000905090565b606060048054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610c2f5780601f10610c0457610100808354040283529160200191610c2f565b820191906000526020600020905b815481529060010190602001808311610c1257829003601f168201915b5050505050905090565b6000610c46338484611357565b6001905092915050565b6000610c5a611d7c565b905090565b610c6d8442111560d1611344565b6000600560008973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905060007f0000000000000000000000000000000000000000000000000000000000000000898989858a604051602001610cee96959493929190612a5a565b6040516020818303038152906040528051906020012090506000610d1182611e08565b9050600060018288888860405160008152602001604052604051610d389493929190612b0e565b6020604051602081039080840390855afa158015610d5a573d6000803e3d6000fd5b505050602060405103519050610dd9600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614158015610dd157508b73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16145b6101f8611344565b60018401600560008d73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550610e2b8b8b8b61110d565b5050505050505050505050565b60608088610e7c610e47610b6f565b73ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161460cd611344565b610e91610e87610843565b82146101f4611344565b6060610e9b611887565b90506000610ea761068f565b1415610f545760006060610ebd8d8d8d8a611e41565b91509150610ed2620f424083101560cc611344565b610ee06000620f4240611e4e565b610eef8b620f42408403611e4e565b610ef98184611d12565b80610f02611644565b67ffffffffffffffff81118015610f1857600080fd5b50604051908082528060200260200182016040528015610f475781602001602082028036833780820191505090505b5095509550505050610fa1565b610f5e8882611b79565b6000606080610f728e8e8e8e8e8e8e611d00565b925092509250610f828c84611e4e565b610f8c8285611d12565b610f96818561168f565b818196509650505050505b5097509795505050505050565b6000611049338461104485600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054611f6690919063ffffffff16565b61110d565b6001905092915050565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b60608190506110e881611f86565b5050565b60006110fc838311156001611344565b600082840390508091505092915050565b80600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925836040516111eb9190612bab565b60405180910390a3505050565b60006112276000357fffffffff0000000000000000000000000000000000000000000000000000000016610abe565b905061123e6112368233612024565b610191611344565b50565b80156112615761125c6112526112f4565b4210610193611344565b611277565b61127661126c61131c565b42106101a9611344565b5b80600660006101000a81548160ff0219169083151502179055507f9e3a5e37224532dea67b89face185703738a228a6e8a23dee546960180d3be64816040516112c091906129b6565b60405180910390a150565b60006112d561131c565b4211806112ef5750600660009054906101000a900460ff16155b905090565b60007f0000000000000000000000000000000000000000000000000000000000000000905090565b60007f0000000000000000000000000000000000000000000000000000000000000000905090565b816113535761135281612161565b5b5050565b60008060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490506113a982821015610196611344565b6113e5600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161415610199611344565b8181036000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555061147b826000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054611f6690919063ffffffff16565b6000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8460405161151a9190612bab565b60405180910390a350505050565b60007f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000006115956121d1565b306040516020016115aa959493929190612abb565b60405160208183030381529060405280519060200120905090565b6115d86115d06112cb565b610192611344565b565b6115ed64e8d4a5100082101560cb611344565b61160367016345785d8a000082111560ca611344565b806007819055507fa9ba3ffe0b6c366b81232caab38605a0699ad5398d6cce76f91ee809e322dafc816040516116399190612bab565b60405180910390a150565b60007f0000000000000000000000000000000000000000000000000000000000000000905090565b6116798183146067611344565b5050565b60006060809750975097945050505050565b60005b61169a611644565b8110156116f4576116d18382815181106116b057fe5b60200260200101518383815181106116c457fe5b60200260200101516121d9565b8382815181106116dd57fe5b602002602001018181525050806001019050611692565b505050565b3073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146118245760003073ffffffffffffffffffffffffffffffffffffffff16600036604051611756929190612914565b6000604051808303816000865af19150503d8060008114611793576040519150601f19603f3d011682016040523d82523d6000602084013e611798565b606091505b5050905080600081146117a757fe5b60046000803e7fffffffff000000000000000000000000000000000000000000000000000000006000511660007f43adbafb0000000000000000000000000000000000000000000000000000000082141415611807573d6000803e3d6000fd5b6020600460003e604060205260243d03602460403e601c3d016000f35b606061182e611887565b905061183a8782611b79565b600060606118518c8c8c8c8c8c8c8c63ffffffff16565b509150915061186481848663ffffffff16565b6020815102602082038381526343adbafb60208203526004810390506044820181fd5b60606000611893611644565b905060608167ffffffffffffffff811180156118ae57600080fd5b506040519080825280602002602001820160405280156118dd5781602001602082028036833780820191505090505b5090506000821115611928577f00000000000000000000000000000000000000000000000000000000000000008160008151811061191757fe5b602002602001018181525050611932565b8092505050611b76565b600182111561197a577f00000000000000000000000000000000000000000000000000000000000000008160018151811061196957fe5b602002602001018181525050611984565b8092505050611b76565b60028211156119cc577f0000000000000000000000000000000000000000000000000000000000000000816002815181106119bb57fe5b6020026020010181815250506119d6565b8092505050611b76565b6003821115611a1e577f000000000000000000000000000000000000000000000000000000000000000081600381518110611a0d57fe5b602002602001018181525050611a28565b8092505050611b76565b6004821115611a70577f000000000000000000000000000000000000000000000000000000000000000081600481518110611a5f57fe5b602002602001018181525050611a7a565b8092505050611b76565b6005821115611ac2577f000000000000000000000000000000000000000000000000000000000000000081600581518110611ab157fe5b602002602001018181525050611acc565b8092505050611b76565b6006821115611b14577f000000000000000000000000000000000000000000000000000000000000000081600681518110611b0357fe5b602002602001018181525050611b1e565b8092505050611b76565b6007821115611b66577f000000000000000000000000000000000000000000000000000000000000000081600781518110611b5557fe5b602002602001018181525050611b70565b8092505050611b76565b80925050505b90565b60005b611b84611644565b811015611bde57611bbb838281518110611b9a57fe5b6020026020010151838381518110611bae57fe5b60200260200101516121fc565b838281518110611bc757fe5b602002602001018181525050806001019050611b7c565b505050565b60008060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050611c3582821015610196611344565b8181036000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550611c8f826002546110ec90919063ffffffff16565b600281905550600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051611cf39190612bab565b60405180910390a3505050565b60006060809750975097945050505050565b60005b611d1d611644565b811015611d7757611d54838281518110611d3357fe5b6020026020010151838381518110611d4757fe5b602002602001015161222f565b838281518110611d6057fe5b602002602001018181525050806001019050611d15565b505050565b6000611d86610b6f565b73ffffffffffffffffffffffffffffffffffffffff1663aaabadc56040518163ffffffff1660e01b815260040160206040518083038186803b158015611dcb57600080fd5b505afa158015611ddf573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611e0391906126dc565b905090565b6000611e12611528565b82604051602001611e2492919061292d565b604051602081830303815290604052805190602001209050919050565b6000606094509492505050565b611e9f816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054611f6690919063ffffffff16565b6000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550611ef681600254611f6690919063ffffffff16565b6002819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051611f5a9190612bab565b60405180910390a35050565b6000808284019050611f7c848210156000611344565b8091505092915050565b600281511015611f9557612021565b600081600081518110611fa457fe5b602002602001015190506000600190505b825181101561201e576000838281518110611fcc57fe5b6020026020010151905061200f8173ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff16106065611344565b80925050806001019050611fb5565b50505b50565b600073ba1ba1ba1ba1ba1ba1ba1ba1ba1ba1ba1ba1ba1b73ffffffffffffffffffffffffffffffffffffffff16612059610b47565b73ffffffffffffffffffffffffffffffffffffffff161415801561208257506120818361226b565b5b156120c45761208f610b47565b73ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614905061215b565b6120cc611d7c565b73ffffffffffffffffffffffffffffffffffffffff16639be2a8848484306040518463ffffffff1660e01b815260040161210893929190612a23565b60206040518083038186803b15801561212057600080fd5b505afa158015612134573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061215891906125bc565b90505b92915050565b6030600a820601600a820491506030600a830601600a830492506030600a8406018060101b8260081b8401016642414c230000000160c81b7f08c379a000000000000000000000000000000000000000000000000000000000600052602060045260076024528060445260646000fd5b600046905090565b60006121ea60008314156004611344565b8183816121f357fe5b04905092915050565b6000808284029050612225600085148061221e57508385838161221b57fe5b04145b6003611344565b8091505092915050565b600061224060008314156004611344565b60008314156122525760009050612265565b81600184038161225e57fe5b0460010190505b92915050565b600061227d6338e9922e60e01b610abe565b82149050919050565b60008135905061229581612e49565b92915050565b600082601f8301126122ac57600080fd5b81356122bf6122ba82612c3e565b612c11565b915081818352602084019350602081019050838560208402820111156122e457600080fd5b60005b8381101561231457816122fa88826123db565b8452602084019350602083019250506001810190506122e7565b5050505092915050565b60008135905061232d81612e60565b92915050565b60008151905061234281612e60565b92915050565b60008135905061235781612e77565b92915050565b60008135905061236c81612e8e565b92915050565b600082601f83011261238357600080fd5b813561239661239182612c66565b612c11565b915080825260208301602083018583830111156123b257600080fd5b6123bd838284612de2565b50505092915050565b6000815190506123d581612ea5565b92915050565b6000813590506123ea81612ebc565b92915050565b6000813590506123ff81612ed3565b92915050565b60006020828403121561241757600080fd5b600061242584828501612286565b91505092915050565b6000806040838503121561244157600080fd5b600061244f85828601612286565b925050602061246085828601612286565b9150509250929050565b60008060006060848603121561247f57600080fd5b600061248d86828701612286565b935050602061249e86828701612286565b92505060406124af868287016123db565b9150509250925092565b600080600080600080600060e0888a0312156124d457600080fd5b60006124e28a828b01612286565b97505060206124f38a828b01612286565b96505060406125048a828b016123db565b95505060606125158a828b016123db565b94505060806125268a828b016123f0565b93505060a06125378a828b01612348565b92505060c06125488a828b01612348565b91505092959891949750929550565b6000806040838503121561256a57600080fd5b600061257885828601612286565b9250506020612589858286016123db565b9150509250929050565b6000602082840312156125a557600080fd5b60006125b38482850161231e565b91505092915050565b6000602082840312156125ce57600080fd5b60006125dc84828501612333565b91505092915050565b600080600080600080600060e0888a03121561260057600080fd5b600061260e8a828b01612348565b975050602061261f8a828b01612286565b96505060406126308a828b01612286565b955050606088013567ffffffffffffffff81111561264d57600080fd5b6126598a828b0161229b565b945050608061266a8a828b016123db565b93505060a061267b8a828b016123db565b92505060c088013567ffffffffffffffff81111561269857600080fd5b6126a48a828b01612372565b91505092959891949750929550565b6000602082840312156126c557600080fd5b60006126d38482850161235d565b91505092915050565b6000602082840312156126ee57600080fd5b60006126fc848285016123c6565b91505092915050565b60006020828403121561271757600080fd5b6000612725848285016123db565b91505092915050565b600061273a83836128bb565b60208301905092915050565b61274f81612cfd565b82525050565b600061276082612ca2565b61276a8185612cc5565b935061277583612c92565b8060005b838110156127a657815161278d888261272e565b975061279883612cb8565b925050600181019050612779565b5085935050505092915050565b6127bc81612d0f565b82525050565b6127cb81612d1b565b82525050565b6127e26127dd82612d1b565b612e24565b82525050565b6127f96127f482612d25565b612e2e565b82525050565b600061280b8385612cd6565b9350612818838584612de2565b82840190509392505050565b61282d81612d9a565b82525050565b61283c81612dbe565b82525050565b600061284d82612cad565b6128578185612ce1565b9350612867818560208601612df1565b61287081612e38565b840191505092915050565b6000612888600283612cf2565b91507f19010000000000000000000000000000000000000000000000000000000000006000830152600282019050919050565b6128c481612d83565b82525050565b6128d381612d83565b82525050565b6128e281612d8d565b82525050565b60006128f482856127d1565b60208201915061290482846127e8565b6004820191508190509392505050565b60006129218284866127ff565b91508190509392505050565b60006129388261287b565b915061294482856127d1565b60208201915061295482846127d1565b6020820191508190509392505050565b60006020820190506129796000830184612746565b92915050565b600060408201905081810360008301526129998185612755565b905081810360208301526129ad8184612755565b90509392505050565b60006020820190506129cb60008301846127b3565b92915050565b60006060820190506129e660008301866127b3565b6129f360208301856128ca565b612a0060408301846128ca565b949350505050565b6000602082019050612a1d60008301846127c2565b92915050565b6000606082019050612a3860008301866127c2565b612a456020830185612746565b612a526040830184612746565b949350505050565b600060c082019050612a6f60008301896127c2565b612a7c6020830188612746565b612a896040830187612746565b612a9660608301866128ca565b612aa360808301856128ca565b612ab060a08301846128ca565b979650505050505050565b600060a082019050612ad060008301886127c2565b612add60208301876127c2565b612aea60408301866127c2565b612af760608301856128ca565b612b046080830184612746565b9695505050505050565b6000608082019050612b2360008301876127c2565b612b3060208301866128d9565b612b3d60408301856127c2565b612b4a60608301846127c2565b95945050505050565b6000602082019050612b686000830184612824565b92915050565b6000602082019050612b836000830184612833565b92915050565b60006020820190508181036000830152612ba38184612842565b905092915050565b6000602082019050612bc060008301846128ca565b92915050565b6000604082019050612bdb60008301856128ca565b8181036020830152612bed8184612755565b90509392505050565b6000602082019050612c0b60008301846128d9565b92915050565b6000604051905081810181811067ffffffffffffffff82111715612c3457600080fd5b8060405250919050565b600067ffffffffffffffff821115612c5557600080fd5b602082029050602081019050919050565b600067ffffffffffffffff821115612c7d57600080fd5b601f19601f8301169050602081019050919050565b6000819050602082019050919050565b600081519050919050565b600081519050919050565b6000602082019050919050565b600082825260208201905092915050565b600081905092915050565b600082825260208201905092915050565b600081905092915050565b6000612d0882612d63565b9050919050565b60008115159050919050565b6000819050919050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b6000612d5c82612cfd565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600060ff82169050919050565b6000612da582612dac565b9050919050565b6000612db782612d63565b9050919050565b6000612dc982612dd0565b9050919050565b6000612ddb82612d63565b9050919050565b82818337600083830152505050565b60005b83811015612e0f578082015181840152602081019050612df4565b83811115612e1e576000848401525b50505050565b6000819050919050565b6000819050919050565b6000601f19601f8301169050919050565b612e5281612cfd565b8114612e5d57600080fd5b50565b612e6981612d0f565b8114612e7457600080fd5b50565b612e8081612d1b565b8114612e8b57600080fd5b50565b612e9781612d25565b8114612ea257600080fd5b50565b612eae81612d51565b8114612eb957600080fd5b50565b612ec581612d83565b8114612ed057600080fd5b50565b612edc81612d8d565b8114612ee757600080fd5b5056fea2646970667358221220e491f0b75d316308286bc83275cf48e6dc26ba1903c7719b7e72d4754088a7f764736f6c63430007010033";
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
  static createInterface(): MockBasePoolInterface;
  static connect(
    address: string,
    signerOrProvider: Signer | Provider,
  ): MockBasePool;
}
export {};
