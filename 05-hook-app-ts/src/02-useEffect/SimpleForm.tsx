import {  useState } from "react";
import { Message } from "./Message";

interface TypeFormState {
  username: string;
  email: string;
  [key: string]: string;
}

export const SimpleForm = () => {
  const [formState, setFormState] = useState<TypeFormState>({
    username: "",
    email: "",
  });

  const { username, email } = formState;

  const onInputChange = ({ target }: { target: HTMLInputElement }) => {
    const { name, value } = target;
    setFormState((formState) => ({ ...formState, [name]: value }));
  };

  //   USAR USEFFECT POR SEPARADO PARA CADA DEPENDENCIA
  //   useEffect(() => {
  //     console.log("Se llamo el useEffect");
  //   }, []);

  //   useEffect(() => {
  //     console.log("Cambio el formulario");
  //   }, [formState]);

  //   useEffect(() => {
  //     console.log("Cambio el email", email);
  //   }, [email]);

  return (
    <>
      <h1>Formulario Simple</h1>
      <input
        type="text"
        name="username"
        placeholder="username"
        className="form-control"
        value={username}
        onChange={onInputChange}
      />

      <input
        type="email"
        className="form-control"
        name="email"
        placeholder="nemesis@gmail.com"
        value={email}
        onChange={onInputChange}
      />
      {username === "strider2" && <Message />}
    </>
  );
};
