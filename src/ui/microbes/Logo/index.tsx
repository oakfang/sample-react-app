import React from 'react';
import styled, { keyframes } from 'styled-components';
import { useTranslation } from 'react-i18next';
import logo from './logo.svg';

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const LogoImage = styled.img`
  animation: ${spin} infinite 20s linear;
  height: 40vmin;
  pointer-events: none;
`;

export const Logo: React.FC = () => {
  const { t } = useTranslation();
  return <LogoImage src={logo} alt={t('microbes.Logo.title')} />;
};
