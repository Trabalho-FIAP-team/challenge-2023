'use client '

import { Github, Instagram } from "lucide-react";
import Link from "next/link";

interface TeamCardProps {
  name: string;
  memberRm: string;
  description: string;
  image: string;
  github: string;
  instagram?: string;
}

const TeamCard = ({ member }: { member: TeamCardProps }) => {
  return (
    <div className="w-65 p-2 dark:bg-muted-foreground/10 rounded-xl drop-shadow-lg shadow-md hover:shadow-2xl min-h-96 mb-10 transform transition-all hover:-translate-y-2 duration-300">
      <div className="flex justify-center mt-3 mb-2">
        <img className="h-40 object-cover rounded-xl" src={member.image} alt="Imagem teamMember" />
      </div>
      <div className="p-2 text-center">
        <h2 className="font-bold text-lg mb-2">{member.name} | RM: {member.memberRm}</h2>
        <p className="text-sm text-gray-600 dark:text-gray-300 ">{member.description}</p>
      </div>
      <div className="mb-1 mt-2 mx flex justify-around w-full text-center p-2 gap-x-2">
        <Link href={member.github ? `https://github.com/${member.github}` : '#'} target="_blank"
          className="min-w-[50%] h-12 py-1 rounded-md bg-gray-100 shadow-md hover:bg-gray-200 dark:bg-muted-foreground/20 flex justify-center items-center">
          <Github />
        </Link>
        <Link 
          href={member.instagram ? `https://instagram.com/${member.instagram}` : '#'}
          className="min-w-[50%] h-12 py-1 rounded-md bg-gray-100 hover:bg-gray-200 dark:bg-muted-foreground/20 flex justify-center items-center">
          <Instagram />
        </Link>
      </div>
    </div>
  );
}

export default TeamCard;