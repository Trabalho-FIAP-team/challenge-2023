import * as React from "react";
import {cn} from "@/lib/utils";
import {BadgeCheck} from "lucide-react";
import {Logo} from "@/components/logo";
import {SectionTitle} from "@/components/ui/section";

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
        <section className={cn("flex flex-col md:flex-row items-center gap-8 md:gap-20 xl:gap-36", className)}>
            <div className="w-full md:w-6/12 xl:pl-36">
                <img src={"/images/learn-with-us.svg"} className="w-full" alt="Learn with us" />
            </div>
            <div className="md:w-6/12">
                <div className="flex items-center gap-2 mb-4">
                    <span className="text-gray-600">Sobre</span>
                    <Logo />
                </div>

                <SectionTitle className="mb-8">Aprendendo com EcoConnect</SectionTitle>

                <ul className="space-y-6">
                    {data.map((item, index) => (
                        <li className="flex items-center flex-row gap-2" key={index}>
                            <BadgeCheck color="green" />
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
})

export default LearnWithUs;