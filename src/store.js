import { createContext, useContext, useState, useCallback } from 'react';

export const StoreContext = createContext();

export const useStore = () => {
  return useContext(StoreContext);
};

export const StoreProvider = ({ children }) => {
  const [isOpen, setIsOpenState] = useState(false);
  const [language, setLanguage] = useState('EN');
  const [theme, setTheme] = useState('dark');

  const setIsOpen = useCallback((state) => {
    setIsOpenState(state);
  }, []);

  return (
    <StoreContext.Provider value={{ isOpen, setIsOpen, language, setLanguage, theme, setTheme }}>
      {children}
    </StoreContext.Provider>
  );
};
