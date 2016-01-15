import {Calendar} from './../controls/calendar';
import React, { PropTypes } from 'react';
import {VacationRepository} from './../repositories/vacationRepository';

import moment from 'moment';

export class VacationDashboard extends React.Component {
		constructor (props) {
			super(props);
			this.vacationRepository = new VacationRepository();
			this.state = {
				vacations: []
			};
		}

		getVacations (start, end, refresh) {
			return this.vacationRepository
					.getVacationList(start, end, refresh)
					.then(v => {
						return v;
					}).catch(e => console.error(e));
		}

		render () {
				return (
				        <Calendar
				          id='vacation-calendar-id'
									name='vacation-calendar'
				          events={this.getVacations.bind(this)}
				        />
				    )
		}
}
