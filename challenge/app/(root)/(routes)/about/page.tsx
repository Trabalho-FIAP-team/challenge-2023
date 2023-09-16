
import { team } from "@/data";
import TeamCard from "./components/team-card";

const AboutPage = () => {
    return (
			<main className=''>
			<h1 className="mt-20 justify-start ml-40 text-3xl font-extrabold text-gray-900 flex dark:text-white md:text-5xl lg:text-5xl">Sobre o Projeto</h1>
			<div className='mx-40 mt-12 grid flex-wrap md:grid-cols-2 lg:grid-cols-4 sm:grid-cols-1 gap-10 '>
				{team.map((member) => (
					<div key={member.name}>
						<TeamCard member={member} />
					</div>
				))}
				</div>
		</main>
    );
}

export default AboutPage;