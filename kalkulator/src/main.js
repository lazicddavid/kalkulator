const DOM = {
  buttons: document.querySelectorAll("button"),
  currentValue: document.querySelector(".current-value"),
  previousValue: document.querySelector(".previous-value"),
  delete: document.querySelector(".delete"),
  clear: document.querySelector(".clear"),
};

const operators = ["+", "-", "*", "/"];
const numbersValues = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."];


 operator: "",

const state = {
  currentValue: "",
  previousValue: "",
};





function render() {
  DOM.currentValue.textContent = state.currentValue;
  DOM.previousValue.textContent = state.previousValue
}

function renderNumber(value) {
  state.currentValue += value;
  render()
}



/*
      if (operator === "-") result = num1 - num2;
      if (operator === "+") result = num1 + num2;
      if (operator === "*") result = num1 * num2;
      if (operator === "/") result = num1 / num2;
*/
DOM.clear.addEventListener("click", function () {
  DOM.currentValue.textContent = "";
  DOM.previousValue.textContent = "";
  operator = "";
});

//listeneri na brojeve
//listeneri na operacije
//state koji treba osim operacije
//kako da ubacim projekat na git ?
