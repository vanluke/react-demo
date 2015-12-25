import React from 'react';
import { render } from 'react-dom';
import { Router, Route } from 'react-router';
import App from './components/app';
import About from './components/about';
import {NewsWidget} from './components/news';
import { Utitlitie } from './utitlities';

window.React = React;

Utitlitie.getCards ();

render(
  (<Router>
    <Route path="/" component={App}>
      <Route path="/about" component={About}/>
      <Route path="/news" component={NewsWidget}/>
    </Route>
  </Router>), document.getElementById('content')
);


// var ProductData = require('./ProductData');
// var CartAPI = require('./utils/CartAPI')
// var FluxCartApp = require('./components/FluxCartApp.react');