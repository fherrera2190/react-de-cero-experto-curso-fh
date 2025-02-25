import { useState, ReactNode } from "react";
import { UserContext } from "./UserContext";
import { UserContextType } from "../interfaces";
const user = {
  id: 123,
  name: "Fernando Herrera",
  email: "test@gmail.com",
};

interface UserProviderProps {
  children: ReactNode;
}

export const UserProvider = ({ children }: UserProviderProps) => {
  const [user, setUser] = useState<UserContextType>();

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
