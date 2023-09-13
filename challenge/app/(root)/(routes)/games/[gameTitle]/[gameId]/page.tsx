
interface GameIdProps {
  params: {
    gameId: string,
    gameTitle: string
  }
}

const GameIdPage = ({
  params
}: GameIdProps) => {

  return (
    <div>
      <h1 className="flex justify-center mt-4 mb-2">{params.gameTitle}</h1>
      <div className="flex justify-center mt-6 mb-2">
        <iframe 
          src={`https://wordwall.net/pt/embed/${params.gameId}` }
          width="1080" 
          height="720"
          className="rounded-md"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}
 
export default GameIdPage;