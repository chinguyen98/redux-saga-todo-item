import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Auth from './components/Auth';
import Menu from './components/Menu';
import IntroPage from './pages/IntroPage';
import TodoPage from './pages/TodoPage';

function App() {
  return (
    <>
      <Menu />
      <BrowserRouter>
        <Route exact path="/" component={IntroPage} />
        <Route exact path="/todo" component={TodoPage} />
        <Route path="/auth" component={Auth} />
      </BrowserRouter>
    </>
  );
}

export default App;
