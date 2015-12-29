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
			this.getVacations()
			.then (v => {
				this.setState({ vacations: v});
				// this.forceUpdate();
			}); 
		}

		getVacations () {
			return this.vacationRepository
					.getVacationList()
					.then(v => v)
					.catch(e => console.error(e));
		}

		onView(e) {
				console.log(e);
		}

		render () {
			let sts = this.state.vacations;
			console.log(sts);
				return (
		     		 <div>
				        <Calendar
				          id='xxx'
				          events={sts}
				          
				        />
				      </div>
				    )
		}
}