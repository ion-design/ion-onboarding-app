"use client";
// ion/Label: Generated with Ion on 7/12/2024, 8:42:14 AM
import * as LabelPrimitive from "@radix-ui/react-label";
import { cva } from "class-variance-authority";
import clsx from "clsx";
import * as React from "react";

/* ---------------------------------- Type --------------------------------- */

export interface LabelProps extends React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> {
  /** Display required mark to the right of the label */
  required?: boolean;
  /** Display the label with a disabled state */
  disabled?: boolean;
  /** Helper text, to the right of the label */
  helper?: string;
  /** Description below the label */
  description?: string;
  /** HTML ID of the description element */
  descriptionId?: string;
  /** Classname of the label container (use this to position the label) */
  className?: string;
  /** Classname of the label (use this to restyle the label) */
  labelClassName?: string;
}

/* ---------------------------------- Component --------------------------------- */

const labelVariants = cva("text-sm gap-1 font-semibold whitespace-nowrap peer-disabled:cursor-not-allowed peer-disabled:text-on-disabled");

const Label = React.forwardRef<React.ElementRef<typeof LabelPrimitive.Root>, LabelProps>(
  ({ disabled, description, helper, required, children, descriptionId, className, labelClassName, ...props }, ref) => {
    return (
      <div
        className={clsx(
          labelVariants(),
          {
            "text-on-disabled": disabled,
          },
          className
        )}
      >
        <LabelPrimitive.Root
          ref={ref}
          className={clsx(
            "flex flex-row items-center gap-x-0.5",
            {
              "pointer-events-none text-on-disabled": disabled,
            },
            labelClassName
          )}
          {...props}
        >
          {children}
          {required && <span className={disabled ? "text-on-disabled" : "text-primary"}>*</span>}
          {helper && (
            <span
              className={clsx("text-sm font-normal text-sub", {
                "text-on-disabled": disabled,
              })}
            >
              ({helper})
            </span>
          )}
        </LabelPrimitive.Root>
        <p id={descriptionId} className={clsx("text-sm font-normal", disabled ? "text-on-disabled" : "text-sub")}>
          {description}
        </p>
      </div>
    );
  }
);

Label.displayName = LabelPrimitive.Root.displayName;
export default Label;
