import clover from '../../assets/Clover.svg';
import diamond from '../../assets/Diamond.svg';
import heart from '../../assets/Heart.svg';
import spade from '../../assets/Spade.svg';

export type Suit = 'clover' | 'diamond' | 'heart' | 'spade';

type DeckCardProps = {
  number: number;
  suit: Suit;
  className: string;
};

const suitToIcons: Record<Suit, string> = {
  clover,
  diamond,
  heart,
  spade,
};
const colors: Record<Suit, string> = {
  clover: 'text-black',
  diamond: 'text-red-500',
  heart: 'text-red-500',
  spade: 'text-black',
};
const cardNumbers = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

export const DeckCard = ({ number, suit, className }: DeckCardProps) => {
  return (
    <div className={`w-44 bg-white rounded-xl h-64 grid ${className}`}>
      <div className="flex">
        <div className="wr-auto flex flex-col items-center ml-4 mt-4">
          <span className={`text-4xl ${colors[suit]} font-courier-prime font-bold`}>
            {cardNumbers[number - 1]}
          </span>
          <img src={suitToIcons[suit]} alt={suit} className="w-6"></img>
        </div>
      </div>
      <div className="flex justify-end">
        <img src={suitToIcons[suit]} alt={suit} className="w-14 mr-5"></img>
      </div>
    </div>
  );
};
