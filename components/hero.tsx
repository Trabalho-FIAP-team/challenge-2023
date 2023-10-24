import { cn } from "@/lib/utils";
import * as React from "react";
import Image from "next/image";

const Hero = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div className={cn("flex justify-center items-center lg:space-x-10 xl:space-x-40", className)} ref={ref}>
    <div>
      <div className="flex mt-[-15%]">
        <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl xl:text-5xl ">
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-lime-600 from-lime-500 sm:text-4xl md:text-5xl lg:text-8xl">EcoConnect</span><br />Cultivando Relações!</h1>
      </div>
      <p className="text-sm font-normal text-gray-500 xl:text-xl dark:text-gray-400">Onde as relações interpessoais se fortalecem e a <br />consciência ambiental cresce.</p>
    </div>
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <Image
        alt="Hero Image"
        src={'/images/3d1.png'}
        width={400}
        height={400}
      />
    </div>
  </div>
))

Hero.displayName = "Hero"

export default Hero;