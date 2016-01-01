import {Calendar} from './../controls/calendar';
// import BigCalendar from 'react-big-calendar/lib/css/react-big-calendar.css';
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

		componentDidMount () {
		}

		getVacations (start, end, refresh) {
			return this.vacationRepository
					.getVacationList(start, end, refresh)
					.then(v => {
						return v;
					}).catch(e => console.error(e));
		}

		onView(e) {
		}

		render () {
			let sts = this.state.vacations;
				return (
		     		 <div>
				        <Calendar
				          id='xxx'
				          events={this.getVacations.bind(this)}
				        />
				      </div>
				    )
		}
}