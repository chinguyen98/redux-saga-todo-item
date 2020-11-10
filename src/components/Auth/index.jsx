import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Route, Switch, useHistory, useRouteMatch } from 'react-router-dom';
import LoginPage from '../../pages/LoginPage';
import RegisterPage from '../../pages/RegisterPage';
import NoMatch from '../NoMatch';

function Auth() {
  const match = useRouteMatch();

  return (
    <Switch>
      <Route exact path={`${match.url}/login`} component={LoginPage} />
      <Route exact path={`${match.url}/register`} component={RegisterPage} />
      <Route path="*" component={NoMatch} />
    </Switch>
  )
}

export default Auth;