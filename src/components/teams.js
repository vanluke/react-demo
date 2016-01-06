import React from 'react';
import {TeamList} from './teamList';
import {TeamRepository} from './../repositories/teamRepository';
// import {Team} from './team';

export class Teams extends React.Component {
  constructor(props) {
    super(props);
    this.teamRepository = new TeamRepository();
    this.state = {
      teams: []
    };
  }

  componentDidMount () {
    this.teamRepository
      .getAllTeams()
      .then(teams => {
      this.setState({
        teams
      });
    }).catch(error=>console.error(error));
  }

  render () {
    return <TeamList key='team-list'
      teams={this.state.teams} />
  }
}
