
import { events } from "@/data"
import { NotificationCard } from "@/components/notification-card";

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

  return (
    <div>

      <div className="flex justify-center items-center">
        <img
          className="rounded-xl "
          src={getImageByEventId(params.eventId)}
          alt='Imagem EventId'
        />
      </div>

      <div className="mx-40 mt-12 grid flex-wrap md:grid-cols-3 sm:grid-cols-1 gap-10 ">
        <div className="col-span-2">
          <h1 className="mt-4 mb-3 text-3xl font-extrabold text-gray-900 ml-8 dark:text-white md:text-5xl lg:text-4xl" >
            {decodeString(params.eventTitle)}
          </h1>
          <p className="text-md text-gray-600 dark:text-gray-100 ml-8 mr-10 text-left">
            {getTextByEventId(params.eventId)}
            {getTextByEventId(params.eventId)}
            {getTextByEventId(params.eventId)}
          </p>
        </div>
        <div className="flex justify-center">
          <NotificationCard />
        </div>
      </div>

    </div>
  );
}

export default EventIdPage;