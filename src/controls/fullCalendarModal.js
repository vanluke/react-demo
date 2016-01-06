import $ from 'jquery';
import React, { PropTypes } from 'react';
import {EventForm} from './eventForm';
import {Modal} from './modal';
import {ModalHeader} from './modalHeader';
import {ModalBody} from './modalBody';
export class FullCalendarModal extends React.Component  {
	constructor (props) {
		super(props);
		this.state = {
			event: {}
		}
	}
	render () {
		const { closeModal, save, isEditing } = this.props;
		return (
			<Modal>
					<ModalHeader
						closeModal={closeModal}
						header='Vacation'/>
						<ModalBody>
						<EventForm onSave={save}
							onClose={closeModal}
							title={this.props.event.title}
							isEditing={isEditing}
							description={this.props.event.description}
							color={this.props.event.color}
							id={this.props.event.id}
							start={this.props.event.start}
							end={this.props.event.end} />
						</ModalBody>
		 </Modal>
		);
	}
}
