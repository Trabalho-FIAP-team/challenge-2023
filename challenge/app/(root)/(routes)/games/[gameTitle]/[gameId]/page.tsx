
interface GameIdProps {
  params: {
    gameId: string,
    gameTitle: string
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

const GameIdPage = ({
  params
}: GameIdProps) => {

  return (
    <div>
      <h1 className="mt-20 mb-6 text-3xl font-extrabold text-gray-900 flex justify-center dark:text-white md:text-5xl lg:text-5xl" >{decodeString(params.gameTitle)}</h1>
      <div className="flex justify-center mt-12 mb-2">
        <iframe 
          src={`https://wordwall.net/pt/embed/${params.gameId}` }
          width="720" 
          height="405"
          className="rounded-md"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}
 
export default GameIdPage;