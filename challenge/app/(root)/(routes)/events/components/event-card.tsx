'use client'

import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface EventCardProps {
  imagem: string;
  eventTitle: string;
  eventText: string;
  eventId: string;
}

const EventCard = ({ event }: { event: EventCardProps }) => {
  return (
    <div className="w-65 p-2 bg-muted-foreground/10 rounded-xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl ">
        <img 
          className="h-40 w-full object-cover rounded-xl" 
          src={`https://picsum.photos/${event.imagem}`} 
          alt="Imagem do Evento"
        />
        <div className="p-2">
          <h2 className="font-bold text-lg mb-2 ">{event.eventTitle}</h2>
          <p className="text-sm text-gray-600 dark:text-gray-100 truncate">{event.eventText}</p>
        </div>
        <div></div>
        <div className="m-2 flex justify-end">
          <Link
            className="text-white bg-lime-600 px-2 py-1 rounded-md hover:bg-lime-700 w-full flex justify-center"
            href={`/events/${event.eventTitle}/${event.eventId}`}>
             Saber mais <ArrowRight />
          </Link>
        </div>
    </div>
  );
};

export default EventCard;