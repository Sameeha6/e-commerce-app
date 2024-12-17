import React, { createContext, useState, useContext } from "react";

// Create UserContext
const UserContext = createContext();

// Custom Hook for consuming UserContext
export const useUser = () => useContext(UserContext);

// UserProvider Component to wrap your app
export const UserProvider = ({ children }) => {
  const [username, setUsername] = useState(null); // User state for managing the logged-in user name

const login = (name) => {
    setUsername(name);
  };

const logout = () => {
    setUsername(null);
  };

  return (
    <UserContext.Provider value={{ username, setUsername, login ,logout }}>
      {children}
    </UserContext.Provider>
  );
};
