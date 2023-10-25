import * as React from "react"
import * as PopoverPrimitive from "@radix-ui/react-popover"
import { cva } from "class-variance-authority"
import { ChevronDown } from "lucide-react"

import { cn } from "@/lib/utils"

const Popover = PopoverPrimitive.Root

const PopoverTrigger = React.forwardRef<
    React.ElementRef<typeof PopoverPrimitive.Trigger>,
    React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Trigger>
>(({ className, children, ...props }, ref, asChild = true) => (
    <PopoverPrimitive.Trigger
        ref={ref}
        className={cn(
            className
        )}
        {...props}
        asChild={asChild}
    >
        {children}

    </PopoverPrimitive.Trigger>
))
PopoverTrigger.displayName = PopoverPrimitive.Trigger.displayName

const PopoverPortal = PopoverPrimitive.Portal

const PopoverContent = React.forwardRef<
    React.ElementRef<typeof PopoverPrimitive.Content>,
    React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Content>
>(({ className, children, ...props }, ref) => (
    <PopoverPrimitive.Content
        ref={ref}
        className={cn(
            "flex w-full items-center justify-between rounded-md border border-input bg-background px-2 py-2 text-sm ring-offset-background",
            className
        )}
        {...props}
    >
        {children}

    </PopoverPrimitive.Content>
))
PopoverContent.displayName = PopoverPrimitive.Portal.displayName

const PopoverClose = React.forwardRef<
    React.ElementRef<typeof PopoverPrimitive.Close>,
    React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Close>
>(({ className, children, ...props }, ref) => (
    <PopoverPrimitive.Close
        ref={ref}
        className={cn(
            className
        )}
        {...props}
    >
        {children}

    </PopoverPrimitive.Close>
))
PopoverClose.displayName = PopoverPrimitive.Close.displayName

export {
    Popover,
    PopoverTrigger,
    PopoverPortal,
    PopoverContent,
    PopoverClose
}