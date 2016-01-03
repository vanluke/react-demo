import $ from 'jquery';
import Firebase from 'firebase';
import React, {PropTypes, ReactDOM} from 'react';
import {FullCalendarModal} from './fullCalendarModal'
import {VacationRepository} from './../repositories/vacationRepository';
import uuid from './../middleware/uuid';
import {FullCalendar} from './../middleware/fullcalendar';
import { dateToPrimitiveValue, toFirebaseObject } from './../middleware/helper';

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
        this.setState({showModal: true, event: event, isEditing: isEditing});
        this.fullCalendar.unselect();
      }

      _toFirebaseObject (event, isnew) {
            return toFirebaseObject(event, isnew);
      }

    _saveEvent (event) {
       if (event.isEditing) {
         event = this._toFirebaseObject(event, false);
         this.vacationRepository
            .edit (event)
            .then(response=> {
               console.log(response);
               this.fullCalendar.updateEvent(response);
            })
            .catch(error=> console.error(error));
         
       } else {
            event = this._toFirebaseObject(event, true);
            this.vacationRepository
            .add (event)
            .then(response=> {
              console.log(response);
                  this.fullCalendar.renderEvent(response);
            })
            .catch(error=> console.log(error));
       }
       this._closeModal();
    }
    
    _closeModal() {
        this.setState({showModal: false});
    }

    _refreshCalendar(snapshot) {
         let event = snapshot.val();
         if (event.id) {
            this.fullCalendar.removeEvent(event);
         }
         this.fullCalendar.renderEvent(event);
    }
	componentDidMount () {
        this.fullCalendar = new FullCalendar (`#${this.props.id}`);
        this.fullCalendar.create (this.fullcalendarSetup);
    }
    
    componentWillUnmount () {
         this.fullCalendar.destroy();
         this.vacationRepository.turnOff();
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

    get fullcalendarSetup () {
        let self = this;
        return  {
               events: (start, end, timezone, callback) => {

                    self.props.events(start, end, 
                        this._refreshCalendar.bind(this))
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
            }
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