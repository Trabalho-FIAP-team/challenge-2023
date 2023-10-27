import BackButton from "@/components/back-button";
import { games } from "@/data";


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
      <div className='flex items-center justify-start '>
        <BackButton />
        <h1 className="mb-6 text-3xl font-extrabold text-gray-900 flex justify-start dark:text-white md:text-5xl lg:text-5xl border-b-2" >{`${decodeString(params.gameTitle)}`}</h1>
      </div>
      <div className="flex justify-center mt-12 mb-2">
        <iframe
          src={`https://wordwall.net/pt/embed/${params.gameId}`}
          width="1600"
          height="600"
          className="rounded-md"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}

export default GameIdPage;