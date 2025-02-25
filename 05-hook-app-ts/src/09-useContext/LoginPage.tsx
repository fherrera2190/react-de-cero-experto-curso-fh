import { useContext } from "react";
import { UserContext } from "./context/UserContext";
import { UserContextType } from "./interfaces";

export const LoginPage = () => {
  const { user } = useContext(UserContext) as UserContextType;
  return (
    <>
      <h1>Login</h1>
      <hr />
      <pre>{JSON.stringify(user, null, 3)}</pre>
    </>
  );
};
