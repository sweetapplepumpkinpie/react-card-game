import { DealMutationFn } from '../../graphql/generated';
import winner from '../../assets/winner.svg';

export const ActionBox = ({
  deal,
  onReset: reset,
  isGameOver,
  isWinner,
}: {
  deal: DealMutationFn;
  onReset: DealMutationFn;
  isGameOver: boolean;
  isWinner: boolean;
}) => {
  const handleDeal = () => {
    deal();
  };
  const handleResetGame = () => {
    reset();
  };

  return (
    <div className="grid">
      {isGameOver ? (
        <div className="flex flex-col items-center justify-center">
          {isWinner ? (
            <div>
              <img
                src={winner}
                alt="Winner"
                className="absolute top-48 left-1/3 w-2/6 animate-scale"
              />
              <div className="w-full h-full animate-scale absolute left-0 top-0 z-20">
                <div className="w-4 h-3 rotate-12 top-1/2 left-32 bg-yellow-400 absolute"></div>
                <div className="w-4 h-3 -rotate-12 top-1/3 left-3/4 bg-purple-400 absolute"></div>
                <div className="w-4 h-3 top-1/3 right-32 bg-red-400 absolute"></div>
                <div className="w-4 h-3 top-1/2 left-3/4 bg-yellow-400 absolute"></div>
                <div className="w-4 h-3 top-1/3 left-1/4 bg-yellow-400 absolute"></div>
              </div>
            </div>
          ) : (
            <div className="mb-12 text-3xl text-white animate-scale">
              <p>You Lose</p>
              <span>Better luck next time!</span>
            </div>
          )}
          <button
            className="text-yellow-300 rounded-lg font-bold border border-yellow-300 px-4 py-1 relative z-50"
            onClick={handleResetGame}
          >
            Play Again
          </button>
        </div>
      ) : (
        <>
          <div className="flex justify-center items-end mb-4">
            <button
              className="bg-yellow-300 px-10 py-2 rounded-lg text-3xl font-bold"
              onClick={handleDeal}
            >
              DEAL
            </button>
          </div>
          <div className="flex md:justify-end justify-center items-center">
            <button
              className="text-yellow-300 rounded-lg font-bold border border-yellow-300 px-4 py-1 md:mr-10"
              onClick={handleResetGame}
            >
              Reset
            </button>
          </div>
        </>
      )}
    </div>
  );
};
