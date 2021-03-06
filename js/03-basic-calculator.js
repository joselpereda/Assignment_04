// GLOBAL VARIALBES
let number1;
let number2;
let operandChoice;
let operandChoiceUpper;

// IMPORT THE MODULE
import * as calc from "./modules/calculator.js";

// COLLECT NUMBER 1, NUMBER 2, AND OPERATION FROM THE USER
number1 = Number(prompt("Enter the first number:"));
number2 = Number(prompt("Enter the second number:"));

// CHECK TO SEE WHAT OPERATION THEY'RE USING
operandChoice = prompt("What operation do you want to perfomr? (add, subtract, multiply, divide)");
operandChoiceUpper = operandChoice.toUpperCase();

// CHECK THAT OPERATOR ENTERED IS VALID
do {
    if (!((operandChoiceUpper === "ADD") || (operandChoiceUpper === "SUBTRACT") || (operandChoiceUpper === "MULTIPLY") || (operandChoiceUpper === "DIVIDE"))) {
        alert("Operator entered is not valid. Re-enter values.")
        number1 = Number(prompt("Enter the first number:"));
        number2 = Number(prompt("Enter the second number:"));
        operandChoice = prompt("What operation do you want to perfomr? (add, subtract, multiply, divide)");
        operandChoiceUpper = operandChoice.toUpperCase();
    } else
        break;
} while (true);

//evaluate the operation parameter being passed and perform the appropriate operation
switch (operandChoiceUpper) {
    case "ADD":
        alert(`${number1} + ${number2} = ${calc.add(number1, number2)}`);
        break;
    case "DIVIDE":
        alert(`${number1} / ${number2} = ${calc.divide(number1, number2)}`);
            break;
    case "MULTIPLY":
        alert(`${number1} x ${number2} = ${calc.multiply(number1, number2)}`);
        break;
    case "SUBTRACT":
        alert(`${number1} - ${number2} = ${calc.subtraction(number1, number2)}`);
        break;
    default:
        alert("No match!")
        break;                 
}
  