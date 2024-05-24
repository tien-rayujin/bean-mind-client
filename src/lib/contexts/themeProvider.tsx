"use client";

import { PropsWithChildren, createContext, useEffect, useState } from "react";

interface ThemeContextValue {
  theme: "light" | "dark";
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

interface ThemeProviderProps extends PropsWithChildren {}

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    if (typeof window !== "undefined") {
      const storedTheme =
        (localStorage.getItem("theme") as "light" | "dark") || "light";
      return storedTheme;
    } else return "light";
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      const currentTheme =
        (localStorage.getItem("theme") as "light" | "dark") || "light";
      setTheme(currentTheme);
      document.documentElement.setAttribute("data-theme", currentTheme);
    }
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "light" ? "dark" : "light";
    setTheme(nextTheme);
    document.documentElement.setAttribute("data-theme", nextTheme);
    if (typeof window !== "undefined") {
      localStorage.setItem("theme", nextTheme);
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };
