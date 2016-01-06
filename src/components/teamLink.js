import React from 'react';

export class TeamLink extends React.Component  {
  constructor(props) {
    super(props);
  }

  render () {
    return (<a key={this.props.team.id} href={this.props.team.link} className="list-group-item">{this.props.team.name}</a>);
  }

  static propTypes = {
		team: React.PropTypes.object.isRequired
	};

	static defaultProps = {
		team: {}
	};
}
