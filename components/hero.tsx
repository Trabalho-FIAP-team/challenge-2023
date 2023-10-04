import {cn} from "@/lib/utils";
import * as React from "react";
import Image from "next/image";

const Hero = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
    <div className={cn("flex justify-center items-center space-x-40", className)} ref={ref}>
      <div>
        <div className="flex">
          <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-5xl ">
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-lime-600 from-lime-500 md:text-5xl lg:text-8xl">EcoConnect</span><br/>Cultivando Relações.</h1>
        </div>
        <p className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">Onde as relações interpessoais se fortalecem e a <br/>consciência ambiental cresce!</p>
      </div>
      <div className="flex justify-center items-center">
        <Image src="/images/blob-haikei (5).png" className="mt-20 w-5/12 absolute z-[-40]" alt="" width={200} height={200}/>
        <Image src="/images/3d1.png" className="w-80" alt="" width={200} height={200}/>
      </div>
    </div>
))

Hero.displayName="Hero"

export default Hero;