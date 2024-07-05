import { useFetch, UseCounter } from "../hooks/";
import { LoadingQuote, Quote } from "../03-examples/";

export const Layout = () => {
  const { increment, counter } = UseCounter(1);
  const { data, isLoading } = useFetch(
    `https://api.breakingbadquotes.xyz/v1/quotes/${counter}`
  );
  const { author, quote } = !!data && data[0];
  return (
    <>
      <h1>Breakin Bad Quotes</h1>
      <hr />
      {isLoading ? <LoadingQuote /> : <Quote author={author} quote={quote} />}
      <button
        onClick={() => increment()}
        disabled={isLoading}
        className="btn btn-primary"
      >
        Next quote
      </button>
    </>
  );
};
