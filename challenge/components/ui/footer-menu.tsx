import * as React from "react"

import { cn } from "@/lib/utils"

const FooterMenu = React.forwardRef(({ className, children, ...props }, ref) => (
    <div ref={ref}
         className={cn(
            "grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-4",
            className
        )}
        {...props}
    >
        {children}
    </div>
))


const FooterMenuList = React.forwardRef(({ className, children, ...props }, ref) => (
    <ul
        ref={ref}
        className={cn(
            "mt-6 space-y-4 text-sm",
            className
        )}
        {...props}
    >
        {children}
    </ul>
))

const FooterMenuTitle = React.forwardRef(({ className, children, ...props }, ref) => (
    <li ref={ref} className={cn("font-medium text-black dark:text-white", className)}
        {...props}
    >
        {children}
    </li>
))

const FooterMenuItem = React.forwardRef(({ className, children, ...props }, ref) => (
    <li ref={ref} className={cn("cursor-pointer dark:text-neutral-400 text-gray-900 transition hover:opacity-75", className)}
        {...props}
    >
        {children}
    </li>
))

const FooterMenuLink = React.forwardRef(({ className, children, ...props }, ref) => (
    <span ref={ref} className={cn(className)}
        {...props}
    >
        {children}
    </span>
))

export {
    FooterMenu,
    FooterMenuList,
    FooterMenuTitle,
    FooterMenuItem,
    FooterMenuLink
}
