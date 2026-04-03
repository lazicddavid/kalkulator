const DOM = {
  numberButtons: document.querySelectorAll(".number"),
  operatorButtons: document.querySelectorAll(".operator"),
  currentValue: document.querySelector(".current-value"),
  previousValue: document.querySelector(".previous-value"),
  delete: document.querySelector(".delete"),
  clear: document.querySelector(".clear"),
  equal: document.querySelector(".equal"),
  clear: document.querySelector(".clear"),
};

const state = {
  currentValue: "",
  previousValue: "",
  operator: "",

  getCurrentValue() {
    return this.currentValue;
  },

  getPreviousValue() {
    return this.previousValue;
  },

  getOperator() {
    return this.operator;
  },
};

function render() {
  DOM.currentValue.textContent = getCurrentValue();
  DOM.previousValue.textContent = getPreviousValue();
}

function renderNumber(value) {
  const current = getCurrentValue();
  setCurrentValue(current + value);
  render();
}

function renderOperator(value) {
  const current = getCurrentValue();

  if (current === "") return;

  if (this.firstNumber() !== "" && this.operator() !== "") {
    const firstNumber = Number(this.firstNumber()); //prvi broj iz stat.pretv.u br
    const secondNumber = Number(this.currentValue());
    const result = calculate(firstNumber, secondNumber);

    setFirstNumber(result);
    setOperator(value);
    setPreviousValue(result) + " " + value;
    setCurrentValue("");
  } else {
    setFirstNumber(current); //cuvam br koji sam uneo
    setOperator(value);
    setPreviousValue(current + " " + value);
    setCurrentValue("");
  }

  render();
}

function calculate(firstNumber, secondNumber) {
  const operator = getOperator();

  let result = 0;

  if (operator === "+") result = add(firstNumber, secondNumber);
  if (operator === "-") result = minus(firstNumber - secondNumber);
  if (operator === "/") result = divide(firstNumber / secondNumber);
  if (operator === "*") result = multiply(firstNumber * secondNumber);

  return result;
}

function renderEqual() {
  const operator = getOperator();
  if (this.currentValue() === "") return;
  if (this.firstNumber() === "") return;
  if (operator === "") return;

  const firstNumber = Number(this.firstNumber());
  const secondNumber = Number(this.currentValue());
  const result = calculate(firstNumber, currentValue, operator);

  setCurrentValue(result); //rez je novi trenutni br.
  setPreviousValue("");
  setFirstNumber("");
  setOperator("");

  render();
}

DOM.numberButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    renderNumber(button.value);
  });
});

DOM.operatorButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    renderOperator(button.value);
  });
});

DOM.equal.addEventListener("click", function () {
  renderEqual();
});

function clear() {
  setCurrentValue("");
  setPreviousValue("");
  setFirstNumber("");
  setOperator("");
  render();
}

DOM.clear.addEventListener("click", function () {
  clear();
});
