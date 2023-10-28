"use client"
import { NotificationCard } from "@/app/(root)/(routes)/events/[eventTitle]/[eventId]/components/notification-card";
import Image from "next/image";
import BackButton from "@/components/back-button";
import axios from "axios";
import { useEffect, useState } from "react";
import { Event } from '@prisma/client'

interface IEventIdParams {
eventId: string,
 eventTitle: string,
}

interface EventIdProps {
  params: IEventIdParams
}

export interface IEventData extends IEventIdParams {
  text: string;
  image: string
}

const EventIdPage = ({ params }: EventIdProps) => {
  function decodeString(inputString: string) {
    try {
      const decodedString = decodeURIComponent(inputString);
      return decodedString;
    } catch (error) {
      console.error(`Erro ao decodificar a string: ${error}`);
      return null;
    }
  }

  const [event, setEvent] = useState<IEventData>({} as IEventData)

  useEffect(() => {
    if(!event?.text) {
      axios.get<Event>(`/api/events/${params.eventId}`).then((eventResponse) => {
        if(eventResponse.data) {
          const eventData = eventResponse.data;
          setEvent({
            eventId: eventData.id,
            eventTitle: eventData.title,
            image: eventData.image,
            text: eventData.text,
          })
        }
      }).catch(console.log)
    }
  }, [])

  return (
    <div>
      <BackButton />
        <div className="flex justify-center items-center">
          <Image
            className="rounded-xl"
            src={event.image}
            alt='Imagem EventId'
            width={1520}
            height={200}
          />
        </div>

        <div className="flex items-center justify-center">
          <div className="lg:mx-40 mt-12 grid md:grid-cols-3 sm:grid-cols-1 gap-10">
            <div className="col-span-2">
              <h1 className="mt-4 mb-3 text-2xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-4xl md:text-left text-center">
                {decodeString(params.eventTitle)}
              </h1>
              <p className="text-sm text-gray-600 dark:text-gray-400 text-center md:text-left overflow-hidden">
                {event.text}
              </p>
            </div>
            <div className="flex justify-center items-center ml-8 w-full">
              <NotificationCard eventTitle={decodeString(params.eventTitle)} eventId={params.eventId} />
            </div>
          </div>
        </div>
      </div>
  );
}

export default EventIdPage;
