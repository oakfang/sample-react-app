import React, { createContext, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import * as themes from 'themes';
import { useStateHook } from 'types';

export type ThemeName = keyof typeof themes;
const { matches: userPrefersDarkMode } = matchMedia(
  '(prefers-color-scheme: dark)'
);
const INITIAL: ThemeName = userPrefersDarkMode ? 'darkTheme' : 'lightTheme';

export const ThemeNameContext = createContext<useStateHook<ThemeName>>([
  INITIAL,
  () => null,
]);

export const Theme: React.FC = ({ children }) => {
  const ctx = useState<ThemeName>(INITIAL);
  const [themeName] = ctx;
  return (
    <ThemeProvider theme={themes[themeName]}>
      <ThemeNameContext.Provider value={ctx}>
        {children}
      </ThemeNameContext.Provider>
    </ThemeProvider>
  );
};
