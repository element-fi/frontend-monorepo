/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { ethers } from "ethers";
import {
  FactoryOptions,
  HardhatEthersHelpers as HardhatEthersHelpersBase,
} from "@nomiclabs/hardhat-ethers/types";

import * as Contracts from ".";

declare module "hardhat/types/runtime" {
  interface HardhatEthersHelpers extends HardhatEthersHelpersBase {
    getContractFactory(
      name: "ERC721",
      signerOrOptions?: ethers.Signer | FactoryOptions,
    ): Promise<Contracts.ERC721__factory>;
    getContractFactory(
      name: "ERC721TokenReceiver",
      signerOrOptions?: ethers.Signer | FactoryOptions,
    ): Promise<Contracts.ERC721TokenReceiver__factory>;
    getContractFactory(
      name: "Authorizable",
      signerOrOptions?: ethers.Signer | FactoryOptions,
    ): Promise<Contracts.Authorizable__factory>;
    getContractFactory(
      name: "ElfNFT",
      signerOrOptions?: ethers.Signer | FactoryOptions,
    ): Promise<Contracts.ElfNFT__factory>;
    getContractFactory(
      name: "Minter",
      signerOrOptions?: ethers.Signer | FactoryOptions,
    ): Promise<Contracts.Minter__factory>;

    getContractAt(
      name: "ERC721",
      address: string,
      signer?: ethers.Signer,
    ): Promise<Contracts.ERC721>;
    getContractAt(
      name: "ERC721TokenReceiver",
      address: string,
      signer?: ethers.Signer,
    ): Promise<Contracts.ERC721TokenReceiver>;
    getContractAt(
      name: "Authorizable",
      address: string,
      signer?: ethers.Signer,
    ): Promise<Contracts.Authorizable>;
    getContractAt(
      name: "ElfNFT",
      address: string,
      signer?: ethers.Signer,
    ): Promise<Contracts.ElfNFT>;
    getContractAt(
      name: "Minter",
      address: string,
      signer?: ethers.Signer,
    ): Promise<Contracts.Minter>;

    // default types
    getContractFactory(
      name: string,
      signerOrOptions?: ethers.Signer | FactoryOptions,
    ): Promise<ethers.ContractFactory>;
    getContractFactory(
      abi: any[],
      bytecode: ethers.utils.BytesLike,
      signer?: ethers.Signer,
    ): Promise<ethers.ContractFactory>;
    getContractAt(
      nameOrAbi: string | any[],
      address: string,
      signer?: ethers.Signer,
    ): Promise<ethers.Contract>;
  }
}
