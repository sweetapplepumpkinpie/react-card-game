import { sampleUser, deckCards } from './data';
import { DeckCard } from 'data/deck-cards';

const cards: number[] = Array(52)
  .fill(1)
  .map((value, index) => index + 1);
const dealt: number[] = [];
const selected: DeckCard[] = [];
let started = false;
let rest: number = cards.length;
let aces = 4;
const id = 1;
let done = false;
let isWinner = false;

const initGame = () => {
  dealt.splice(0, dealt.length);
  started = false;
  done = false;
  rest = cards.length;
  aces = 4;
  isWinner = false;
  cards.splice(
    0,
    cards.length,
    ...Array(52)
      .fill(1)
      .map((value, index) => index + 1)
  );
  selected.splice(0, selected.length);
};

const sendResponse = () => ({
  success: true,
  game: {
    id,
    cards,
    dealt,
    rest,
    aces,
    done,
    started,
    isWinner,
    selected,
  },
});

export const resolvers = {
  Query: {
    me: () => sampleUser,
  },
  Mutation: {
    deal: () => {
      if (rest > 0) {
        selected.splice(0, selected.length);
        const limit = rest > 5 ? 5 : rest;
        if (limit === 52) {
          started = true;
        }
        if (limit < 5) {
          started = false;
          done = true;
          if (aces > 0) {
            isWinner = true;
          }
        }
        for (let i = 0; i < limit; i++) {
          const randomNumber = Math.floor(Math.random() * (cards.length - dealt.length)) + 1;
          const selectedNumber = cards[randomNumber - 1];

          if (selectedNumber % 13 === 1 && aces >= 1) {
            aces--;
          }
          dealt.push(selectedNumber);
          selected.push(deckCards[selectedNumber - 1]);
          cards.splice(randomNumber - 1, 1);
          cards.push(selectedNumber);
          rest = cards.length - dealt.length;
        }

        return sendResponse();
      }
      return {
        success: false,
      };
    },
    reset: () => {
      initGame();
      return {
        success: true,
      };
    },
  },
};
