import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Auth from './components/Auth';

function App() {
  return (
    <>
      <BrowserRouter>
        <Route path="/auth" component={Auth}/>
      </BrowserRouter>
    </>
  );
}

export default App;
