import { Counter } from './Counter';

export const CounterBox = ({
  restCardsCount,
  acesCount,
}: {
  restCardsCount: number;
  acesCount: number;
}) => {
  return (
    <div className="flex justify-center items-center space-x-4">
      <Counter name={'Cards Left'} counter={restCardsCount}></Counter>
      <Counter name={'Aces Left'} counter={acesCount}></Counter>
    </div>
  );
};
