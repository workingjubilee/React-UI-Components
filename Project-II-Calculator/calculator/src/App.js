import React from 'react';
import './reset.css';
import './App.css';
import ActionButton from './components/ButtonComponents/ActionButton';
import NumberButton from './components/ButtonComponents/NumberButton';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';

const App = () => {
  return (
    <div>
      <CalculatorDisplay text="0" />
      <ActionButton buttonStyle="white text" text="clear" />
      <NumberButton buttonStyle="white" text="0" />

    </div>
  );
};

// <CalculatorDisplay />
// div?

// div?
// <ActionButton />
// div?
// <NumberButton />
// <NumberButton />
// <NumberButton />
// ... etc (9 buttons)...
// /div?
// <ActionButton />
// /div?

// side buttons, div, small width
// <NumberButton />
// <NumberButton />
// <NumberButton />
// <NumberButton />
// <NumberButton />
// /div?

// /div?

export default App;
