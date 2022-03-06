import React, { useContext, useState, useEffect } from "react";

const AppContext = React.createContext();

const getUserTheme = () => {
  const result = JSON.parse(localStorage.getItem("theme"));
  return result;
};

function AppProvider({ children }) {
  const [countries, setCountries] = useState([]);
  const [isDark, setIsDark] = useState(getUserTheme());

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(isDark));
  }, [isDark]);

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
