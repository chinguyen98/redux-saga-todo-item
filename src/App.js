import React from 'react';
import Switch from 'react-bootstrap/esm/Switch';
import { BrowserRouter, Route } from 'react-router-dom';
import Auth from './components/Auth';
import AuthenticatedRoute from './components/AuthenticatedRoute';
import Menu from './components/Menu';
import HomePage from './pages/HomePage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Menu />
          <AuthenticatedRoute exact path="/" component={HomePage} />
          <Route path="/auth" component={Auth} />
      </BrowserRouter>
    </>
  );
}

export default App;
