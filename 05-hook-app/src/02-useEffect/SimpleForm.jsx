import {  useState } from "react";
import { Message } from "./Message";

export const SimpleForm = () => {
  const [formState, setformState] = useState({
    username: "strider",
    email: "nemesis@gmail.com",
  });
  const { username, email } = formState;

  const onInputChange = ({ target }) => {
    const { name, value } = target;

    setformState({
      ...formState,
      [name]: value,
    });
  };

  //   USAR USEFFECT POR SEPARADO PARA CADA DEPENDENCIA
  //   useEffect(() => {
  //     console.log("Se llamo el useEffect");
  //   }, []);

  //   useEffect(() => {
  //     console.log("Cambio el formulario");
  //   }, [formState]);

  //   useEffect(() => {
  //     console.log("Cambio el email");
  //   }, [email]);

  return (
    <>
      <h1>Formulario Simple</h1>
      <hr />
      <input
        type="text"
        className="form-control"
        name="username"
        placeholder="Username"
        value={username}
        onChange={onInputChange}
      />
      <input
        type="email"
        className="form-control mt-3"
        name="email"
        value={email}
        placeholder="nemesis@gmail.com"
        onChange={onInputChange}
      />
      {username === "strider2" && <Message />}
    </>
  );
};
