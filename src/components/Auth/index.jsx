import React from 'react';
import { Route, useRouteMatch } from 'react-router-dom';
import LoginPage from '../../pages/LoginPage';
import RegisterPage from '../../pages/RegisterPage';

function Auth() {
  const match = useRouteMatch();

  return (
    <>
      <Route exact path={`${match.url}/login`} component={LoginPage} />
      <Route exact path={`${match.url}/register`} component={RegisterPage} />
    </>
  )
}

export default Auth;