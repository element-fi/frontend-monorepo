import { ReactElement } from "react";
import { commify } from "ethers/lib/utils";
import {
  ElementIconCircle,
  IconSize,
} from "src/ui/base/ElementIconCircle/ElementIconCircle";
import classNames from "classnames";

interface ElfiProps {
  className?: string;
  amount?: number | string;
}

export const Elfi = ({ className, amount = 0 }: ElfiProps): ReactElement => {
  return (
    <span className={classNames("inline-flex items-center gap-1", className)}>
      <ElementIconCircle inline size={IconSize.SMALL} />
      <span>{commify((+amount || 0).toFixed(2))}</span>
    </span>
  );
};
