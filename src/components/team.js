import React from 'react';
import {TeamRepository} from './../repositories/teamRepository';

export class Team extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.teamRepository = new TeamRepository();
    this.state = {
      team: {}
    };
  }

 componentDidMount () {
     let { id } = this.props.params;
     this.teamRepository
     .getTeam(id)
     .then(team => {
       this.setState({ team });
     }).catch(e=>console.error(e));
 }

 transistToList () {
   this.props.history.pushState(null, '/teams');
 }

  render () {
    if (this.state.team.name) {
      return (
        <div key='team-details'>
          <div>
            <h1>{this.state.team.name}</h1>
          </div>
          <hr />
          <div>
            <label>Description</label>
            <p>{this.state.team.description}</p>
          </div>
          <div>
           <label>Slug</label>
            <p>{this.state.team.slug}</p>
          </div>
          <div>
            <label>Created at</label>
            <p>{this.state.team.created_at}</p>
          </div>
          <div>
              <label>Subscriber count</label>
              <p>{this.state.team.subscriber_count}</p>
          </div>
          <div>
            <label>Member count</label>
            <p>{this.state.team.member_count}</p>
          </div>
          <div>
              <label>Team mode</label>
            <p>{this.state.team.mode}</p>
          </div>
          <div>
            <label>Team full name</label>
            <p>{this.state.team.full_name}</p>
          </div>
          <div>
            <button className="btn btn-danger" onClick={this.transistToList.bind(this)}>
              Back to list
            </button>
          </div>
        </div>
      );
    }
    return (<div>No team selected</div>)
  }
}
