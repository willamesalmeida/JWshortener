import React from 'react';
import { BrowserRouter, Switch, Router } from 'react-router-dom';

import HomePage from '../pages/HomePage';
import RedirectPage from '../pages/RedirectPage';
import Stats Page from '../pages/StatsPage';


function Routes(){
  return
  <Router>
    <Switch>
      <Router exact path="/" component={HomePage} />
      <Router exact path="/:code" component={RedirectPage} />
      <Router exact path="/:code/stats" component={StatsPage} />
    </Switch>
  </Router>

}