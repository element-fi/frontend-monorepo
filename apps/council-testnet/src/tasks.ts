/* eslint-disable no-console */
import { getTokenList, goerliAddressList } from "@elementfi/council-tokenlist";
import {
  ERC20PermitWithMint__factory,
  LockingVault__factory,
  VestingVault__factory,
} from "@elementfi/council-typechain";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { ethers, providers } from "ethers";
import { parseEther } from "ethers/lib/utils";
import fs from "fs";
import { task, types } from "hardhat/config";

import { createGoerliGscProposal } from "src/scripts/createGoerliGscProposal";
import { createGoerliProposal } from "src/scripts/createGoerliProposal";
import { createGscProposal } from "src/scripts/createGscProposal";
import { createProposal } from "src/scripts/createProposal";

const { PROPOSER_PRIVATE_KEY, GOERLI_DEPLOYER_PRIVATE_KEY } = process.env;
const LOCAL_RPC_HOST = "http://127.0.0.1:8545";
const ALCHEMY_GOERLI_RPC_HOST = process.env.GOERLI_URI as string;
const { elementToken, lockingVault, vestingVault } =
  goerliAddressList.addresses;

task(
  "build-tokenlist",
  "Builds a council tokenlist the local testnet",
).setAction(async (unusedTaskArgs, hre) => {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const addressesJson = require("src/addresses/testnet.addresses.json");
  const { provider } = hre.ethers;

  const tokenList = await getTokenList(
    provider,
    addressesJson,
    `Council testnet token list`,
  );

  const tokenListString = JSON.stringify(tokenList, null, 2);
  console.log(tokenListString);

  // TODO: We have to validate this json schema ourselves before it can be
  // published to the uniswap directory.  For now, just look at this file in
  // vscode and make sure there are no squiggles.
  fs.writeFileSync("src/tokenlist/testnet.tokenlist.json", tokenListString);
});

task("createGoerliProposal", "Creates a new proposal")
  .addOptionalParam(
    "ballot",
    "How the proposer will vote, YES (0), NO (1), MAYBE (2)",
    2,
    types.int,
  )
  .setAction(async (taskArgs: { ballot: number }) => {
    const { ballot } = taskArgs;
    console.log("ballot", ballot);

    if (!PROPOSER_PRIVATE_KEY) {
      console.log("ERROR: no private key provided for proposer");
      return;
    }

    const localhostProvider = new providers.JsonRpcProvider(
      ALCHEMY_GOERLI_RPC_HOST,
    );

    // TODO: paramaterize this
    // matt goerli airdrop test wallet with 100k vote power
    const owner = new ethers.Wallet(PROPOSER_PRIVATE_KEY, localhostProvider);

    const ownerAddress = owner.address;
    console.log("ownerAddress", ownerAddress);

    await createGoerliProposal(
      owner as unknown as SignerWithAddress,
      localhostProvider,
      {
        ballot,
      },
    );
  });

task("createProposal", "Creates a new proposal")
  .addOptionalParam(
    "ballot",
    "How the proposer will vote, YES (0), NO (1), MAYBE (2)",
    2,
    types.int,
  )
  .addOptionalParam(
    "expired",
    "If the proposal should be immediately expired",
    false,
    types.boolean,
  )
  .addOptionalParam(
    "quorum",
    "set a custom quorum value to pass the proposal",
    undefined,
    types.string,
  )
  .setAction(
    async (taskArgs: { ballot: number; expired: boolean; quorum: string }) => {
      const { ballot, expired, quorum } = taskArgs;
      console.log("quorum", quorum);
      console.log("expired", expired);
      console.log("ballot", ballot);
      const localhostProvider = new providers.JsonRpcProvider(LOCAL_RPC_HOST);

      // signer 0
      const owner = new ethers.Wallet(
        "0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80",
        localhostProvider,
      );

      const ownerAddress = owner.address;
      console.log("ownerAddress", ownerAddress);

      await createProposal(
        owner as unknown as SignerWithAddress,
        localhostProvider,
        {
          ballot,
          quorum,
          expired,
        },
      );
    },
  );

task("createGscProposal", "Creates a new gsc proposal")
  .addOptionalParam(
    "ballot",
    "How the proposer will vote, YES (0), NO (1), MAYBE (2)",
    2,
    types.int,
  )
  .addOptionalParam(
    "expired",
    "If the proposal should be immediately expired",
    false,
    types.boolean,
  )
  .setAction(async (taskArgs: { ballot: number; expired: boolean }) => {
    const { ballot, expired } = taskArgs;
    console.log("expired", expired);
    console.log("ballot", ballot);
    const localhostProvider = new providers.JsonRpcProvider(LOCAL_RPC_HOST);

    // signer 0
    const owner = new ethers.Wallet(
      "0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80",
      localhostProvider,
    );

    const ownerAddress = owner.address;
    console.log("ownerAddress", ownerAddress);

    await createGscProposal(
      owner as unknown as SignerWithAddress,
      localhostProvider,
      {
        ballot,
        expired,
      },
    );
  });

task("autoMine", "Mine blocks on every transaction automatically").setAction(
  async () => {
    const localhostProvider = new providers.JsonRpcProvider(LOCAL_RPC_HOST);
    console.log("Disabling interval mining");
    await localhostProvider.send("evm_setIntervalMining", [0]);
    console.log("Enabling automine");
    await localhostProvider.send("evm_setAutomine", [true]);
  },
);

task("intervalMining", "Mine blocks on an interval")
  .addOptionalParam(
    "interval",
    "ms interval to mine blocks at. default is 10s",
    10000,
    types.int,
  )
  .setAction(async (taskArgs) => {
    const { interval = 10000 } = taskArgs;
    const localhostProvider = new providers.JsonRpcProvider(LOCAL_RPC_HOST);
    console.log("Disabling automine");
    await localhostProvider.send("evm_setAutomine", [false]);
    console.log("Setting mining interval to", interval);
    await localhostProvider.send("evm_setIntervalMining", [interval]);
  });

task("createGoerliGscProposal", "Creates a new gsc proposal on goerli")
  .addOptionalParam(
    "ballot",
    "How the proposer will vote, YES (0), NO (1), MAYBE (2)",
    2,
    types.int,
  )
  .addOptionalParam(
    "expired",
    "If the proposal should be immediately expired",
    false,
    types.boolean,
  )
  .setAction(async (taskArgs: { ballot: number; expired: boolean }) => {
    const { ballot, expired } = taskArgs;
    console.log("expired", expired);
    console.log("ballot", ballot);

    if (!PROPOSER_PRIVATE_KEY) {
      console.log("ERROR: no private key provided for proposer");
      return;
    }

    const goerliProvider = new providers.JsonRpcProvider(
      ALCHEMY_GOERLI_RPC_HOST,
    );

    const owner = new ethers.Wallet(PROPOSER_PRIVATE_KEY, goerliProvider);

    const ownerAddress = owner.address;
    console.log("ownerAddress", ownerAddress);

    await createGoerliGscProposal(
      owner as unknown as SignerWithAddress,
      goerliProvider,
      {
        ballot,
        expired,
      },
    );
  });

task("giveVotingPowerToAccount", "gives voting power to account")
  .addParam(
    "address",
    "wallet address to give voting power to",
    undefined,
    types.string,
  )
  .addOptionalParam(
    "amount",
    "amount of voting power to give",
    "110000",
    types.string,
  )
  .setAction(async (taskArgs: { address: string; amount: string }) => {
    const { address, amount } = taskArgs;
    console.log("funding: ", address);
    console.log("with: ", amount);

    if (!GOERLI_DEPLOYER_PRIVATE_KEY) {
      console.log("ERROR: no private key provided for proposer");
      return;
    }

    const goerliProvider = new providers.JsonRpcProvider(
      ALCHEMY_GOERLI_RPC_HOST,
    );
    const owner = new ethers.Wallet(
      GOERLI_DEPLOYER_PRIVATE_KEY,
      goerliProvider,
    );

    console.log("elementToken", elementToken);
    console.log("lockingVault", lockingVault);
    const tokenContract = ERC20PermitWithMint__factory.connect(
      elementToken,
      owner,
    );
    const lockingVaultContract = LockingVault__factory.connect(
      lockingVault,
      owner,
    );

    const amountBN = parseEther(amount);

    console.log("minting");
    await tokenContract.mint(address, amountBN);
    console.log("depositing");
    const tx = await lockingVaultContract.deposit(address, amountBN, address);
    console.log("transaction: ", `https://goerli.etherscan.io/tx/${tx.hash}`);
    console.log("done!");
  });

task("removeGrant", "removes a grant from the vesting vault")
  .addParam(
    "address",
    "wallet address to give voting power to",
    undefined,
    types.string,
  )
  .setAction(async (taskArgs: { address: string }) => {
    const { address } = taskArgs;

    if (!GOERLI_DEPLOYER_PRIVATE_KEY) {
      console.log("ERROR: no private key provided for proposer");
      return;
    }

    const goerliProvider = new providers.JsonRpcProvider(
      ALCHEMY_GOERLI_RPC_HOST,
    );

    const owner = new ethers.Wallet(
      GOERLI_DEPLOYER_PRIVATE_KEY,
      goerliProvider,
    );

    const vestingVaultContract = VestingVault__factory.connect(
      vestingVault,
      owner,
    );

    // const multiplier = await vestingVaultContract.unvestedMultiplier();
    // console.log('multiplier', multiplier);

    console.log("removing grant");
    const tx = await vestingVaultContract.removeGrant(address);
    console.log("transaction: ", `https://goerli.etherscan.io/tx/${tx.hash}`);
    console.log("done!");
  });
