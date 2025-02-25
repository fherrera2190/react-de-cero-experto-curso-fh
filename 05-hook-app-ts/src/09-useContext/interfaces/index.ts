export interface User {
  id?: number;
  name: string;
  email: string;
}

export interface UserContextType {
  user: User;
  setUser: (user: User) => void;
}
