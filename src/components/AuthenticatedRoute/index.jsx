import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';

function AuthenticatedRoute({ component: Component, ...rest }) {
  const { isLogged } = useSelector(state => state.user);

  return (
    <Route
      {...rest}
      render={props => {
        if (isLogged) {
          return <Component {...props} />
        }
        return <Redirect exact to="/auth/login" />
      }}
    />
  )
};

export default AuthenticatedRoute;