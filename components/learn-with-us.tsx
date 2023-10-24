import * as React from "react";
import { cn } from "@/lib/utils";
import { BadgeCheck } from "lucide-react";
import { Logo } from "@/components/logo";
import { SectionTitle } from "@/components/ui/section";
import Image from "next/image";

const LearnWithUs = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {

    const data = [
        "Ampliando a Visão Sustentável",
        "Tornando Cada Dia mais Eco-friendly",
        "Alinhando Valores para um Mundo Melhor",
        "Parcerias Sustentáveis ao Seu Alcance",
        "Descobrindo os Bastidores da Sustentabilidade",
        "Integrando Sustentabilidade em sua Rotina"
    ]

    return (
        <section className={cn("flex border-b-2 border-t-2 flex-col lg:flex-row items-center gap-8 md:gap-20 xl:gap-36 lg:px-12 xl:px-32 2xl:px-72 dark:p-4 dark:bg-lime-600 dark:rounded-lg " , className)} ref={ref}>
            <div className="lg:w-8/12 xl:w-6/12 ">
                <div className="flex items-center gap-2 mb-4">
                    <span className="dark:text-white">Sobre</span>
                    <Logo />
                </div>

                <SectionTitle className="mb-8 dark:text-white">Aprendendo com EcoConnect</SectionTitle>

                <ul className="space-y-6">
                    {data.map((item, index) => (
                        <li className="flex items-center flex-row gap-2" key={index}>
                            <BadgeCheck />
                            <p className="dark:text-white">{item}</p>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="mb-16 mt-12 ">
                <Image src={"/images/3d2.png"} alt="Learn with us" width={300} height={200} />
            </div>

        </section>
    )
})

LearnWithUs.displayName="LearnWithUs"

export default LearnWithUs;