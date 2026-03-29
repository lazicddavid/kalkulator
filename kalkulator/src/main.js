const DOM = {
  numberButtons: document.querySelectorAll(".number"),
  operatorButtons: document.querySelectorAll(".operator"),
  currentValue: document.querySelector(".current-value"),
  previousValue: document.querySelector(".previous-value"),
  delete: document.querySelector(".delete"),
  clear: document.querySelector(".clear"),
};

const operators = ["+", "-", "*", "/"];
const numbersValues = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."];

let operator = "";

const state = {
  currentValue: "",
  previousValue: "",
};

function render() {
  DOM.currentValue.textContent = state.currentValue;
  DOM.previousValue.textContent = state.previousValue;
}

function renderNumber(value) {
  state.currentValue += value;
  render();
}

function calculate(num1, num2) {
  let result = 0;
  if (operator === "-") result = num1 - num2;
  if (operator === "+") result = num1 + num2;
  if (operator === "*") result = num1 * num2;
  if (operator === "/") result = num1 / num2;
  return result;
}

function renderOperator(value) {
  if (state.currentValue === "") return;

  if (state.previousValue === "") {
    operator = value;
    state.previousValue = state.currentValue + " " + value;
    state.currentValue = "";
  } else {
    const previousText = state.previousValue;
    const num1 = Number(previousText.split(" ")[0]);
    const num2 = Number(state.currentValue);

    const result = calculate(num1, num2);

    operator = value;
    state.previousValue = result + " " + value;
    state.currentValue = "";
  }
  render();
}

function renderEqual() {
  const previousText = state.previousValue;
  const num1 = Number(previousText.split(" ")[0]);
  const num2 = Number(state.currentValue);

  const result = calculate(num1, num2);
  state.currentValue = result;
  state.previousValue = "";
  operator = "";

  render();
}

function handleClear() {
  state.currentValue = "";
  state.previousValue = "";
  operator = "";
  render();
}

DOM.clear.addEventListener("click", function () {
  handleClear();
});

DOM.buttons.forEach(function (button) {
  button.addEventListener("click", function () {
    const value = button.textContent;

    if (numbersValues.includes(value)) {
      renderNumber(value);
    }

    if (operators.includes(value)) {
      renderOperator(value);
    }

    if (value === "=") {
      renderEqual();
    }
  });
});

//listeneri na brojeve
//listeneri na operacije
//state koji treba osim operacije
//kako da ubacim projekat na git ?
