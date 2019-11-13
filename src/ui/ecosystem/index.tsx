import React, { lazy, Suspense } from 'react';
import BlankScreen from 'ui/organisms/BlankScreen';
import { Theme } from 'providers/Theme';
const MainView = lazy(() => import('ui/organisms/MainView'));

const loadingIndicator = <BlankScreen />;

const App: React.FC = () => {
  return (
    <Theme>
      <Suspense fallback={loadingIndicator}>
        <MainView />
      </Suspense>
    </Theme>
  );
};

export default App;
