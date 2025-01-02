import { createContext, useContext, useState, useCallback } from "react";

export const StoreContext = createContext();

export const useStore = () => {
  return useContext(StoreContext);
};

export const StoreProvider = ({ children }) => {

  // navbar open

  const [isOpen, setIsOpenState] = useState(false);

  const setIsOpen = useCallback((state) => {
    setIsOpenState(state);
  }, []);

  return (
    <StoreContext.Provider value={{ isOpen, setIsOpen}}>
      {children}
    </StoreContext.Provider>
  );
};
