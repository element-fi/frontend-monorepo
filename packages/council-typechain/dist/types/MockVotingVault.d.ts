/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import { TypedEventFilter, TypedEvent, TypedListener } from "./commons";

interface MockVotingVaultInterface extends ethers.utils.Interface {
  functions: {
    "queryVotePower(address,uint256,bytes)": FunctionFragment;
    "setVotingPower(address,uint256)": FunctionFragment;
    "votingPower(address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "queryVotePower",
    values: [string, BigNumberish, BytesLike],
  ): string;
  encodeFunctionData(
    functionFragment: "setVotingPower",
    values: [string, BigNumberish],
  ): string;
  encodeFunctionData(functionFragment: "votingPower", values: [string]): string;

  decodeFunctionResult(
    functionFragment: "queryVotePower",
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: "setVotingPower",
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: "votingPower",
    data: BytesLike,
  ): Result;

  events: {};
}

export class MockVotingVault extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>,
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>,
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>,
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>,
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>,
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined,
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: MockVotingVaultInterface;

  functions: {
    queryVotePower(
      _user: string,
      blockNumber: BigNumberish,
      arg2: BytesLike,
      overrides?: CallOverrides,
    ): Promise<[BigNumber]>;

    setVotingPower(
      _user: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    votingPower(arg0: string, overrides?: CallOverrides): Promise<[BigNumber]>;
  };

  queryVotePower(
    _user: string,
    blockNumber: BigNumberish,
    arg2: BytesLike,
    overrides?: CallOverrides,
  ): Promise<BigNumber>;

  setVotingPower(
    _user: string,
    _amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  votingPower(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

  callStatic: {
    queryVotePower(
      _user: string,
      blockNumber: BigNumberish,
      arg2: BytesLike,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    setVotingPower(
      _user: string,
      _amount: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<void>;

    votingPower(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    queryVotePower(
      _user: string,
      blockNumber: BigNumberish,
      arg2: BytesLike,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    setVotingPower(
      _user: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    votingPower(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    queryVotePower(
      _user: string,
      blockNumber: BigNumberish,
      arg2: BytesLike,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    setVotingPower(
      _user: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    votingPower(
      arg0: string,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;
  };
}
