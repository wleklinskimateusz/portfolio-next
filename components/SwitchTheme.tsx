"use client";
import React, { useEffect } from "react";
import { FiMoon, FiSun } from "react-icons/fi";
import { useLocalStorage } from "usehooks-ts";

const lightTheme = "bumblebee";
const darkTheme = "nights";

const SwitchTheme = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      className="btn-secondary btn absolute right-5 top-10 z-10"
      onClick={toggleTheme}
    >
      {theme === darkTheme ? <FiSun /> : <FiMoon />}
    </button>
  );
};

const useTheme = () => {
  const [theme, setTheme] = useLocalStorage("theme", lightTheme);

  const toggleTheme = () =>
    setTheme((prev) => (prev === lightTheme ? darkTheme : lightTheme));

  useEffect(() => {
    const body = document.body;
    body.setAttribute("data-theme", theme);
  }, [theme]);
  return { theme, toggleTheme };
};

export default SwitchTheme;
