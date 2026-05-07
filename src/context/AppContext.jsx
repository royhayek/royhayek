"use client";
import { createContext, useContext, useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const AppContext = createContext(null);

export function AppProvider({ children }) {
  const [darkMode, setDarkMode] = useState(null);
  const [lang, setLang] = useState("fr");
  const pathname = usePathname();
  const mode = pathname === "/intern" ? "intern" : "cdi";

  useEffect(() => {
    // Theme: stored preference or system default
    const stored = localStorage.getItem("theme");
    if (stored) {
      setDarkMode(stored === "dark");
    } else {
      setDarkMode(window.matchMedia("(prefers-color-scheme: dark)").matches);
    }
    // Language: stored preference, default fr
    const storedLang = localStorage.getItem("lang");
    if (storedLang) setLang(storedLang);
  }, []);

  const toggleTheme = () => {
    setDarkMode((prev) => {
      const next = !prev;
      localStorage.setItem("theme", next ? "dark" : "light");
      return next;
    });
  };

  const setLanguage = (newLang) => {
    localStorage.setItem("lang", newLang);
    setLang(newLang);
  };

  return (
    <AppContext.Provider value={{ darkMode, toggleTheme, lang, setLanguage, mode }}>
      {children}
    </AppContext.Provider>
  );
}

export const useApp = () => useContext(AppContext);
