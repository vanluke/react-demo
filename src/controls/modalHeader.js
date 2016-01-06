import React from 'react';

export class ModalHeader extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <div className="modal-header">
        <button type="button" className="close"
          onClick={this.props.closeModal.bind(this)}
          data-dismiss="modal" aria-label="Close">
        <span aria-hidden="true">&times;</span></button>
        <h4 className="modal-title">{this.props.header}</h4>
      </div>
    )
  }

  static propTypes = {
    closeModal: React.PropTypes.func.isRequired,
    header: React.PropTypes.string.isRequired
  }


  static defaultProps = {
    closeModal: () => {},
    header: ''
  }
}
