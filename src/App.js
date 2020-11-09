import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Auth from './components/Auth';
import AuthenticatedRoute from './components/AuthenticatedRoute';
import Menu from './components/Menu';
import NoMatch from './components/NoMatch';
import HomePage from './pages/HomePage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Menu />
        <Switch>
          <AuthenticatedRoute exact path="/" component={HomePage} />
          <Route path="/auth" component={Auth} />
          <Route path="*" component={NoMatch} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
