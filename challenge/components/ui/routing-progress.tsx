"use client"

import {Next13ProgressBar} from "next13-progressbar";
import * as React from "react";

const RoutingProgress = React.forwardRef<
    React.ElementRef<typeof Next13ProgressBar>,
    React.ComponentPropsWithoutRef<typeof Next13ProgressBar>
>(({...props}, ref) => (
    <Next13ProgressBar {...props} />
))
RoutingProgress.displayName = "RoutingProgress";

export {
    RoutingProgress
}