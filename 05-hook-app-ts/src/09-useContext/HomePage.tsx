import { useContext } from "react";
import { UserContext } from "./context/UserContext";
import { UserContextType } from "./interfaces";

export const HomePage = () => {
  const { user, setUser } = useContext(UserContext) as UserContextType;

  return (
    <>
      <h1>
        Home Page <small>{user?.name}</small>
      </h1>
      <hr />
      <pre>{JSON.stringify(user, null, 3)}</pre>
      <button
        onClick={() =>
          setUser({
            id: 123,
            name: "Fernando Herrera",
            email: "test@gmail.com",
          })
        }
        className="btn btn-primary"
      >
        Set User
      </button>
    </>
  );
};
