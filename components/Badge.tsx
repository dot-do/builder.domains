import React from "react"

interface BadgeProps extends React.ComponentPropsWithoutRef<"span"> {}

const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ children, className, ...props }: BadgeProps, forwardedRef) => {
    return (
      <span
        ref={forwardedRef}
        className="z-10 block w-fit rounded-lg border border-primary/20 bg-primary/10 px-3 py-1.5 font-display font-semibold uppercase leading-4 tracking-tighter sm:text-sm"
        {...props}
      >
        <span className="bg-gradient-to-b from-primary to-primary-600 bg-clip-text text-transparent">
          {children}
        </span>
      </span>
    )
  },
)

Badge.displayName = "Badge"

export { Badge, type BadgeProps }
