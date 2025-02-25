import { useState } from "react";

export const useCounter = (initialValue: number = 10) => {
  const [counter, setCounter] = useState(initialValue);

  // console.log(counter);
  const increment = (value: number = 1) => {
    setCounter((oldValue) => oldValue + value);
  };

  const reset = () => {
    setCounter(0);
  };

  const decrement = (value: number = 1) => {
    setCounter((oldValue) => oldValue - value);
  };

  return { counter, increment, reset, decrement };
};
