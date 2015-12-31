import $ from 'jquery';
import 'fullcalendar';
import React, {PropTypes, ReactDOM} from 'react';
import {FullCalendarModal} from './fullCalendarModal'

export class Calendar extends React.Component {
	constructor (props) {
	   super(props);
       this.state = {
          showModal: false
        };
	}
    _openModal(event, isEditing) {
        let id = `#${this.props.id}`;
        this.setState({showModal: true, event: event, isEditing: isEditing});
        $(`${id}`).fullCalendar('unselect');
      }

    _saveEvent (event) {
       let id = `#${this.props.id}`;
       if (event.isEditing) {
         $(`${id}`).fullCalendar('removeEvents', event.id);
         $(`${id}`).fullCalendar('renderEvent', event, true);
       } else {
         $(`${id}`).fullCalendar('renderEvent', event, true);
       }
      
       this._closeModal();
    }
    
    _closeModal() {
        this.setState({showModal: false});
    }

	componentDidMount () {
        let id = `#${this.props.id}`;
        this.props.events()
             .then(p => {
                 let evt = p;
             $(`#${this.props.id}`).fullCalendar({
                    events: evt,
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
            });
    }
    
    componentWillUnmount () {
        $(`#${this.props.id}`)
            .fullCalendar('destroy');
    }
	
    componentWillReceiveProps () {
	}
	
    componentWillUpdate () {
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
          ? <FullCalendarModal key="0.0.0.0.1-kodal" 
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