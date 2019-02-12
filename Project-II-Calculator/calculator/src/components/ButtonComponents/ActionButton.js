import React from 'react';
import './Button.css';

// <button className={props.buttonStyle}>{props.text}</button>
// Create an <ActionButton /> component that will be used for the zero character and the clear button.
// This design expectation seems incoherent actually, some buttons can simply take a Wide class?
// whatever, it's the MVP I guess.
const ActionButton = props => {
  return <button className={props.buttonStyle}>{props.text}</button>
}

export default ActionButton;
