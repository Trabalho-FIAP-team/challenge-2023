import {cva, VariantProps} from "class-variance-authority";
import * as React from "react";
import {cn} from "@/lib/utils";
import {buttonVariants} from "@/components/ui/button";
import {CloseIcon} from "next/dist/client/components/react-dev-overlay/internal/icons/CloseIcon";

const chipVariants = cva(
    "flex justify-center items-center m-1 font-medium py-2 px-3 rounded-full border",
    {
        variants: {
            variant: {
                default: "border-gray-200 hover:bg-gray-100 bg-gray-50 text-gray-700 transition hover:scale-105 ",
            },
            size: {
                xs: "text-xs",
                default: "text-base",
                lg: "text-lg",
            }
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    }
)

export interface ChipProps
    extends React.ButtonHTMLAttributes<HTMLDivElement>,
        VariantProps<typeof chipVariants> {
    close?: boolean
}

const Chip = React.forwardRef<HTMLDivElement, ChipProps>(
({ className, children, close = false, variant, size, ...props }, ref) => {
    return (
        <div className={cn(chipVariants({ variant, size, className }))}>
            <div className="font-normal leading-none max-w-full flex-initial">{children}</div>
            { close && (
                <div className="flex flex-auto flex-row-reverse">
                    <CloseIcon />
                </div>
            )}
        </div>
    )
})

export {
    Chip
};