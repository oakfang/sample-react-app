import React from 'react';
import i18n from 'i18next';
import { initReactI18next, I18nextProvider } from 'react-i18next';
import { render as _render } from '@testing-library/react';
import { Theme } from 'providers/Theme';

i18n.use(initReactI18next).init({
  fallbackLng: false,
  lng: 'cimode',
  interpolation: {
    escapeValue: false,
  },
  react: {
    wait: false,
  },
  resources: {
    en: {
      core: {
        test: 'test',
      },
    },
  },
});

const Wrapper: React.FC = ({ children }) => {
  return (
    <I18nextProvider i18n={i18n}>
      <Theme>{children}</Theme>
    </I18nextProvider>
  );
};

export const render = (component: Parameters<typeof _render>[0]) =>
  _render(component, { wrapper: Wrapper });
