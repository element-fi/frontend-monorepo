import { ethers } from "ethers";
import { Logger } from "ethers/lib/utils";
import { Provider } from "@ethersproject/providers";
import {
  VestingVault,
  VestingVault__factory,
} from "@elementfi/council-typechain";
import { VotingVaultContract } from "./VotingVaultContract";
import { VoterWithPower } from "./VotingVaultDataSource";

// TODO: implement Dataloader (https://github.com/graphql/dataloader)
export class VestingVaultContract extends VotingVaultContract {
  contract: VestingVault;

  constructor(address: string, provider: Provider) {
    const contract = VestingVault__factory.connect(address, provider);
    super(address, contract);
    this.contract = contract;
  }

  async getBalance(voter: string): Promise<string> {
    try {
      const grants = await this.contract.functions.getGrant(voter);
      return grants[0].toString();
    } catch (err) {
      // TODO: Handle error
      return "0";
    }
  }

  async getVotingPowerView(
    voter: string,
    blockNumber: number,
  ): Promise<string> {
    try {
      // TODO: find a better solution for this.
      // ethers.js will spit out an error message that we can't disable without turning off the
      // logger.  because the smart contract code for queryVotePower returns an error if the
      // account is not found, it can flood the console with errors.  this is a workaround until a
      // better solution is found.
      ethers.utils.Logger.setLogLevel(Logger.levels.OFF);
      const votePower = await this.contract.callStatic.queryVotePowerView(
        voter,
        blockNumber,
      );
      ethers.utils.Logger.setLogLevel(Logger.levels.WARNING);
      return votePower.toString();
    } catch (error) {
      // TODO: how should dataSource errors be handled?
      if (process.env.NODE_ENV === "development") {
        console.error(error);
      }
      return "0";
    }
  }

  async getAllVotersWithPower(
    fromBlock?: string | number,
    toBlock?: string | number,
  ): Promise<VoterWithPower[]> {
    const powersByVoter: Record<string, bigint> = {};
    const voteChangeEvents = await this.contract.queryFilter(
      this.contract.filters.VoteChange(),
      fromBlock,
      toBlock,
    );
    for (const { args } of voteChangeEvents) {
      const { to, amount } = args;
      powersByVoter[to] = powersByVoter[to] || BigInt(0);
      powersByVoter[to] += amount.toBigInt();
    }
    return Object.entries(powersByVoter)
      .filter(([, power]) => power > 0)
      .map(([voter, power]) => ({
        voter,
        power: power.toString(),
      }));
  }
}
