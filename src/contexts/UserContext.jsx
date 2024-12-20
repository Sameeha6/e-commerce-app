import React, { createContext, useContext, useState } from "react";

// Create UserContext
const UserContext = createContext();

// UserProvider
export const UserProvider = ({ children }) => {
  const [email, setEmail] = useState(() => localStorage.getItem("email") || "");
  const [username, setUsername] = useState(() => localStorage.getItem("username") || "");

  // Handle Login
  const handleLogin = (userEmail) => {
    const userUsername = userEmail.split('@')[0]; // Extract username from email 
    localStorage.setItem("email", userEmail); 
    localStorage.setItem("username", userUsername); 
    setEmail(userEmail); 
    setUsername(userUsername)
  };

  // Handle Logout
  const handleLogout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("username");
    setEmail("");
    setUsername("");
  };

  return (
    <UserContext.Provider value={{email,username,handleLogin, handleLogout}}>
      {children}
    </UserContext.Provider>
  );
};

// Custom hook for ease of use
export const useUser = () => useContext(UserContext);