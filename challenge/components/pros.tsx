import * as React from "react";
import {cn} from "@/lib/utils";
import {Card, CardTitle, CardHeader, CardContent, CardDescription, CardIcon} from "@/components/ui/card";
import { HeartHandshake, Leaf, Speech, Trees, Users2 } from "lucide-react";

const Pros =  React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className }) => {

    const data = [
        {
            title: "Conexões fortes",
            description: "Acreditamos que relações colaborativas e harmoniosas são essenciais para um ambiente de trabalho saudável e produtivo",
            icon: <HeartHandshake className="w-10 h-10" />
        },
        {
            title: "Consciência Verde",
            description: "Procuramos elevar a consciência e a compreensão sobre questões ambientais",
            icon: <Leaf className="w-10 h-10" />
        },
        {
            title: "Inovação Sustentável",
            description: "Promovemos criatividade e soluções ecoconscientes, impulsionando um futuro mais verde.",
            icon: <Trees className="w-10 h-10" />
        },
        {
            title: "Juntos Pelo Bem",
            description: "Através de projetos e iniciativas conjuntas, buscamos causar um impacto positivo na comunidade e no meio ambiente",
            icon: <Users2 className="w-10 h-10" />
        }

    ]

    return (

        <div className={cn("grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-4", className)}>
            {data.map((item, index) => (
                <Card className="p-6 mt-12 bg-muted-foreground/10" key={index}>
                    <CardHeader className="items-center">
                        <CardIcon className="text-lime-600">
                            {item.icon}
                        </CardIcon>
                        <CardTitle>
                            {item.title}
                        </CardTitle>
                    </CardHeader>
                    <CardDescription className="text-center">
                        {item.description}
                    </CardDescription>
                </Card>
            ))}
        </div>
    );
})

export default Pros;