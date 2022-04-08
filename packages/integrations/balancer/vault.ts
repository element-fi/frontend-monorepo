import { AddressesJson } from "core/addresses/addresses";
// TODO: stuff under packages/ should not have a default provider
import { defaultProvider } from "core/providers/providers";
import { Vault__factory } from "@elementfi/core-typechain/dist/v1";

export const balancerVaultContract = Vault__factory.connect(
  AddressesJson.addresses.balancerVaultAddress,
  defaultProvider
);
