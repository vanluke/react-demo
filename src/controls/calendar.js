import $ from 'jquery';
import 'fullcalendar';
// import React, { PropTypes } from 'react';
import React, {PropTypes, ReactDOM} from 'react';


export class Calendar extends React.Component {
	constructor (props) {
		super(props);
	}

	componentDidMount () {
        $(`#${this.props.id}`).fullCalendar({
        	events: this.props.events
        });
    }

    componentWillUnmount () {
        $(`#${this.props.id}`).fullCalendar('destroy');
    }
	componentWillReceiveProps () {
	}
	componentWillUpdate () {
	}
	componentDidUpdate () {
		 $(`#${this.props.id}`)
		 	.fullCalendar( 'addEventSource', this.props.events );
    }
    handleChange (e) {
    }

    render () {
    	 return <div
    	 		id={this.props.id}
                name={this.props.name}>
                onChange={this.handleChange}
            {this.props.children}
        </div>;
    }

    static propTypes = {
    	id: React.PropTypes.string,
        events:  React.PropTypes.array,
        onChange: React.PropTypes.func
    }

    static defaultProps = {
    	id: '',
        events: [],
        onChange: () => {}
    };
}