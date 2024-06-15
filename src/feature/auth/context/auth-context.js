import React, { createContext, useContext, useState } from "react";
import LocalDataManager from "../../../service/local-data-manager";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState("");

  const login = (token) => {
    LocalDataManager.setAccessToken(token);
    setIsAuthenticated(token);
  };

  const logout = () => {
    LocalDataManager.removeData();
    setIsAuthenticated("");
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
