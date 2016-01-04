import $ from 'jquery';
import React, { PropTypes } from 'react';

export class EventForm extends React.Component  {
	constructor (props) {
		super(props);
		this.state = {
			title: '',
			start: '',
			end: '',
			description: '',
			color: ''
		}
	}
   
   handleDescriptioneChange (e) {
     this.setState({description: e.target.value});
   }

   handleColorChange (e) {
      this.setState({color: e.target.value});
   }

   handleTitleChange (e) {
      this.setState({
      		title: e.target.value
      });
   }

   resolveStates () {
	   	let disabledSave = this.state.title ? false : true;
	   	let isEditing = this.props.isEditing;
	   	let id = this.props.id ?  this.props.id : undefined;
		let title = this.state.title ? this.state.title : this.props.title;
		let start = this.props.start.format('YYYY/MM/DD');
		let end = this.props.end.format('YYYY/MM/DD');
		let description = this.state.description ? this.state.description : this.props.description;
	    let color = this.state.color ? this.state.color : this.props.color;
	    return { id, disabledSave, title, start, end, description, color, isEditing };
    }

    render() {
    	let {id: id, disabledSave: disabledSave, title: title, start: start, end: end, isEditing: isEditing, description: description, color: color} = this.resolveStates();
        console.log(disabledSave, title, start, end, description, color, isEditing);
        return (
        	<div>
	        	<div className = 'form-group'>
			            <label className='col-sm-2 control-label' htmlFor='md-title'>name</label> 
			            <input className='form-control'
				            htmlId='md-title'
				            type='text'
				            placeholder='name'
				            onChange={this.handleTitleChange.bind(this)}
			            	value={title} />
			    </div>
	            <div>
		            <label className='col-sm-2 control-label' htmlFor='md-description'>description</label>
		            <textarea className='form-control'
			            htmlId='md-description'
			            type='text'
			            value={description}
			            onChange={this.handleDescriptioneChange.bind(this)}></textarea>
			    </div>
	            <div className='form-group'>
	                <label className='col-sm-2 control-label' htmlFor='md-color'>color</label>
	            	    <input
	                      className='form-control' 
	                      htmlId='md-color' 
	                      type='text' 
	                      placeholder='color'  
	                      onChange={this.handleColorChange.bind(this)} 
	                      value={color} />
	             </div>
	             <div>
	             	 <button type="button" onClick={this.props.onClose.bind(this)} 
                      	className="btn btn-default" 
                      	data-dismiss="modal">Close</button>
                      <button type="button" 
                      	onClick={this.props.onSave.bind(this, { id, title, start, end, description, color,  isEditing })} 
                      	className="btn btn-primary">Save changes</button>
	             </div>
            </div>
        )
    }

    
}
