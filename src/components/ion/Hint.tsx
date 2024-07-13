// ion/Hint: Generated with Ion on 7/12/2024, 8:42:14 AM
import { Info } from "@phosphor-icons/react";
import clsx from "clsx";

/* ---------------------------------- Type --------------------------------- */

interface HintProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Display hint icon to the left of the hint
   * @default false
   */
  showIcon?: boolean;
  /** Display the hint with an error state */
  error?: boolean | string;
  /** Display the hint with a disabled state */
  disabled?: boolean;
}

/* ---------------------------------- Component --------------------------------- */

function Hint({ className, children, error, showIcon = false, disabled, ...props }: HintProps) {
  return (
    <p
      className={clsx(
        "flex items-center gap-2.5 text-xs",
        {
          "text-danger": error,
          "text-sub": !error && !disabled,
          "text-on-disabled": disabled,
        },
        className
      )}
      {...props}
    >
      {showIcon && <Info className="h-4 w-4" />}
      {children}
    </p>
  );
}

export default Hint;
