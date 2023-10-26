import { events } from "@/data"
import { NotificationCard } from "@/app/(root)/(routes)/events/[eventTitle]/[eventId]/components/notification-card";
import Image from "next/image";
import BackButton from "@/components/back-button";

interface EventIdProps {
  params: {
    eventId: string,
    eventTitle: string,
  }
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

  function getImageByEventId(eventId: string): string | undefined {
    const event = events.find((e) => e.eventId === eventId);
    return event ? event.eventImage : undefined;
  }

  function getTextByEventId(eventId: string): string | undefined {
    const event = events.find((e) => e.eventId === eventId);
    return event ? event.eventText : undefined;
  }

  const image: string = getImageByEventId(params.eventId) || '';

  return (
    <div>
      <BackButton />
        <div className="flex justify-center items-center">
          <Image
            className="rounded-xl"
            src={image}
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
                {getTextByEventId(params.eventId)}
                {getTextByEventId(params.eventId)}
              </p>
            </div>
            <div className="flex justify-center">
              <NotificationCard eventTitle={decodeString(params.eventTitle)} />
            </div>
          </div>
        </div>
      </div>
  );
}

export default EventIdPage;
