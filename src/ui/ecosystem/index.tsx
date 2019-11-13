import React, { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import BlankScreen from 'ui/organisms/BlankScreen';
import { Theme } from 'providers/Theme';
const MainView = lazy(() => import('ui/organisms/MainView'));

const loadingIndicator = <BlankScreen />;

const App: React.FC = () => {
  return (
    <Theme>
      <Suspense fallback={loadingIndicator}>
        <Switch>
          <Route path="/">
            <MainView />
          </Route>
        </Switch>
      </Suspense>
    </Theme>
  );
};

export default App;
