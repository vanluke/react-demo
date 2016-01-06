import $ from 'jquery';
import 'fullcalendar';
import { toReadableDate } from './../middleware/helper';

export class FullCalendar {
	constructor (fullcalendarRef) {
		this.calendar = $(fullcalendarRef);
	}

	updateEvent (event) {
		if (event && event.id) {
		 	this.removeEvent(event);
            this.renderEvent(event);
		}
	}

	create (options) {
		if (!this.calendar) {
			throw 'calendar is not defined.';
		}

		return this.calendar.fullCalendar(options);
	}

	destroy () {
		this.calendar
             .fullCalendar('destroy');
	}

	removeEvent(event) {
		if (event && event.id) {
			 event = this._parseObject (event);
			 this.calendar.fullCalendar('removeEvents', event.id);
		}
	}

	renderEvent (event) {
		if (event) {
		  this.calendar.fullCalendar('renderEvent', event, true);
		}
	}

	unselect () {
		this.calendar.fullCalendar('unselect');
	}

	_parseObject (event) {
		event.start = toReadableDate (event.start);
		event.end = toReadableDate (event.end);
		return event;
	}
}
