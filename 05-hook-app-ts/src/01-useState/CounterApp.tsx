import { useState } from "react";
interface Counter {
  counter1: number;
  counter2: number;
  counter3: number;
}
export const CounterApp = () => {
  const [state, setCounter] = useState<Counter>({
    counter1: 10,
    counter2: 20,
    counter3: 30,
  });

  const { counter1, counter2, counter3 } = state;

  return (
    <>
      <h1>Counter1: {counter1}</h1>
      <h1>Counter2: {counter2}</h1>
      <h1>Counter3: {counter3}</h1>
      <button
        className="btn btn-primary"
        onClick={() => setCounter({ ...state, counter1: counter1 + 1 })}
      >
        +1
      </button>
    </>
  );
};
