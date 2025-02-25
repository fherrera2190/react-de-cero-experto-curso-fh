import { useCounter } from "../hooks/useCounter";
import { useFetch } from "../hooks/useFetch";
import { ListQuotes } from "./ListQuotes";
import { LoadingQuote } from "./LoadingQuote";

export const MultipleCustomHooks = () => {
  const { increment, counter, decrement } = useCounter(1);
  const url = `https://api.breakingbadquotes.xyz/v1/quotes/${counter}`;
  const { data, isLoading } = useFetch(url);

  // console.log(isLoading, data, url);

  return (
    <>
      <div>
        <h1>Breakin Bad Quotes</h1>
        <div className="d-flex gap-5">
          <button
            onClick={() => increment()}
            disabled={isLoading}
            className="btn btn-primary"
          >
            Next quote
          </button>

          <button
            onClick={() => decrement()}
            disabled={counter < 1}
            className="btn btn-primary"
          >
            less quote
          </button>
        </div>
      </div>
      <hr />

      {isLoading ? <LoadingQuote /> : <ListQuotes data={data} />}
    </>
  );
};
