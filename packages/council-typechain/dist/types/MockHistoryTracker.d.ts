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

interface MockHistoryTrackerInterface extends ethers.utils.Interface {
  functions: {
    "clear(uint256)": FunctionFragment;
    "find(uint256)": FunctionFragment;
    "findAndClear(uint256,uint256)": FunctionFragment;
    "loadBounds()": FunctionFragment;
    "loadTop()": FunctionFragment;
    "multiPush(uint256[])": FunctionFragment;
    "peekArrayData(uint256,uint256)": FunctionFragment;
    "push(uint256)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "clear", values: [BigNumberish]): string;
  encodeFunctionData(functionFragment: "find", values: [BigNumberish]): string;
  encodeFunctionData(
    functionFragment: "findAndClear",
    values: [BigNumberish, BigNumberish],
  ): string;
  encodeFunctionData(
    functionFragment: "loadBounds",
    values?: undefined,
  ): string;
  encodeFunctionData(functionFragment: "loadTop", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "multiPush",
    values: [BigNumberish[]],
  ): string;
  encodeFunctionData(
    functionFragment: "peekArrayData",
    values: [BigNumberish, BigNumberish],
  ): string;
  encodeFunctionData(functionFragment: "push", values: [BigNumberish]): string;

  decodeFunctionResult(functionFragment: "clear", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "find", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "findAndClear",
    data: BytesLike,
  ): Result;
  decodeFunctionResult(functionFragment: "loadBounds", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "loadTop", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "multiPush", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "peekArrayData",
    data: BytesLike,
  ): Result;
  decodeFunctionResult(functionFragment: "push", data: BytesLike): Result;

  events: {};
}

export class MockHistoryTracker extends BaseContract {
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

  interface: MockHistoryTrackerInterface;

  functions: {
    clear(
      newMin: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    find(which: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;

    findAndClear(
      which: BigNumberish,
      stale: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    loadBounds(overrides?: CallOverrides): Promise<[BigNumber, BigNumber]>;

    loadTop(overrides?: CallOverrides): Promise<[BigNumber]>;

    multiPush(
      toBePushed: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    peekArrayData(
      start: BigNumberish,
      end: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<[BigNumber[], BigNumber[]]>;

    push(
      data: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;
  };

  clear(
    newMin: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  find(which: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

  findAndClear(
    which: BigNumberish,
    stale: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  loadBounds(overrides?: CallOverrides): Promise<[BigNumber, BigNumber]>;

  loadTop(overrides?: CallOverrides): Promise<BigNumber>;

  multiPush(
    toBePushed: BigNumberish[],
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  peekArrayData(
    start: BigNumberish,
    end: BigNumberish,
    overrides?: CallOverrides,
  ): Promise<[BigNumber[], BigNumber[]]>;

  push(
    data: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  callStatic: {
    clear(newMin: BigNumberish, overrides?: CallOverrides): Promise<void>;

    find(which: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    findAndClear(
      which: BigNumberish,
      stale: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    loadBounds(overrides?: CallOverrides): Promise<[BigNumber, BigNumber]>;

    loadTop(overrides?: CallOverrides): Promise<BigNumber>;

    multiPush(
      toBePushed: BigNumberish[],
      overrides?: CallOverrides,
    ): Promise<void>;

    peekArrayData(
      start: BigNumberish,
      end: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<[BigNumber[], BigNumber[]]>;

    push(data: BigNumberish, overrides?: CallOverrides): Promise<void>;
  };

  filters: {};

  estimateGas: {
    clear(
      newMin: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    find(which: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    findAndClear(
      which: BigNumberish,
      stale: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    loadBounds(overrides?: CallOverrides): Promise<BigNumber>;

    loadTop(overrides?: CallOverrides): Promise<BigNumber>;

    multiPush(
      toBePushed: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    peekArrayData(
      start: BigNumberish,
      end: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    push(
      data: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    clear(
      newMin: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    find(
      which: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    findAndClear(
      which: BigNumberish,
      stale: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    loadBounds(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    loadTop(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    multiPush(
      toBePushed: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    peekArrayData(
      start: BigNumberish,
      end: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    push(
      data: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;
  };
}
