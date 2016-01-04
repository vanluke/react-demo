import React from 'react';

export class Dropdown extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            value: undefined,
            valueField: 'value',
            labelField: 'label',
            onChange: undefined,
            option: [],
            selected: ''
        }
    }

     componentWillReceiveProps (nextProps) {
        let selected 
            = this.getSelectedFromProps(nextProps);
        this.setState({
           selected: selected
        });
    }

    getSelectedFromProps(props) {
        let selected;
        if (props.value === null && props.options.length !== 0) {
            selected = props.options[0][props.valueField];
        } else {
            selected = props.value;
        }
        return selected;
    }

    handleChange (e) {
        if (this.props.onChange) {
            let change = {
              oldValue: this.state.selected,
              newValue: e.target.value
            }
            this.props.onChange(change);
        }
        this.setState({selected: e.target.value});
    }

     render () {
        let self = this;
        let options = self.props.options.map((option) => {
            return (
                <option key={option.label} value={option.value}>
                    {option.label}
                </option>
            )
        });
        return (
            <select id={this.props.id} 
                    key={this.props.id}
                    className='form-control' 
                    value={this.state.selected} 
                    onChange={this.handleChange.bind(this)}>
                {options}
            </select>
        )
    }

    static propTypes = {
        id: React.PropTypes.string.isRequired,
        options: React.PropTypes.array.isRequired,
        selected: React.PropTypes.string,
        value: React.PropTypes.oneOfType([
           React.PropTypes.number,
           React.PropTypes.string
        ]),
        valueField: React.PropTypes.string,
        labelField: React.PropTypes.string,
        onChange: React.PropTypes.func
    };
}