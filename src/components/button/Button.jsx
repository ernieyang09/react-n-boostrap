import React from 'react';

class Button extends React.Component {
  render() {
    return (
      <button
        className={`btn ${this.props.extraClassName || 'btn-primary'}`}
      >
        {this.props.value}
      </button>
    )
  }
}

export default Button;