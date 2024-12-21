import React, { createContext, useContext, useState } from "react";
import { addUser, emailCheck, userCheck } from "../api/userApi";
import { useNavigate } from "react-router-dom";

// Create UserContext
const UserContext = createContext();

// UserProvider
export const UserProvider = ({ children }) => {
  // const [email, setEmail] = useState(() => localStorage.getItem("email") || "");
  // const [username, setUsername] = useState(() => localStorage.getItem("username") || "");

  const [user,setUser] = useState();
  const navigate = useNavigate();

  // Handle Login
  // const handleLogin = (userEmail) => {
  //   const userUsername = userEmail.split('@')[0]; // Extract username from email 
  //   localStorage.setItem("email", userEmail); 
  //   localStorage.setItem("username", userUsername); 
  //   setEmail(userEmail); 
  //   setUsername(userUsername)
  // };

  // Handle Logout
  // const handleLogout = () => {
  //   localStorage.removeItem("email");
  //   localStorage.removeItem("username");
  //   setEmail("");
  //   setUsername("");
  // };

  const handleSignup = async(userData) => {
    try {
      const isEmail = await emailCheck(userData.email)
      if(!isEmail){ 
        const newUser = await addUser(userData);
        setUser(newUser);
        localStorage.setItem("user",newUser.email);
        localStorage.setItem("userId",newUser.id);
        navigate('/');
        return "";
      }
      else return "User already exist!"
    } catch (error) {
      console.error("Signup error:", error);
      return "An error occurred during signup.";
    }
      
  };

  const handleLogin = async(email,password) => {
    try {
      const [userValidation] = await userCheck(email,password);
      if(userValidation){
          if (userValidation.role === "admin"){
            setUser(userValidation)
            localStorage.setItem("admin",userValidation.email)
            navigate('/admin');
            return "";
          }
          else{
            setUser(userValidation)
            localStorage.setItem("user",userValidation.email);
            localStorage.setItem("userId",userValidation.id);
            navigate('/');
            return "";
          }
      }else{
        return "Invalid email or password"
      }
    } catch (error) {
      console.error('login error:',error);
      return "An error occurred during login.";
    }
  };

  const handleLogout = () => {
    setUser([]);
    localStorage.clear();
    navigate("/login");
  };


  return (
    <UserContext.Provider value={{user,handleLogin, handleLogout,handleSignup}}>
      {children}
    </UserContext.Provider>
  );
};

// Custom hook for ease of use
export const useUser = () => useContext(UserContext);