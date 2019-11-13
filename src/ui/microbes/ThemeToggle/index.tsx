import React from 'react';
import { useTranslation } from 'react-i18next';
import { useTheme } from 'services/use-theme';
import { Switch } from 'ui/atoms';

export const ThemeToggle: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const { t } = useTranslation();
  return (
    <Switch
      title={t('microbes.ThemeToggle.title')}
      value={theme === 'darkTheme'}
      onChange={dark => setTheme(dark ? 'darkTheme' : 'lightTheme')}
    />
  );
};
