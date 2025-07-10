// context/UserContext.js
"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    const storedUser = localStorage.getItem("userData");

    if (storedToken) setToken(storedToken);
    if (storedUser) setUserData(JSON.parse(storedUser));
  }, []);

  return (
    <UserContext.Provider value={{ token, userData }}>
      {children}
    </UserContext.Provider>
  );
};

// Hook to use anywhere in your app
export const useUser = () => useContext(UserContext);
