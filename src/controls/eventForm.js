import $ from 'jquery';
import React, { PropTypes } from 'react';
import {ColorRepository} from './../repositories/colorRepository';
import {Dropdown} from './dropdown';

export class EventForm extends React.Component  {
	constructor (props) {
		super(props);
		this.colorRepository = new ColorRepository();
		this.state = {
			title: '',
			start: '',
			end: '',
			description: '',
			color: '',
			colors: []
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

   componentWillMount() {
   		this.colorRepository
   		.getAll()
   		.then(colors => {
   			console.log(colors);
   			this.setState({
   				colors: colors.map(c => {return { label: c.name, value: c.hex } })
   			});
   		}).catch(error => console.error(error));
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

    dropDownOnChange (elemt) {
    	  this.setState({color: elemt.newValue});
    }

    render() {
    	let {id: id, disabledSave: disabledSave, title: title, start: start, end: end, isEditing: isEditing, description: description, color: color} = this.resolveStates();
        
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
	            	   <Dropdown
	            	   		key='dropdown-color'
	            	   		id='myDropdown' 
		                  	options={this.state.colors} 
		                  	value={color}
		                  	selected={color}
		                  	labelField='description'
		                  	valueField='code'
		                  	onChange={this.dropDownOnChange.bind(this)}/>
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
