import Home from 'pages/Home';
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const Watch = () => <div>watch</div>;

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/'>
          <Home />
        </Route>
        <Route path='/watch/:id'>
          <Watch />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
