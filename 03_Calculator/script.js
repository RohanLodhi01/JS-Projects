const numberButton = document.querySelectorAll("[data-number]");
const currentOperandElement = document.querySelector(".current_operand");
const previousOperandElement = document.querySelector(".current_operand");
const operatorButtons = document.querySelectorAll("[data-operator]");
const equalsButton = document.querySelector('[data-action = "equals"]');
const clearButton = document.querySelector("[data-action = 'clear']");
const deleteButton = document.querySelector('[data-action="delete"]');
// Calculator state
let currentOperand = "0";
let previousOperand = "";
let operation = null;

function updateDisplay() {
  currentOperandElement.textContent = currentOperand;
  if (operation) {
    previousOperandElement.textContent = `${previousOperand} ${operation}`;
  } else {
    previousOperandElement.textContent = previousOperand;
  }
}

function appendNumber(number) {
  // prevent multiple decimal points
  if (number === "." && currentOperand.includes(".")) return;

  //   replace 0 with number , otherwise append
  if (currentOperand === "0") {
    currentOperand = number; // display the number
  } else {
    currentOperand += number; // add to existing number
  }
  updateDisplay();
}

function chooseOperations(operator) {
  // if current operand equals empty do nothing
  if (currentOperand === "") return;

  // if there previous operand calculate first
  if (previousOperand !== "") {
    calculate();
  }

  operation = operator;
  previousOperand = currentOperand;
  currentOperand = "0";
  updateDisplay();
}

// Perform calculation
function calculate() {
  let result;
  const prev = parseFloat(previousOperand);
  const curr = parseFloat(currentOperand);
  // if any invalid return
  if (isNaN(prev) || isNaN(curr)) return;

  switch (operation) {
    case "+":
      result = prev + curr;
      break;
    case "-":
      result = prev - curr;
      break;
    case "x":
      result = prev * curr;
      break;
    case "/":
      if (curr === 0) {
        alert("Cannot divide by zero!");
        clearInterval;
        return;
      }
      result = prev / curr;
      break;
    default:
      return;
  }

  currentOperand = result.toString();
  operation = null;
  previousOperand = "";
  updateDisplay();
}

function clear() {
  currentOperand = "0";
  previousOperand = "";
  operation = null;
  updateDisplay();
}

function deleteLastChar() {
  if (currentOperand.length === 1) {
    currentOperand = "0";
  } else {
    currentOperand = currentOperand.slice(0, -1);
  }
  updateDisplay();
}
// Event listeners
numberButton.forEach((button) => {
  button.addEventListener("click", (e) => {
    appendNumber(button.dataset.number);
  });
});

operatorButtons.forEach((button) => {
  button.addEventListener("click", () => {
    chooseOperations(button.dataset.operator);
  });
});

equalsButton.addEventListener("click", calculate);
clearButton.addEventListener("click", clear);
deleteButton.addEventListener("click", deleteLastChar);

// Initialize display
updateDisplay();
