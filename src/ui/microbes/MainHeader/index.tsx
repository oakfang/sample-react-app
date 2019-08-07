import React from "react";
import styled from "styled-components";
import { useTranslation, Trans } from "react-i18next";
import { CenteredText, Link } from "ui/atoms";
import { Logo } from "ui/microbes/Logo";
import { ThemeToggle } from "ui/microbes/ThemeToggle";

export const MainHeader: React.FC = () => {
  const { t } = useTranslation();
  return (
    <CenteredText>
      <Header>
        <Logo />
        <p>
          <Trans
            i18nKey="microbes.MainHeader.title"
            values={{ path: "src/ui/ecosystem/index.tsx" }}
            components={[<code />]}
          >
            {/* Edit <code>src/App.tsx</code> and save to reload */}
          </Trans>
        </p>
        <div>
          <ThemeToggle />
        </div>
        <Link href="https://reactjs.org">{t("microbes.MainHeader.learn")}</Link>
      </Header>
    </CenteredText>
  );
};

const Header = styled.header`
  background-color: ${props => props.theme.palette.body};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: ${props => props.theme.palette.bodyText};
`;
