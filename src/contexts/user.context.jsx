import React, { useState, createContext, useContext } from "react";

const defaultValue = {
  currentUser: null,
  setCurrentUser: () => {},
};

export const UserContext = createContext(defaultValue);

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  return (
    <UserContext.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </UserContext.Provider>
  );
};
