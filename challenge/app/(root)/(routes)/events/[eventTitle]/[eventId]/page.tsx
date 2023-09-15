
interface EventIdProps {
    params: {
      eventId: string,
      eventTitle: string,
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
        <div>

          <div className="flex justify-center items-center mt-20">
            <img 
              className="rounded-xl" 
              src='https://picsum.photos/id/218/720/360'
              alt=""
            />
          </div>
          <div>
            <h1 className="mt-10 mb-6 text-3xl font-extrabold text-gray-900 flex justify-center dark:text-white md:text-5xl lg:text-5xl" >
              {decodeString(params.eventTitle)}
            </h1>
            <p className="text-sm text-gray-600 dark:text-gray-100 truncate">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam dicta sunt repudiandae obcaecati ipsa id, veniam deserunt dolore tenetur voluptas fugiat. Eaque optio fugit quibusdam quos laborum odio voluptatum maiores.</p>
          </div>

        </div>
    );
}

export default EventIdPage;