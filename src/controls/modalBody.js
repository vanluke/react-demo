import React from 'react';

export class ModalBody extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      	<div className="modal-body">
          {this.props.children}
        </div>
    );
  }
}
