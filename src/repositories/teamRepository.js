import fetch from 'node-fetch';
let teams = require('./teams.json');
import _ from 'lodash';
import {Team} from './../models/team';
import {config} from './../config/config';

export class TeamRepository {
	constructor () {
	}

  getTeam (teamId) {
    return new Promise((resolve) => {
      let team = _.find(teams, (t) => {
        return t.id === parseInt(teamId);
      });
      resolve(new Team(team));
    });
  }

	getAllTeams () {
    return new Promise ((resolve) => {
      resolve(teams.map(t=>new Team(t)));
    });
	}
}
