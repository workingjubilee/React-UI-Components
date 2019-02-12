import React from 'react';
import './Display.css';

// Create a <CalculatorDisplay /> component that will be used as the calculator display
const CalculatorDisplay = props => {
  return <div className="display">{props.text}</div>

}

export default CalculatorDisplay;
