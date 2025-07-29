// Tremor Select [v1.0.0]

import { RiExpandUpDownLine } from "@remixicon/react"
import React from "react"
import { tv, type VariantProps } from "tailwind-variants"

import { cx, focusInput, hasErrorInput } from "@/lib/utils"

const selectStyles = tv({
  base: [
    // base
    "relative block w-full appearance-none rounded-md border px-2.5 py-2 shadow-sm outline-none transition sm:text-sm",
    // border color
    "border-border",
    // text color
    "text-foreground",
    // background color
    "bg-background",
    // disabled
    "disabled:border-border disabled:bg-muted disabled:text-muted-foreground",
    // focus
    focusInput,
    // hide default arrow completely across all browsers
    "appearance-none bg-none",
    // additional browser-specific hiding
    "[&::-ms-expand]:hidden",
  ],
  variants: {
    hasError: {
      true: hasErrorInput,
    },
  },
})

interface SelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement>,
    VariantProps<typeof selectStyles> {
  selectClassName?: string
}

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      className,
      selectClassName,
      hasError,
      children,
      ...props
    }: SelectProps,
    forwardedRef,
  ) => {
    return (
      <div className={cx("relative w-full", className)} tremor-id="tremor-raw">
        <select
          ref={forwardedRef}
          className={cx(
            selectStyles({ hasError }),
            "pr-8", // space for custom arrow
            selectClassName,
          )}
          {...props}
        >
          {children}
        </select>
        <div
          className={cx(
            "pointer-events-none absolute bottom-0 right-2 flex h-full items-center justify-center",
            // text color
            "text-muted-foreground",
          )}
        >
          <RiExpandUpDownLine
            className="size-4 shrink-0"
            aria-hidden="true"
          />
        </div>
      </div>
    )
  },
)

Select.displayName = "Select"

export { Select, selectStyles, type SelectProps } 