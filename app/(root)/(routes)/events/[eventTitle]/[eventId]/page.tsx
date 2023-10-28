"use client"

import { NotificationCard } from "@/app/(root)/(routes)/events/[eventTitle]/[eventId]/components/notification-card";
import Image from "next/image";
import BackButton from "@/components/back-button";
import { useEffect, useState } from "react";
import axios from "axios";
import {Event} from "@prisma/client";

interface EventIdProps {
  params: {
    eventId: string,
    eventTitle: string,
  }
}

const EventIdPage = ({ params }: EventIdProps) => {

  const [event, setEvent] = useState<Event | null>(null);

  useEffect(() => {
      axios.get(`/api/events/${params.eventId}`).then((response) => response.data).then((event) => {
          setEvent(event);
      }).catch((e) => console.error("Não foi possível carregar evento"));
  }, []);

  return (
      <div>
        {event && (
          <>
            <BackButton />
            
            <div className="flex justify-center items-center">
              <Image
                className="rounded-xl"
                src={event?.image}
                alt='Imagem EventId'
                width={1520}
                height={200}
              />
            </div>

            <div className="flex items-center justify-center">
              <div className="lg:mx-40 mt-12 grid md:grid-cols-3 sm:grid-cols-1 gap-10">
                <div className="col-span-2">
                  <h1 className="mt-4 mb-3 text-2xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-4xl md:text-left text-center">
                    {event?.title}
                  </h1>
                  <p className="text-sm text-gray-600 dark:text-gray-400 text-center md:text-left overflow-hidden">
                    {event?.text}
                  </p>
                </div>
                <div className="flex justify-center items-center ml-8 w-full">
                  <NotificationCard eventTitle={event.title} eventId={event.id} />
                </div>
              </div>
            </div>
          </>
        )}
      </div>

  );
}

export default EventIdPage;
