import { memo } from "react";

export const Small = memo(({ value }: { value: number }) => {
  console.log("Me volvi a dibujar");
  return <small>{value}</small>;
});
