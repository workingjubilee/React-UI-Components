Project 2 MVP requirements
- ~Create a <NumberButton /> component that can accept props and display any number/symbol passed down as text.
Example your component should be able to render a dynamic prop called text:~
- ~Your button button should also be able to accept dynamic props buttonStyle for styling
<button className={props.buttonStyle}>{props.text}</button>~
- ~Create an <ActionButton /> component that will be used for the zero character and the clear button.~
- ~Create a <CalculatorDisplay /> component that will be used as the calculator display~

Project 2 Stretch Problems
-Re-factor your App.js file to be a classical component that can hold state on it's constructor. (There is some documentation in training kit on how this works).
-On your state object be sure to include a property for the total that can be passed down to your <CalculatorDisplay /> component.
-Create some handler functions that can take in some information from an, onClick and use that information to update the total on the App state.
- this.setState will be your best friend here :)
GOOD LUCK!
