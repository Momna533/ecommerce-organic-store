import { createContext, useEffect, useState } from "react";
export const AppContext = createContext();
const AppProvider = ({ children }) => {
  const [isMobileDrawerOpen, setIsMobileDrawerOpen] = useState(false);
  const [isCartDrawerOpen, setIsCartDrawerOpen] = useState(false);

  useEffect(() => {
    const restoreStates = () => {
      setIsMobileDrawerOpen(false);
      setIsCartDrawerOpen(false);
    };
    window.addEventListener("resize", restoreStates);
    return () => window.removeEventListener("resize", restoreStates);
  }, []);

  return (
    <AppContext.Provider
      value={{
        isCartDrawerOpen,
        setIsCartDrawerOpen,
        isMobileDrawerOpen,
        setIsMobileDrawerOpen,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
