import React from 'react';
// import $ from 'jquery';

import { render } from 'react-dom';
import { Router, Route } from 'react-router';
import App from './components/app';
import About from './components/about';
import {NewsWidget} from './components/news';
import {VacationDashboard} from './components/vacation-dashboard';
import { Utitlitie } from './utitlities';

window.React = React;

Utitlitie.getCards ();

render(
  (<Router>
    <Route path="/" component={App}>
      <Route path="/vacation" component={VacationDashboard}/>
      <Route path="/about" component={About}/>
      <Route path="/news" component={NewsWidget}/>
    </Route>
  </Router>), document.getElementById('content')
);


// var ProductData = require('./ProductData');
// var CartAPI = require('./utils/CartAPI')
// var FluxCartApp = require('./components/FluxCartApp.react');