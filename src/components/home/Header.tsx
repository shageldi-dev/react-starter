import { useDispatch, useSelector } from "react-redux";
import { selectThemeMode, setThemeMode } from "../../store/slices/theme.slice";
import { useState } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import LanguageSelect from "./LanguageSelect";

const AppHeader = () => {
  const themeMode = useSelector(selectThemeMode);
  const dispatch = useDispatch();

  const [isDarkMode, setDarkMode] = useState(false);

  const toggleDarkMode = (checked: boolean) => {
    setDarkMode(checked);
    toggleTheme();
  };

  const toggleTheme = () => {
    const newTheme = themeMode === "light" ? "dark" : "light";
    dispatch(setThemeMode(newTheme));
  };
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "22px",
      }}
    >
      <LanguageSelect />
      <DarkModeSwitch
        style={{}}
        checked={isDarkMode}
        onChange={toggleDarkMode}
        size={30}
        sunColor="#000000"
        moonColor="#FFFFFF"
      />
    </div>
  );
};

export default AppHeader;
