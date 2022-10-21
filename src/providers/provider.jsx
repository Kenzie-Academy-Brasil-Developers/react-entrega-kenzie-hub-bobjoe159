import { createContext } from "react";
import React, { useEffect, useState } from "react";

export const AuthContext = createContext([]);

const AuthProvider = ({ children }) => {
  const [token, setToken] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("@kenzieHub:token");

    if (token) {
      setToken(token);
    }
  }, [token]);

  return (
    <AuthContext.Provider value={[token, setToken]}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
