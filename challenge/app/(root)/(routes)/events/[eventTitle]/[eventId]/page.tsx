
interface EventIdProps {
    params: {
      eventId: string,
      eventTitle: string
    }
  }
  

  function decodeString(inputString: string) {
    try {
        const decodedString = decodeURIComponent(inputString);
        return decodedString;
    } catch (error) {
        console.error(`Erro ao decodificar a string: ${error}`);
        return null;
    }
}


const EventIdPage = ({ params }: EventIdProps)  => {

    return (
        <>
          <h1 className="mt-20 mb-6 text-3xl font-extrabold text-gray-900 flex justify-center dark:text-white md:text-5xl lg:text-5xl" >{decodeString(params.eventTitle)}</h1>
        </>
    );
}

export default EventIdPage;