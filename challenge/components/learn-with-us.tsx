import * as React from "react";
import { cn } from "@/lib/utils";
import { BadgeCheck } from "lucide-react";
import { Logo } from "@/components/logo";
import { SectionTitle } from "@/components/ui/section";

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
        <section className={cn("flex border-b-2 border-t-2 flex-col md:flex-row items-center gap-8 md:gap-20 xl:gap-36", className)}>
            <div className="md:w-6/12  lg:ml-64">
                <div className="flex items-center gap-2 mb-4">
                    <span className="text-gray-600 dark:text-gray-400">Sobre</span>
                    <Logo />
                </div>

                <SectionTitle className="mb-8">Aprendendo com EcoConnect</SectionTitle>

                <ul className="space-y-6">
                    {data.map((item, index) => (
                        <li className="flex items-center flex-row gap-2" key={index}>
                            <BadgeCheck color="#7AAC00" />
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="w-full md:w-6/12 flex justify-center itms-center mb-16 mt-12 mr-64">
                <img src={"/images/blob-haikei (3).png"} className="w-5/12 absolute z-[-40]" alt="Learn with us" />
                <img src={"/images/3d2.png"} className="w-72" alt="Learn with us" />
            </div>

        </section>
    )
})

export default LearnWithUs;