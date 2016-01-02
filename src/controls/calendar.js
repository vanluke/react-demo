import $ from 'jquery';
import 'fullcalendar';
import Firebase from 'firebase';
import React, {PropTypes, ReactDOM} from 'react';
import {FullCalendarModal} from './fullCalendarModal'
import {VacationRepository} from './../repositories/vacationRepository';
import uuid from './../middleware/uuid';
import { dateToPrimitiveValue } from './../middleware/helper';

export class Calendar extends React.Component {
	constructor (props) {
	   super(props);
       this.vacationRepository = new VacationRepository();
       this.state = {
          showModal: false,
          items: []
        };
	}
    _openModal(event, isEditing) {
        let id = `#${this.props.id}`;
        this.setState({showModal: true, event: event, isEditing: isEditing});
        $(`${id}`).fullCalendar('unselect');
      }

      _toFirebaseObject (event, isnew) {
            event.id = isnew ? uuid() : event.id;
            event.start = dateToPrimitiveValue(event.start);
            event.end = dateToPrimitiveValue(event.end);
            return event;
      }

    _saveEvent (event) {
       let id = `#${this.props.id}`;
       
       if (event.isEditing) {
         event = this._toFirebaseObject(event, false);
         this.vacationRepository
            .edit (event)
            .then(response=> {
                 $(`${id}`).fullCalendar('removeEvents', event.id);
                 $(`${id}`).fullCalendar('renderEvent', event, true);
            })
            .catch(error=> console.log(error));
         
       } else {
            event = this._toFirebaseObject(event, true);
            this.vacationRepository
            .add (event)
            .then(response=> {
                 $(`${id}`).fullCalendar('renderEvent', event, true);
            })
            .catch(error=> console.log(error));
       }
       this._closeModal();
    }
    
    _closeModal() {
        this.setState({showModal: false});
    }

    _refreshCalendar(snapshot) {
         let id = `#${this.props.id}`;
         let event = snapshot.val();
         console.log('nie');
         if (event.id) {
            $(`${id}`).fullCalendar('removeEvents', event.id);
         }
         $(`${id}`).fullCalendar('renderEvent', event, true);
    }
	componentDidMount () {
        let id = `#${this.props.id}`;
        let self = this;
        $(`#${this.props.id}`).fullCalendar({
               events: (start, end, timezone, callback) => {
                    self.props.events(start, end, this._refreshCalendar.bind(this))
                        .then (evt => callback(evt))
                        .catch(error => console.log(error));
                },
                selectable: true,
                eventClick: (calEvent, jsEvent, view) => {
                    this._openModal(calEvent, true);
                },
                editable: true,
                select: (start, end) => {
                    let eventData = {
                        title: '',
                        description: '',
                        start: start,
                        end: end
                    };
                    this._openModal(eventData);
                },
            });
    }
    
    componentWillUnmount () {
        $(`#${this.props.id}`)
            .fullCalendar('destroy');
         this.firebaseRef.off();
    }
	
    componentWillReceiveProps () {
	}
	
    componentWillMount () {
	}
	
    componentDidUpdate () {
		   $(`#${this.props.id}`)
            .fullCalendar( 'rerenderEvents');
    }
   
    render () {
        let { showModal } = this.state;
        let event = this.state.event
    	return <div
    	 		id={this.props.id}
                name={this.props.name}>
        {showModal 
          ? <FullCalendarModal key='0.0.0.0.1-kodal' 
                closeModal={this._closeModal.bind(this)} 
                save={this._saveEvent.bind(this)}
                isEditing={this.state.isEditing}
                event={event} />
          : undefined}
        </div>;
    }

    static propTypes = {
    	id: React.PropTypes.string,
        events:  React.PropTypes.func,
        onChange: React.PropTypes.func,
        event: React.PropTypes.object
    }

    static defaultProps = {
    	id: '',
        onChange: () => {},
        event: {}
    };
    modal;
}