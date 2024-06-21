import { createContext, useState } from "react";
export const AppContext = createContext();
const AppProvider = ({ children }) => {
  const [isMobileDrawerOpen, setIsMobileDrawerOpen] = useState(false);
  const [isCartDrawerOpen, setIsCartDrawerOpen] = useState(false);
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
