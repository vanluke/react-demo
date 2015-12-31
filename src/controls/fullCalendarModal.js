import $ from 'jquery';
import React, { PropTypes } from 'react';
export class FullCalendarModal extends React.Component  {
	constructor (props) {
		super(props);
		this.state = {
			event: {}
		}
	}

	handleChange (name, prop) {
		 let event =  {
		 	id: this.props.event.id,
	      	title: this.props.event.title, 
	      	description: this.props.event.description,
	      	start: this.props.event.start,
	      	end: this.props.event.end,
	      	isEditing: this.props.isEditing
        };

		if (name === 'title') {
			event.title = prop.target.value;
		} else if (name === 'description') {
			event.description = prop.target.value;
		} 
     
	    this.setState({
	     	event: event
	    });
    }

	render () {
		 const { closeModal, save, isEditing } = this.props;
		 let disabledSave = this.state.event.title ? false : true;
		 let title = this.state.event.title ? this.state.event.title : this.props.event.title;
		 let start = this.state.event.start ?  this.state.event.start.format('YYYY/MM/DD') : this.props.event.start.format('YYYY/MM/DD');
		 let end = this.state.event.end  ?  this.state.event.end.format('YYYY/MM/DD') : this.props.event.start.format('YYYY/MM/DD');
		 let description = this.state.event.description ? this.state.event.description : this.props.event.description
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
                      <div className="form-group">
                      	<label className="col-sm-2 control-label" htmlFor="md-title">name</label>
                      	<input
                      		className="form-control" 
                      	    htmlId="md-title" 
                      	    type="text" 
                      	    placeholder="name"  
                      		onChange={this.handleChange.bind(this, 'title')} 
                      		value={title} />
                      </div>
                       <div>
                        <label className="col-sm-2 control-label" htmlFor="md-start-date">start date</label>
                      	<input className="form-control"  htmlId="md-start-date" type="text" value={start}  disabled />
                      </div>
                       <div>
                       	<label className="col-sm-2 control-label" htmlFor="md-end-date">end date</label>
                      	<input className="form-control"  htmlId="md-end-date" type="text" value={end}  disabled />
                      </div>
                       <div>
                       	<label className="col-sm-2 control-label" htmlFor="md-description">description</label>
                      	<textarea className="form-control" 
                      		 htmlId="md-description" 
                      		 type="text" value={description}
                      		 onChange={this.handleChange.bind(this, 'description')}></textarea>
                      </div>
                    </div>
                    <div className="modal-footer">
                      <button type="button" onClick={closeModal.bind(this)} 
                      	className="btn btn-default" 
                      	data-dismiss="modal">Close</button>
                      <button type="button" 
                      	onClick={save.bind(this, this.state.event)} 
                      	disabled={disabledSave} 
                      	className="btn btn-primary">Save changes</button>
                    </div>
                  </div>
                </div>
              </div>
            );
	}
}