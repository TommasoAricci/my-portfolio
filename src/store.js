import { createContext, useContext, useState, useCallback } from "react";

export const StoreContext = createContext();

export const useStore = () => {
  return useContext(StoreContext);
};

export const StoreProvider = ({ children }) => {
  const [isOpen, setIsOpenState] = useState(false); // navbar open
  const [language, setLanguage] = useState("IT");

  const setIsOpen = useCallback((state) => {
    setIsOpenState(state);
  }, []);

  return (
    <StoreContext.Provider value={{ isOpen, setIsOpen, language, setLanguage }}>
      {children}
    </StoreContext.Provider>
  );
};
