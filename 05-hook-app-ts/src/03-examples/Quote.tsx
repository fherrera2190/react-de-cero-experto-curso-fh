import { useLayoutEffect, useRef, useState } from "react";

interface Props {
  author?: string;
  quote?: string;
}

export const Quote = ({ author = "", quote = "" }: Props) => {
  const pRef = useRef<HTMLParagraphElement>(null);
  const [boxSize, setBoxSize] = useState({ width: 0, height: 0 });

  useLayoutEffect(() => {
    if (pRef.current) {
      const { height, width } = pRef.current.getBoundingClientRect();
      setBoxSize({ height, width });
    }
  }, []);
  return (
    <>
      <blockquote
        className="blockquote"
        style={{ display: "flex", alignItems: "center" }}
      >
        <p ref={pRef} className="mb-1">
          {quote}
        </p>
        <footer className="blockquote-footer h-6 text-end">{author}</footer>
      </blockquote>
      <p>
        <code>{JSON.stringify(boxSize)}</code>
      </p>
    </>
  );
};
