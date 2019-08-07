import { useContext } from "react";
import { ThemeNameContext } from "providers/Theme";

export function useTheme() {
  const [theme, setTheme] = useContext(ThemeNameContext);
  return {
    theme,
    setTheme
  };
}
