import { useEffect, useState } from "react";
import useEvent from "./use-event";

export default function useDarkMode() {
  const [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
    const darkMode = localStorage.getItem("darkMode");
    if (darkMode === null) {
      const darkModeQuery = window.matchMedia("prefers-color-scheme: dark");
      const handleQueryUpdate = (event: MediaQueryListEvent) => {
        if (localStorage.getItem("darkMode") !== null) {
          return;
        }
        if (event.matches) {
          setDarkMode(true);
        } else {
          setDarkMode(false);
        }
      };

      darkModeQuery.addEventListener("change", handleQueryUpdate);
      return () => {
        darkModeQuery.removeEventListener("change", handleQueryUpdate);
      };
    } else {
      setDarkMode(darkMode === "true");
    }
  }, []);

  const toggleDarkMode = useEvent(() => {
    setDarkMode(!darkMode);
    localStorage.setItem("darkMode", !darkMode ? "true" : "false");
  });

  return { darkMode, toggleDarkMode };
}
