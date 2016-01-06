import React from 'react';
import {TeamLink} from './teamLink';

export class TeamList extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
      let teamsList = this.props.teams.map(t => {
        return <TeamLink key={t.id} team={t} />
      });

      return (
        <div className="list-group">
              {teamsList}
        </div>
      );
  }

  static propTypes = {
		teams: React.PropTypes.array.isRequired
	};

	static defaultProps = {
		teams: []
	};
}
