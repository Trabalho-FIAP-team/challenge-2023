import * as React from "react";
import {cn} from "@/lib/utils";
import {cva, VariantProps} from "class-variance-authority";

const sectionHeaderVariants = cva(
    "space-y-4 mb-12",
    {
        variants: {
            variant: {
                default: "",
                center: "w-full text-center",
            },
        },
        defaultVariants: {
            variant: "default",
        },
    }
)

interface SectionHeaderProps
    extends React.ButtonHTMLAttributes<HTMLDivElement>,
        VariantProps<typeof sectionHeaderVariants> {}

const SectionHeader = React.forwardRef<
    HTMLDivElement,
    SectionHeaderProps
>(({ className, variant, children, ...props }, ref) => (
    <div
        ref={ref}
        className={cn(sectionHeaderVariants({ variant, className }))}
        {...props}
    >
        {children}
    </div>
))
SectionHeader.displayName = "SectionHeader";

const SectionTitle = React.forwardRef<
    HTMLHeadingElement,
    React.HTMLAttributes<HTMLHeadingElement>
>(({ className, children, ...props }, ref) => (
    <h2
        ref={ref}
        className={cn(
            "text-3xl font-semibold leading-none tracking-tight",
            className
        )}
        {...props}
    >{children}</h2>
))
SectionTitle.displayName = "SectionTitle";

const SectionSubtitle = React.forwardRef<
    HTMLHeadingElement,
    React.HTMLAttributes<HTMLHeadingElement>
>(({ className, children, ...props }, ref) => (
    <h2
        ref={ref}
        className={cn(
            "text-xl text-gray-600 dark:text-gray-400 leading-none tracking-tight",
            className
        )}
        {...props}
    >{children}</h2>
))
SectionSubtitle.displayName = "SectionSubtitle";

export {
    SectionHeader,
    SectionSubtitle,
    SectionTitle
}