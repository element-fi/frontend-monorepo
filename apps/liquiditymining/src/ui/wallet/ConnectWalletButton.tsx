import classNames from "classnames";
import React, { Fragment, ReactElement, useCallback, useState } from "react";
import Button from "src/ui/base/Button/Button";
import { ButtonVariant } from "src/ui/base/Button/styles";
import { ConnectWalletDialog } from "src/ui/wallet/ConnectWalletDialog";
import { WalletJazzicon } from "src/ui/wallet/WalletJazzicon";
import { formatWalletAddress } from "src/formatWalletAddress";
import { t } from "ttag";
import { Provider } from "@ethersproject/providers";
import { useEnsName } from "src/ui/ethereum/useEnsName";

interface WalletProfileButtonProps {
  account: string | null | undefined;
  provider: Provider | undefined;
  walletConnectionActive: boolean | undefined;
  className?: string;
  variant?: ButtonVariant;
}

export function WalletProfileButton(
  props: WalletProfileButtonProps,
): ReactElement {
  const {
    account,
    variant = ButtonVariant.MINIMAL,
    className,
    provider,
  } = props;
  const [isWalletDialogOpen, setWalletDialogOpen] = useState(false);
  const onCloseWalletDialog = useCallback(() => setWalletDialogOpen(false), []);
  const onOpenWalletDialog = useCallback(() => setWalletDialogOpen(true), []);
  const { data: ensName } = useEnsName(account, provider);

  return (
    <div className={classNames(className, "flex items-center space-x-8")}>
      {!account ? (
        <ConnectWalletButton />
      ) : (
        <div>
          <Button variant={variant} onClick={onOpenWalletDialog}>
            <WalletJazzicon size={28} account={account} className="mr-4" />
            {ensName || formatWalletAddress(account)}
          </Button>
        </div>
      )}
      <ConnectWalletDialog
        isOpen={isWalletDialogOpen}
        onClose={onCloseWalletDialog}
      />
    </div>
  );
}

export function ConnectWalletButton({
  className,
  label = t`Connect Wallet`,
  variant = ButtonVariant.OUTLINE_BLUE,
  onClick,
}: {
  className?: string;
  label?: string;
  variant?: ButtonVariant;
  onClick?: () => void;
}): ReactElement {
  const [isWalletDialogOpen, setWalletDialogOpen] = useState(false);
  const handleCloseWalletDialog = useCallback(
    () => setWalletDialogOpen(false),
    [],
  );
  const handleButtonClick = useCallback(() => {
    onClick?.();
    setWalletDialogOpen(true);
  }, [onClick]);

  return (
    <Fragment>
      <Button
        className={className}
        variant={variant}
        onClick={handleButtonClick}
      >
        {label}
      </Button>
      <ConnectWalletDialog
        isOpen={isWalletDialogOpen}
        onClose={handleCloseWalletDialog}
      />
    </Fragment>
  );
}
