import React, { useEffect } from "react";
import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import axios from "axios";
import { BaseUrl } from "./Api";
import { toast } from "react-toastify";

const AuthContext = createContext();

export const Session = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const token = localStorage.getItem("token");

 
  
  useEffect(() => {
    if (!token) {
      navigate("/login");
    } else {
      // Decode the token and set all data to user state

      getuser();

      // localStorage.setItem("decodedTokenData", JSON.stringify(decodedToken));

      // Make API call
    }
  }, []); // Dependency array ensures the effect runs only once
const nav= useNavigate()
  // Use useEffect to perform the check when the component mounts
  const getuser = async () => {
    try {
      const res =await axios(`${BaseUrl}check-user`,{
        headers: {
          'Authorization': `Bearer ${token}`
        }})
    // const res = await getProfile(decodedToken && decodedToken.userId);
    if (res.status === 200) {
      setUser(res.data.user);
    } else {
      localStorage.removeItem("token");
    }
    } catch (error) {
      nav("/")
    }
  
  };
  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
};
export const useAuth = () => {
  return useContext(AuthContext);
};
