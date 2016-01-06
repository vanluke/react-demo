import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router';
import App from './components/app';
import About from './components/about';
import {NewsWidget} from './components/news';
import {VacationDashboard} from './components/vacation-dashboard';
import {Teams} from './components/teams';
import {Team} from './components/team';

ReactDOM.render(
  (<Router>
    <Route path="/" component={App}>
      <Route path="/vacation" component={VacationDashboard}/>
      <Route path="/about" component={About}/>
      <Route path="/news" component={NewsWidget}/>
      <Route path="/teams" component={Teams} />
      <Route path="team/:id" component={Team} />
    </Route>
  </Router>), document.getElementById('content')
);
