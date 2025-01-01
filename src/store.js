import { createContext, useContext, useState, useCallback } from "react";

export const StoreContext = createContext();

export const useStore = () => {
  return useContext(StoreContext);
};

export const StoreProvider = ({ children }) => {
  const [isOpen, setIsOpenState] = useState(false);

  const setIsOpen = useCallback((state) => {
    setIsOpenState(state);
  }, []); // Funzione stabile

  return (
    <StoreContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </StoreContext.Provider>
  );
};
