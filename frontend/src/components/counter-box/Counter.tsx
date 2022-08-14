type CounterProps = {
  counter: number;
  name: string;
};

export const Counter = ({ counter, name }: CounterProps) => {
  return (
    <div className="bg-black w-32 py-4 text-white border border-yellow-200">
      <div className="">{counter}</div>
      <div>{name}</div>
    </div>
  );
};
