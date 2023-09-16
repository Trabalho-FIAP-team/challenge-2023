import {cn} from "@/lib/utils";
import * as React from "react";
import {SectionHeader, SectionSubtitle, SectionTitle} from "@/components/ui/section";
import {Bird, Hand} from "lucide-react";

const Hero = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
    <section className={cn("", className)}>

        <SectionHeader variant={"center"}>
            <SectionTitle>Sobre Nós</SectionTitle>
            <SectionSubtitle>A Ideologia que Impulsiona Nossa Empresa</SectionSubtitle>
        </SectionHeader>




        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">

            <div className="space-y-4">
                <Hand color="green" className="w-12 h-auto inline-block"  />
                <div className="flex flex-col gap-2">
                    <h3 className="text-2xl font-semibold leading-none tracking-tight mb-4">Quem somos</h3>
                    <p className="text-gray-600">Em um mundo de avanços constantes, a Schneider Electric se destaca como exemplo de inovação e sustentabilidade. Assim como a ciência e a tecnologia avançam, nossa missão é impulsionar o planeta em direção a um futuro mais verde e eficiente. Na Schneider Electric, não estamos apenas avançando na tecnologia; estamos revolucionando a maneira como o mundo encara a energia. É hora de atualizar para um futuro em que a sustentabilidade assuma o protagonismo, e a Schneider Electric é o seu guia.</p>
                </div>
            </div>

            <div className="space-y-4">
                <Bird color="green" className="w-12 h-auto"  />
                <div className="flex flex-col gap-2">
                    <h3 className="text-2xl font-semibold leading-none tracking-tight mb-4">Propósito</h3>
                    <p className="text-gray-600">Nosso propósito é possibilitar o máximo aproveitamento de nossa energia e de nossos recursos, garantindo progresso e sustentabilidade para todos. Chamamos isso de Life Is ON.</p>
                    <p className="text-gray-600">Somos a empresa global mais local. Somos defensores de normas abertas e ecossistemas de parcerias, e somos apaixonados por nosso Propósito Compartilhado, Inclusivo e Empoderado.</p>
                </div>
            </div>
        </div>
    </section>
))

export default Hero;