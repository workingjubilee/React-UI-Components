import React from 'react';
import './Display.css';

// Create a <CalculatorDisplay /> component that will be used as the calculator display
const CalculatorDisplay = props => {
  return (
    <div className="display">
      <p>{props.text}</p>
    </div>
  );

}

export default CalculatorDisplay;
