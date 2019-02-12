import React from 'react';
import './reset.css';
import './App.css';
import ActionButton from './components/ButtonComponents/ActionButton';
import NumberButton from './components/ButtonComponents/NumberButton';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';

const App = () => {
  return (
    <section className="calculator">
      <CalculatorDisplay text="0" />
        <div className="buttonsbox">

          <div className="numbers">
            <ActionButton buttonStyle="wide white text" text="clear" />

            <NumberButton buttonStyle="white byThree" text="7" />
            <NumberButton buttonStyle="white byThree" text="8" />
            <NumberButton buttonStyle="white byThree" text="9" />
            <NumberButton buttonStyle="white byThree" text="4" />
            <NumberButton buttonStyle="white byThree" text="5" />
            <NumberButton buttonStyle="white byThree" text="6" />
            <NumberButton buttonStyle="white byThree" text="1" />
            <NumberButton buttonStyle="white byThree" text="2" />
            <NumberButton buttonStyle="white byThree" text="3" />

            <ActionButton buttonStyle="wide white" text="0" />
          </div>

          <div className="operations">
            <NumberButton buttonStyle="red" text="+" />
            <NumberButton buttonStyle="red" text="-" />
            <NumberButton buttonStyle="red" text="÷"/>
            <NumberButton buttonStyle="red" text="+" />
            <NumberButton buttonStyle="red" text="="/>
          </div>

      </div>
    </section>
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

// /div?

// /div?

export default App;
