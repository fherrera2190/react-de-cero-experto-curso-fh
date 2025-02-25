import { memo } from "react";

export const ShowIncrement = memo(
  ({ increment }: { increment: () => void }) => {
    console.log("me volvi a generar");
    return (
      <button onClick={() => increment()} className="btn btn-success">
        Incrementar
      </button>
    );
  }
);
