// Tremor RadioGroup [v0.0.2]

import * as RadioGroupPrimitives from "@radix-ui/react-radio-group"
import React from "react"

import { cx, focusRing } from "@/lib/utils"

const RadioGroup = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitives.Root>
>(({ className, ...props }, forwardedRef) => {
  return (
    <RadioGroupPrimitives.Root
      ref={forwardedRef}
      className={cx("grid gap-2", className)}
      tremor-id="tremor-raw"
      {...props}
    />
  )
})

RadioGroup.displayName = "RadioGroup"

const RadioGroupIndicator = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitives.Indicator>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitives.Indicator>
>(({ className, ...props }, forwardedRef) => {
  return (
    <RadioGroupPrimitives.Indicator
      ref={forwardedRef}
      className={cx("flex items-center justify-center", className)}
      {...props}
    >
      <div
        className={cx(
          // base
          "size-1.5 shrink-0 rounded-full",
          // indicator
          "bg-white",
          // disabled
          "group-data-[disabled]:bg-muted-foreground",
        )}
      />
    </RadioGroupPrimitives.Indicator>
  )
})

RadioGroupIndicator.displayName = "RadioGroupIndicator"

const RadioGroupItem = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitives.Item>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitives.Item>
>(({ className, ...props }, forwardedRef) => {
  return (
    <RadioGroupPrimitives.Item
      ref={forwardedRef}
      className={cx(
        "group relative flex size-4 appearance-none items-center justify-center outline-none",
        className,
      )}
      {...props}
    >
      <div
        className={cx(
          // base
          "flex size-4 shrink-0 items-center justify-center rounded-full border shadow-sm",
          // border color
          "border-border",
          // text color
          "bg-background",
          // checked
          "group-data-[state=checked]:border-0 group-data-[state=checked]:border-transparent group-data-[state=checked]:bg-primary",
          // disabled
          "group-data-[disabled]:border group-data-[disabled]:border-border group-data-[disabled]:bg-muted group-data-[disabled]:text-muted-foreground",
          // focus
          focusRing,
        )}
      >
        <RadioGroupIndicator />
      </div>
    </RadioGroupPrimitives.Item>
  )
})

RadioGroupItem.displayName = "RadioGroupItem"

export { RadioGroup, RadioGroupItem }
