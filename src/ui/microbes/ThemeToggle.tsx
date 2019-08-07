import React from "react";
import { useTheme } from "services/use-theme";
import { Switch } from "ui/atoms";

export const ThemeToggle: React.FC = () => {
  const { theme, setTheme } = useTheme();
  return (
    <Switch
      title="Toggle Dark Theme"
      value={theme === "darkTheme"}
      onChange={dark => setTheme(dark ? "darkTheme" : "lightTheme")}
    />
  );
};
