import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
    "absolute inline-flex items-center justify-center text-xs font-bold text-white border-2 border-white rounded-full -top-2 -right-2 dark:border-gray-900",
    {
        variants: {
            variant: {
                default: "bg-lime-600",
                danger: "bg-red-500",
            },
            size: {
                default: "w-6 h-6",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    }
)

export interface BadgeProps
    extends React.HTMLAttributes<HTMLSpanElement>,
        VariantProps<typeof badgeVariants> {
    value: number;
}

const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
    ({ className, variant, size, value, ...props }, ref) => {
        return (
            <span
                className={cn(badgeVariants({ variant, size, className }))}
                ref={ref}
                {...props}
            >{value}</span>
        )
    }
)
Badge.displayName = "Button"

export { Badge, badgeVariants }
