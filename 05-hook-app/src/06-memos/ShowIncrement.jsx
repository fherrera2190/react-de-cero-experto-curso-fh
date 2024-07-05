import React from "react";
export const ShowIncrement = React.memo(({ increment }) => {
  console.log("me volvi a generar");
  return (
    <button onClick={() => increment()} className="btn btn-success">
      Incrementar
    </button>
  );
});
