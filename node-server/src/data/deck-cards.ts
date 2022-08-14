export type DeckCard = {
  id: number;
  suit: number;
  number: number;
};

export const deckCards: DeckCard[] = Array(52)
  .fill(0)
  .map((item, index) => {
    return {
      id: index + 1,
      suit: Math.floor(index / 13),
      number: (index + 1) % 13 === 0 ? 13 : (index + 1) % 13,
    };
  });
