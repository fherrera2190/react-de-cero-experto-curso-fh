import { useState } from "react";
import { Small } from "./Small";
import { useCounter } from "../hooks/useCounter";

export const Memorize = () => {
  const { counter, increment } = useCounter();

  const [show, setShow] = useState(true);
  return (
    <>
      <h1>
        Counter: <Small value={counter} />
      </h1>
      <hr />
      <button onClick={() => increment()} className="btn btn-primary">
        +1
      </button>

      <button onClick={() => setShow(!show)} className="btn btn-primary">
        Show/Hide {JSON.stringify(show)}
      </button>
    </>
  );
};
