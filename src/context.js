import React, { useContext, useState } from "react";

const AppContext = React.createContext();

function AppProvider({ children }) {
  const [countries, setCountries] = useState([]);
  const [isDark, setIsDark] = useState(false);

  return (
    <AppContext.Provider value={{ countries, setCountries, isDark, setIsDark }}>
      {children}
    </AppContext.Provider>
  );
}

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
