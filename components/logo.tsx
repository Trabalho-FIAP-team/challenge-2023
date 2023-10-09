import Image from "next/image";
import * as React from "react";

export const Logo = () => (
    <div className={"md:block text-xl md:text-3xl font-bold text-primary"}>
        <Image src="/images/logo.png" width={96} height={32} alt="Schneider Electric" />
    </div>
)