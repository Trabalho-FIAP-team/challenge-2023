
import { team } from "@/data";
import TeamCard from "./components/team-card";
import {Button} from "@/components/ui/button";
import {ArrowRight} from "lucide-react";
import {Chip} from "@/components/ui/chip";

const fictionalCountries = [
	"Novaria",
	"Zephyria",
	"Aquilonia",
	"Verdantia",
	"Solara"
];

const AboutPage = () => {
    return (
		<section className="space-y-12">
			<h1 className="justify-start  text-3xl font-extrabold text-gray-900 flex dark:text-white md:text-5xl lg:text-5xl">Sobre Nós </h1>

			<span>ESCREVER UM TEXTAO SUPER FODA APRESENTATIVO SOBRE A SCHNEIDER AQUI</span>
			<article className="space-y-6">
				<h2 className="justify-start text-2xl font-bold text-gray-900 flex dark:text-white md:text-3xl lg:text-3xl border-b-2">
					Staff
				</h2>

				<p className="text-gray-700">
					Conheça nossos incríveis profissionais
				</p>

				<div className=' mt-12 grid md:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-5 sm:grid-cols-1 gap-10 '>
					{team.map((member) => (
						<div key={member.name}>
							<TeamCard member={member} />
						</div>
					))}
				</div>

				<Button variant={"default"}>
					Trabalhe conosco <ArrowRight className="ml-2"/>
				</Button>
			</article>

			<article className="space-y-6">
				<h2 className="justify-start text-2xl font-bold text-gray-900 flex dark:text-white md:text-3xl lg:text-3xl border-b-2">
					Nossos escritórios
				</h2>

				<p className="text-gray-700">
					Na Schneider Electric, acreditamos que o talento é a chave para impulsionar a inovação e moldar o futuro.
					Se você é apaixonado por desafios, está comprometido com a excelência e deseja fazer parte de uma equipe global que está
					transformando o mundo da energia e automação, então você está no lugar certo.
				</p>

				<p className="text-gray-700">
					Cada um de nossos escritórios é um ambiente vibrante e colaborativo, onde profissionais talentosos se reúnem para enfrentar os
					desafios mais complexos da indústria. Em todos os cantos do globo, estamos comprometidos com a criação de soluções que impulsionam o
					progresso e promovem um futuro mais verde e conectado.
				</p>

				<p className="font-medium">
					Visite-nos em:
				</p>

				<div className="flex items-center gap-2 flex-wrap mb-4">
					{fictionalCountries.map((country, index) => (
						<Chip className="cursor-pointer" key={index}>
							{country}
						</Chip>
					))}
				</div>
			</article>
		</section>
    );
}

export default AboutPage;