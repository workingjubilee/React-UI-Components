import React from 'react';
import './Button.css';

// - Create a <NumberButton /> component that can accept props and display any number/symbol passed down as text.
// Example your component should be able to render a dynamic prop called text:
// <button className={props.buttonStyle}>{props.text}</button>
const NumberButton = props => {
  return <button className={props.buttonStyle}>{props.text}</button>
}

export default NumberButton;
