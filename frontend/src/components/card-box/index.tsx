import { Game } from '../../graphql/generated';
import { DeckCard, Suit } from './DeckCard';

const suits: Suit[] = ['clover', 'diamond', 'heart', 'spade'];
const cardClasses = [
  'absolute bottom-[120vh] rotate-25 animate-drop-1',
  'absolute bottom-[120vh] rotate-12 animate-drop-2',
  'absolute bottom-[120vh] inset-x-auto animate-drop-3',
  'absolute bottom-[120vh] -rotate-12 animate-drop-4',
  'absolute bottom-[120vh] -rotate-25 animate-drop-5',
];

export const CardBox = ({ game, loading }: { game: Game; loading: boolean }) => {
  const selected = game?.selected ?? [];
  if (game && game.dealt?.length && !loading) {
    return (
      <>
        {selected.length === 2 ? (
          <div className="flex">
            {selected?.map((deckCard, index) => {
              return (
                <DeckCard
                  key={`${deckCard.suit}-${deckCard.number}`}
                  suit={suits[deckCard.suit]}
                  number={deckCard.number}
                  className={cardClasses[index * 2 + 1]}
                ></DeckCard>
              );
            })}
          </div>
        ) : (
          <div className="flex">
            {selected?.map((deckCard, index) => {
              return (
                <DeckCard
                  key={index}
                  suit={suits[deckCard.suit]}
                  number={deckCard.number}
                  className={cardClasses[index]}
                ></DeckCard>
              );
            })}
          </div>
        )}
      </>
    );
  } else {
    return <div></div>;
  }
};
