import { QueryObserverResult } from "react-query";
import { useSmartContractReadCall } from "@elementfi/react-query-typechain";
import { gscVaultContract } from "src/elf/contracts";

export function useGSCIdleDuration(): QueryObserverResult<number> {
  return useSmartContractReadCall(gscVaultContract, "idleDuration", {
    select: (data) => data.toNumber(),
  });
}
