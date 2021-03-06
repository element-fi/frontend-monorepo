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

interface MockTokenLogicInterface extends ethers.utils.Interface {
  functions: {
    "balanceOf(address)": FunctionFragment;
    "increaseBalance(address,uint256)": FunctionFragment;
    "mint(address,uint256)": FunctionFragment;
    "readStorage(uint256)": FunctionFragment;
    "totalSupply()": FunctionFragment;
    "transfer(address,uint256)": FunctionFragment;
    "writeStorage(uint256,bytes32)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "balanceOf", values: [string]): string;
  encodeFunctionData(
    functionFragment: "increaseBalance",
    values: [string, BigNumberish],
  ): string;
  encodeFunctionData(
    functionFragment: "mint",
    values: [string, BigNumberish],
  ): string;
  encodeFunctionData(
    functionFragment: "readStorage",
    values: [BigNumberish],
  ): string;
  encodeFunctionData(
    functionFragment: "totalSupply",
    values?: undefined,
  ): string;
  encodeFunctionData(
    functionFragment: "transfer",
    values: [string, BigNumberish],
  ): string;
  encodeFunctionData(
    functionFragment: "writeStorage",
    values: [BigNumberish, BytesLike],
  ): string;

  decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "increaseBalance",
    data: BytesLike,
  ): Result;
  decodeFunctionResult(functionFragment: "mint", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "readStorage",
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: "totalSupply",
    data: BytesLike,
  ): Result;
  decodeFunctionResult(functionFragment: "transfer", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "writeStorage",
    data: BytesLike,
  ): Result;

  events: {};
}

export class MockTokenLogic extends BaseContract {
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

  interface: MockTokenLogicInterface;

  functions: {
    balanceOf(who: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    increaseBalance(
      to: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    mint(
      to: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    readStorage(
      slot: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<[string] & { data: string }>;

    totalSupply(overrides?: CallOverrides): Promise<[BigNumber]>;

    transfer(
      to: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    writeStorage(
      slot: BigNumberish,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;
  };

  balanceOf(who: string, overrides?: CallOverrides): Promise<BigNumber>;

  increaseBalance(
    to: string,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  mint(
    to: string,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  readStorage(slot: BigNumberish, overrides?: CallOverrides): Promise<string>;

  totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

  transfer(
    to: string,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  writeStorage(
    slot: BigNumberish,
    data: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  callStatic: {
    balanceOf(who: string, overrides?: CallOverrides): Promise<BigNumber>;

    increaseBalance(
      to: string,
      amount: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<void>;

    mint(
      to: string,
      amount: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<void>;

    readStorage(slot: BigNumberish, overrides?: CallOverrides): Promise<string>;

    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

    transfer(
      to: string,
      amount: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<void>;

    writeStorage(
      slot: BigNumberish,
      data: BytesLike,
      overrides?: CallOverrides,
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    balanceOf(who: string, overrides?: CallOverrides): Promise<BigNumber>;

    increaseBalance(
      to: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    mint(
      to: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    readStorage(
      slot: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

    transfer(
      to: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    writeStorage(
      slot: BigNumberish,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    balanceOf(
      who: string,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    increaseBalance(
      to: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    mint(
      to: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    readStorage(
      slot: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    totalSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    transfer(
      to: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    writeStorage(
      slot: BigNumberish,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;
  };
}
