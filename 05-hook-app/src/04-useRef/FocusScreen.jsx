import { useRef } from "react";

export const FocusScreen = () => {
  const inputRef = useRef();

  const onClick = () => {
    console.log(inputRef);
    inputRef.current.select();
  };
  return (
    <>
      <h1>Focus Screen</h1>
      <hr />
      <input
        type="text"
        ref={inputRef}
        className="form-control"
        placeholder="Ingrese su nombre"
      />
      <button onClick={() => onClick()} className="btn btn-primary mt-3">
        Set focus
      </button>
    </>
  );
};
