import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { LoginPage } from './pages';

function App() {
  return (
      <HashRouter>
        <Switch>
          <Route exact path="/" component={LoginPage} />
        </Switch>
      </HashRouter>
  );
}

export default App;
