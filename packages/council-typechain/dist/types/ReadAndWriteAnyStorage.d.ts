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

interface ReadAndWriteAnyStorageInterface extends ethers.utils.Interface {
  functions: {
    "readStorage(uint256)": FunctionFragment;
    "writeStorage(uint256,bytes32)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "readStorage",
    values: [BigNumberish],
  ): string;
  encodeFunctionData(
    functionFragment: "writeStorage",
    values: [BigNumberish, BytesLike],
  ): string;

  decodeFunctionResult(
    functionFragment: "readStorage",
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: "writeStorage",
    data: BytesLike,
  ): Result;

  events: {};
}

export class ReadAndWriteAnyStorage extends BaseContract {
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

  interface: ReadAndWriteAnyStorageInterface;

  functions: {
    readStorage(
      slot: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<[string] & { data: string }>;

    writeStorage(
      slot: BigNumberish,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;
  };

  readStorage(slot: BigNumberish, overrides?: CallOverrides): Promise<string>;

  writeStorage(
    slot: BigNumberish,
    data: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  callStatic: {
    readStorage(slot: BigNumberish, overrides?: CallOverrides): Promise<string>;

    writeStorage(
      slot: BigNumberish,
      data: BytesLike,
      overrides?: CallOverrides,
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    readStorage(
      slot: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    writeStorage(
      slot: BigNumberish,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    readStorage(
      slot: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    writeStorage(
      slot: BigNumberish,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;
  };
}
