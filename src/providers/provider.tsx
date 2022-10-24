import { createContext, ReactNode, useContext } from "react";
import React, { useEffect, useState } from "react";

interface iProviderProps {
  children: ReactNode;
}

// interface iUserTechs {
//   created_at: string;
//   id: string;
//   status: string;
//   title: string;
//   updated_at: string;
// }

interface iUserContext {
  token: string;
  setToken: (c: string) => void;
  loggedUserTechs: any;
  setUserTechs: any;
}

export const AuthContext = createContext<iUserContext>({} as iUserContext);

const AuthProvider = ({ children }: iProviderProps) => {
  const [token, setToken] = useState("");
  const [loggedUserTechs, setUserTechs] = useState("");
  console.log(loggedUserTechs);

  useEffect(() => {
    const token = localStorage.getItem("@kenzieHub:token");

    if (token) {
      setToken(token);
    }
  }, [token]);

  return (
    <AuthContext.Provider
      value={{ token, setToken, loggedUserTechs, setUserTechs }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

export function useUserContext(): iUserContext {
  const context = useContext(AuthContext);

  return context;
}
