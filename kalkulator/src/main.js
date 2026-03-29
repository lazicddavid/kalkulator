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


DOM.buttons.forEach(
   (button) {
  button.addEventListener("click", function () {
    const value = button.textContent;

    if (numbersValues.includes(value)) {
      DOM.currentValue.textContent += value;
    }

    if (operators.includes(value)) {
      if (DOM.currentValue.textContent === "") return;

      if (DOM.previousValue.textContent === "") {
        operator = value;
        DOM.previousValue.textContent =
          DOM.currentValue.textContent + " " + value;
        DOM.currentValue.textContent = "";
      } else {
        const previousText = DOM.previousValue.textContent;
        const num1 = Number(previousText.split(" ")[0]);
        const num2 = Number(DOM.currentValue.textContent);

        let result = 0;

        if (operator === "+") result = num1 + num2;
        if (operator === "-") result = num1 - num2;
        if (operator === "/") result = num1 / num2;
        if (operator === "*") result = num1 * num2;

        operator = value;
        DOM.previousValue.textContent = result + " " + value;
        DOM.currentValue.textContent = "";
      }
    }

    if (value === "=") {
      const previousText = DOM.previousValue.textContent;
      const num1 = Number(previousText.split(" ")[0]);
      const num2 = Number(DOM.currentValue.textContent);

      let result = 0;

      if (operator === "-") result = num1 - num2;
      if (operator === "+") result = num1 + num2;
      if (operator === "*") result = num1 * num2;
      if (operator === "/") result = num1 / num2;

      DOM.currentValue.textContent = result;
      DOM.previousValue.textContent = "";
      operator = "";
    }
  });
});

DOM.clear.addEventListener("click", function () {
  DOM.currentValue.textContent = "";
  DOM.previousValue.textContent = "";
  operator = "";
});

//listeneri na brojeve
//listeneri na operacije
//state koji treba osim operacije
//kako da ubacim projekat na git ?
