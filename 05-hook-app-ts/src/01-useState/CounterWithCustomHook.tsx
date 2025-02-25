import { useCounter } from "../hooks/useCounter";

export const CounterWithCustomHook = () => {
  const { increment, counter, decrement, reset } = useCounter();
    console.log("render CounterWithCustomHook");
  return (
    <>
      <h1>Counter with custom hook: {counter}</h1>
      <hr />

      <button className="btn btn-primary" onClick={() => increment(2)}>
        +1
      </button>
      <button className="btn btn-primary" onClick={reset}>
        Reset
      </button>
      <button
        className="btn btn-primary"
        onClick={() => decrement(2)}
        disabled={counter <= 0}
      >
        -1
      </button>
    </>
  );
};
