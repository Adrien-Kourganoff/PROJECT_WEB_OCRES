import React, { Children } from 'react';
import PropTypes from 'prop-types';
import './button.css';



class Button extends React.Component {
  render() {
      const {children,primary, backgroundColor, size, rest, text, style, onClick } = this.props;

      return (
        <button className="button" {...rest}>
      {children}
          </button>)
  }
}



export default Button;