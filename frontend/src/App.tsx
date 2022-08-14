import React, { useEffect, useMemo, useState } from 'react';

import { ActionBox } from './components/action-box';
import { CardBox } from './components/card-box';
import { CounterBox } from './components/counter-box';
import { useDealMutation, useResetMutation, Game } from './graphql/generated';

function App() {
  const [game, setGame] = useState<Game | null | undefined>(null);
  const [deal, { loading: dealLoading, data: dealResult }] = useDealMutation();
  const [reset, { data }] = useResetMutation();

  useEffect(() => {
    reset();
  }, []);
  useEffect(() => {
    if (data) {
      setGame(data.reset?.game);
    }
  }, [data]);
  useEffect(() => {
    if (dealResult) {
      setGame(dealResult.deal?.game);
    }
  }, [dealResult]);

  const restCardsCount = game?.rest ?? 52;
  const acesCount = game?.aces ?? 4;
  const isGameOver = !!game?.done;
  const isWinner = !!game?.isWinner;

  return (
    <div className="bg-gradient-to-t from-green-900 to-green-600 min-h-screen grid text-center">
      <CounterBox restCardsCount={restCardsCount} acesCount={acesCount}></CounterBox>
      <div>{game && <CardBox game={game} loading={dealLoading}></CardBox>}</div>
      <ActionBox
        deal={deal}
        onReset={reset}
        isGameOver={isGameOver}
        isWinner={isWinner}
      ></ActionBox>
    </div>
  );
}

export default App;
