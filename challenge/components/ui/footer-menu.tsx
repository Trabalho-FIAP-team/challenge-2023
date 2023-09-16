import * as React from "react"

import { cn } from "@/lib/utils"
import {NavigationMenu} from "@/components/ui/navigation-menu";

const FooterMenu = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => (
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
FooterMenu.displayName = "FooterMenu";

const FooterMenuList = React.forwardRef<
    HTMLUListElement,
    React.HTMLAttributes<HTMLUListElement>
>(({ className, children, ...props }, ref) => (
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
FooterMenuList.displayName = "FooterMenuList";

const FooterMenuTitle = React.forwardRef<
    HTMLLIElement,
    React.HTMLAttributes<HTMLLIElement>
>(({ className, children, ...props }, ref) => (
    <li ref={ref} className={cn("font-medium text-black dark:text-white", className)}
        {...props}
    >
        {children}
    </li>
))
FooterMenuTitle.displayName = "FooterMenuTitle";

const FooterMenuItem = React.forwardRef<
    HTMLLIElement,
    React.HTMLAttributes<HTMLLIElement>
>(({ className, children, ...props }, ref) => (
    <li ref={ref} className={cn("cursor-pointer dark:text-neutral-400 text-gray-900 transition hover:opacity-75", className)}
        {...props}
    >
        {children}
    </li>
))
FooterMenuItem.displayName = "FooterMenuItem";

const FooterMenuLink = React.forwardRef<
    HTMLSpanElement,
    React.HTMLAttributes<HTMLSpanElement>
>(({ className, children, ...props }, ref) => (
    <span ref={ref} className={cn(className)}
        {...props}
    >
        {children}
    </span>
))
FooterMenuLink.displayName = "FooterMenuLink";

export {
    FooterMenu,
    FooterMenuList,
    FooterMenuTitle,
    FooterMenuItem,
    FooterMenuLink
}
