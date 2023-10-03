'use client'

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import EventAvatar from "./event-avatar";
import { Button } from "@/components/ui/button";
import { Event } from "@/types";
import Image from "next/image";

type EventCardProps = Event;

const EventCard = ({ event }: { event: EventCardProps }) => {

  return (
    <div className="rounded-xl border bg-muted-foreground/10 transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl ">
      <div>
          <Image 
            className="h-40 w-full object-cover rounded-t-xl border-b-4 border-lime-600" 
            src={event.thumb}
            alt="Imagem do Evento"
            width={300}
            height={200}
          />
        </div>
        <div className="p-4">
          <h2 className="font-bold text-lg truncate">{event.eventTitle}</h2>
          <p className="text-sm text-gray-600 dark:text-gray-100 line-clamp-2">{event.eventText}</p>
          <div className="flex items-center mt-4 space-x-2">
            <EventAvatar />
            <h2 className="text-sm font-medium text-black dark:text-gray-100 "> {event.eventAuthor} | {event.eventData}</h2>
          </div>
          <Link
            className="mt-7 flex justify-start"
            href={`/events/${event.eventTitle}/${event.eventId}`}
          >
            <Button variant={"outline"}>
              Saber mais <ArrowRight />
            </Button>
          </Link>
        </div>

    </div>
  );
};

export default EventCard;