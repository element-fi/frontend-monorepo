import {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export declare type ExitPoolRequestStruct = {
  assets: string[];
  minAmountsOut: BigNumberish[];
  userData: BytesLike;
  toInternalBalance: boolean;
};
export declare type ExitPoolRequestStructOutput = [
  string[],
  BigNumber[],
  string,
  boolean,
] & {
  assets: string[];
  minAmountsOut: BigNumber[];
  userData: string;
  toInternalBalance: boolean;
};
export declare type JoinPoolRequestStruct = {
  assets: string[];
  maxAmountsIn: BigNumberish[];
  userData: BytesLike;
  fromInternalBalance: boolean;
};
export declare type JoinPoolRequestStructOutput = [
  string[],
  BigNumber[],
  string,
  boolean,
] & {
  assets: string[];
  maxAmountsIn: BigNumber[];
  userData: string;
  fromInternalBalance: boolean;
};
export interface BalancerHelpersInterface extends utils.Interface {
  functions: {
    "queryExit(bytes32,address,address,(address[],uint256[],bytes,bool))": FunctionFragment;
    "queryJoin(bytes32,address,address,(address[],uint256[],bytes,bool))": FunctionFragment;
    "vault()": FunctionFragment;
  };
  encodeFunctionData(
    functionFragment: "queryExit",
    values: [BytesLike, string, string, ExitPoolRequestStruct],
  ): string;
  encodeFunctionData(
    functionFragment: "queryJoin",
    values: [BytesLike, string, string, JoinPoolRequestStruct],
  ): string;
  encodeFunctionData(functionFragment: "vault", values?: undefined): string;
  decodeFunctionResult(functionFragment: "queryExit", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "queryJoin", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "vault", data: BytesLike): Result;
  events: {};
}
export interface BalancerHelpers extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;
  interface: BalancerHelpersInterface;
  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined,
  ): Promise<Array<TEvent>>;
  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>,
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>,
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;
  functions: {
    queryExit(
      poolId: BytesLike,
      sender: string,
      recipient: string,
      request: ExitPoolRequestStruct,
      overrides?: Overrides & {
        from?: string | Promise<string>;
      },
    ): Promise<ContractTransaction>;
    queryJoin(
      poolId: BytesLike,
      sender: string,
      recipient: string,
      request: JoinPoolRequestStruct,
      overrides?: Overrides & {
        from?: string | Promise<string>;
      },
    ): Promise<ContractTransaction>;
    vault(overrides?: CallOverrides): Promise<[string]>;
  };
  queryExit(
    poolId: BytesLike,
    sender: string,
    recipient: string,
    request: ExitPoolRequestStruct,
    overrides?: Overrides & {
      from?: string | Promise<string>;
    },
  ): Promise<ContractTransaction>;
  queryJoin(
    poolId: BytesLike,
    sender: string,
    recipient: string,
    request: JoinPoolRequestStruct,
    overrides?: Overrides & {
      from?: string | Promise<string>;
    },
  ): Promise<ContractTransaction>;
  vault(overrides?: CallOverrides): Promise<string>;
  callStatic: {
    queryExit(
      poolId: BytesLike,
      sender: string,
      recipient: string,
      request: ExitPoolRequestStruct,
      overrides?: CallOverrides,
    ): Promise<
      [BigNumber, BigNumber[]] & {
        bptIn: BigNumber;
        amountsOut: BigNumber[];
      }
    >;
    queryJoin(
      poolId: BytesLike,
      sender: string,
      recipient: string,
      request: JoinPoolRequestStruct,
      overrides?: CallOverrides,
    ): Promise<
      [BigNumber, BigNumber[]] & {
        bptOut: BigNumber;
        amountsIn: BigNumber[];
      }
    >;
    vault(overrides?: CallOverrides): Promise<string>;
  };
  filters: {};
  estimateGas: {
    queryExit(
      poolId: BytesLike,
      sender: string,
      recipient: string,
      request: ExitPoolRequestStruct,
      overrides?: Overrides & {
        from?: string | Promise<string>;
      },
    ): Promise<BigNumber>;
    queryJoin(
      poolId: BytesLike,
      sender: string,
      recipient: string,
      request: JoinPoolRequestStruct,
      overrides?: Overrides & {
        from?: string | Promise<string>;
      },
    ): Promise<BigNumber>;
    vault(overrides?: CallOverrides): Promise<BigNumber>;
  };
  populateTransaction: {
    queryExit(
      poolId: BytesLike,
      sender: string,
      recipient: string,
      request: ExitPoolRequestStruct,
      overrides?: Overrides & {
        from?: string | Promise<string>;
      },
    ): Promise<PopulatedTransaction>;
    queryJoin(
      poolId: BytesLike,
      sender: string,
      recipient: string,
      request: JoinPoolRequestStruct,
      overrides?: Overrides & {
        from?: string | Promise<string>;
      },
    ): Promise<PopulatedTransaction>;
    vault(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
