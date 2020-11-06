import React from 'react';
import { Route, useRouteMatch } from 'react-router-dom';
import LoginPage from '../../pages/LoginPage';

function Auth() {
  const match = useRouteMatch();

  return (
    <>
      <Route exact path={`${match.url}/login`} component={LoginPage}></Route>
    </>
  )
}

export default Auth;