
import { events } from "@/data"

interface EventIdProps {
    params: {
      eventId: string,
      eventTitle: string,
    }
}

const EventIdPage = ({ params }: EventIdProps)  => {

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
      return event ? event.imagemEvent : undefined;
    }

    function getTextByEventId(eventId: string): string | undefined {
      const event = events.find((e) => e.eventId === eventId);
      return event ? event.eventText : undefined;
    }

    return (
        <div className="">
          <div className="flex justify-center items-center mt-20">
            <img 
              className="rounded-xl" 
              src={getImageByEventId(params.eventId)}
              alt='Imagem EventId'
            />
          </div>
          <div>
            <h1 className="mt-10 mb-3 text-3xl font-extrabold text-gray-900 ml-44 dark:text-white md:text-5xl lg:text-4xl" >
              {decodeString(params.eventTitle)}
            </h1>
            <p className="text-md text-gray-600 dark:text-gray-100 mx-44 text-left">
              {getTextByEventId(params.eventId)}
              {getTextByEventId(params.eventId)}
              {getTextByEventId(params.eventId)}
            </p>
          </div>

        </div>
    );
}

export default EventIdPage;