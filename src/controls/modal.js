import React from 'react';

export class Modal extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="modal show">
        <div className="modal-dialog">
          	<div className="modal-content">
              {this.props.children}
            </div>
        </div>
      </div>
    );
  }
}
