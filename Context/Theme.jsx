// Theme.js
import React, { createContext, useEffect } from "react";
// themes.js
export const lightTheme = {
  "--bg-color": "#ffffff",
  "--text-color": "#000000",
  "--border": "1px solid #ccc",
};

export const darkTheme = {
  "--bg-color": "#1a1a1a",
  "--text-color": "#f0f0f0",
  "--border": "1px solid #333",
};

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = React.useState("light");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    const themeStyles = theme === "light" ? lightTheme : darkTheme;
    const root = document.documentElement;

    Object.keys(themeStyles).forEach((key) => {
      root.style.setProperty(key, themeStyles[key]);
    });
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
