const numberButtons = document.querySelectorAll("[data-number]");
const operationButtons = document.querySelectorAll("[data-operator]");
const equalsButton = document.querySelector("[data-equals]");
const allClearButton = document.querySelectorAll("[data-all-clear]");
const deleteButtons = document.querySelectorAll("[data-delete]");
const previousOperandTextElement = document.querySelectorAll(
  "[data-previous-operand]"
);
const currentOperandTextElement = document.querySelectorAll(
  "[data-current-operand]"
);

class Calculadora {
  constructor(previousOperandTextElement, currentOperandTextElement) {
    this.previousOperandTextElement = previousOperandTextElement;
    this.currentOperandTextElement = currentOperandTextElement;
  }
}
