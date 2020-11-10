import React, { useEffect } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import Auth from './components/Auth';
import AuthenticatedRoute from './components/AuthenticatedRoute';
import Menu from './components/Menu';
import NoMatch from './components/NoMatch';
import HomePage from './pages/HomePage';
import * as jwt from 'jsonwebtoken';
import { useDispatch, useSelector } from 'react-redux';
import { signInSetUserAction } from './actions/user.action';

function App() {
  const dispatch = useDispatch();
  const isLogged = useSelector(state => state.user.isLogged);

  useEffect(() => {
    const tokenData = jwt.decode(localStorage.getItem('token'));
    if (tokenData !== null) {
      const { firstname, lastname } = tokenData;
      dispatch(signInSetUserAction(firstname, lastname, false));
    }
  });

  return (
    <>
      <BrowserRouter>
        <Menu />
        <Switch>
          <AuthenticatedRoute exact path="/" component={HomePage} />
          <Route path="/auth">
            {
              isLogged ? <Redirect exact to="/" /> : <Auth />
            }
          </Route>
          <Route path="*" component={NoMatch} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
