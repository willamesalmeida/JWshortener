import React from 'react';
import { BrowserRouter, Switch, Router } from 'react-router-dom';

import HomePage from '../pages/HomePage';
import RedirectPage from '../pages/RedirectPage';
import StatsPage from '../pages/StatsPage';


function Routes(){
  return (
  <BrowserRouter>
    <Switch>
      <Router exact path="/" component={HomePage} />
      <Router exact path="/:code" component={RedirectPage} />
      <Router exact path="/:code/stats" component={StatsPage} />
    </Switch>
  </BrowserRouter>

)}