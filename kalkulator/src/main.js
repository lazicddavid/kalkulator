const DOM = {
  numberButtons: document.querySelectorAll(".number"),
  operatorButtons: document.querySelectorAll(".operator"),
  currentValue: document.querySelector(".current-value"),
  previousValue: document.querySelector(".previous-value"),
  delete: document.querySelector(".delete"),
  clear: document.querySelector(".clear"),
  equal: document.querySelector(".equal"),
  square: document.querySelector(".square"),
};

const state = {
  currentValue: "",
  previousValue: "",
  operator: "",
  firstNumber: "",

  getFirstNumber() {
    return this.firstNumber;
  },
  getCurrentValue() {
    return this.currentValue;
  },

  getPreviousValue() {
    return this.previousValue;
  },

  getOperator() {
    return this.operator;
  },

  setCurrentValue(value) {
    this.currentValue = value;
  },

  setPreviousValue(value) {
    this.previousValue = value;
  },

  setOperator(value) {
    this.operator = value;
  },
  setFirstNumber(value) {
    this.firstNumber = value;
  },
};

function render() {
  DOM.currentValue.textContent = state.getCurrentValue();
  DOM.previousValue.textContent = state.getPreviousValue();
}

function handleDelete() {
  const current = state.getCurrentValue();

  state.setCurrentValue(current.slice(0, -1));
  render();
}

function renderNumber(value) {
  const current = state.getCurrentValue();
  state.setCurrentValue(current + value);
  render();
}
function renderOperator(value) {
  const current = state.getCurrentValue();

  if (current === "") return;

  if (state.getFirstNumber() !== "" && state.getOperator() !== "") {
    const firstNumber = Number(state.getFirstNumber());
    const secondNumber = Number(current);
    const result = calculate(firstNumber, secondNumber);

    state.setFirstNumber(String(result));
    state.setOperator(value);
    state.setPreviousValue(result + " " + value);
    state.setCurrentValue("");
  } else {
    state.setFirstNumber(current);
    state.setOperator(value);
    state.setPreviousValue(current + " " + value);
    state.setCurrentValue("");
  }

  render();
}
//pomocne funkcije:

//deljenje sa nulom
//dupliranje tacke
//kvadrat x2
//prefiks handle
function handleDecimal() {
  const current = state.getCurrentValue();

  if (current.includes(".")) return;

  if (current === "") {
    state.setCurrentValue("0.");
  } else {
    state.setCurrentValue(current + ".");
  }

  render();
}

function calculate(firstNumber, currentValue) {
  const operator = state.getOperator();
  let result = 0;
  if (operator === "/" && currentValue === 0) {
    alert("can not divide wiht 0");
    return;
  }

  if (operator === "+") return add(firstNumber, currentValue);
  if (operator === "-") return minus(firstNumber, currentValue);
  if (operator === "*") return multiply(firstNumber, currentValue);
  if (operator === "/") return divide(firstNumber, currentValue);

  return result();
}
function handleSquare() {
  const value = state.getCurrentValue();
  if (value === "") return;

  state.setCurrentValue(value * value);
  render();
}
state.render


function renderEqual() {
  const operator = state.getOperator();
  const current = state.getCurrentValue();

  if (current === "") return;
  if (state.getFirstNumber() === "") return;
  if (operator === "") return;

  const firstNumber = Number(state.getFirstNumber());
  const secondNumber = Number(current);
  const result = calculate(firstNumber, secondNumber);

  state.setCurrentValue(String(result));
  state.setPreviousValue("");
  state.setFirstNumber("");
  state.setOperator("");

  render();
}

DOM.operatorButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    renderOperator(button.value);
  });
});

DOM.equal.addEventListener("click", function () {
  renderEqual();
});

function handleClear() {
  state.setCurrentValue("");
  state.setPreviousValue("");
  state.setOperator("");
  state.setFirstNumber("");
  render();
}

DOM.clear.addEventListener("click", function () {
  handleClear();
});

DOM.delete.addEventListener("click", function () {
  handleDelete();
});

DOM.square.addEventListener("click", function () {
  handleSquare();
});

DOM.numberButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    if (button.value === ".") {
      handleDecimal();
    } else {
      renderNumber(button.value);
    }
  });
});
