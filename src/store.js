import { createContext, useContext, useState } from "react";
import React from "react";

// creazione

export const StoreContext = createContext();

// hook per usarlo

export const useStore = () => {
  return useContext(StoreContext);
};

// provider

export const StoreProvider = ({ children }) => {

  // navbar
  const [isOpen, setIsOpen] = useState(false);

  return (
    <StoreContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </StoreContext.Provider>
  );
};
