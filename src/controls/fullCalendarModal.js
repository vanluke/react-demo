import $ from 'jquery';
import React, { PropTypes } from 'react';
import {EventForm} from './eventForm';
export class FullCalendarModal extends React.Component  {
	constructor (props) {
		super(props);
		this.state = {
			event: {}
		}
	}
  handleOnChange(e) {
    console.log(e);
  }
	render () {
		 const { closeModal, save, isEditing } = this.props;
		 // let disabledSave = this.state.event.title ? false : true;
     return (
              <div className="modal show">
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <button type="button" className="close" 
                      onClick={closeModal} data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span></button>
                      <h4 className="modal-title">Vacation</h4>
                    </div>
                    <div className="modal-body">
                      <EventForm onSave={save}
                       onClose={closeModal}
                       title={this.props.event.title} 
                       isEditing={isEditing} 
                       description={this.props.event.description} 
                       color={this.props.event.color} 
                        id={this.props.event.id} 
                       start={this.props.event.start} 
                       end={this.props.event.end} />
                    <div className="modal-footer">
                     
                    </div>
                  </div>
                </div>
              </div>
            </div>
            );
	}
}