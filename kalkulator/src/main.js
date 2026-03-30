//listeneri na brojeve
//listeneri na operacije
//state koji treba osim operacije
//git

const DOM = {
  numberButtons: document.querySelectorAll(".number"),
  operatorButtons: document.querySelectorAll(".operator"),
  currentValue: document.querySelector(".current-value"),
  previousValue: document.querySelector(".previous-value"),
  delete: document.querySelector(".delete"),
  clear: document.querySelector(".clear"),
};

const state = {
  currentValue: "",
  previousValue: "",
  operator: "",
};

function getPreviousValue() {
  return state.previousValue;
}
//get samo vraca postojecu vrednost
function getCurrentValue() {
  return state.currentValue;
}

//(value) zato sto set prima novu funkciju koju treba da upise
function setCurrentValue(value) {
  state.currentValue = value;
}

function setPreviousValue(value) {
  state.previousValue = value;
}

//ova f-ja postavlja novu vrednost operatora u state

//cita trenutnu vrednost operatora iz state
function getOperator() {
  return state.operator;
}

function setOperator(value) {
  state.operator = value;
}

//“Render funkcija cita vrednosti iz state-a preko get funkcija i prikazuje ih u DOM-u.”
function render() {
  DOM.currentValue.textContent = getCurrentValue();
  DOM.previousValue.textContent = getPreviousValue();
}

setCurrentValue("13");
setPreviousValue("45 +");

console.log(getCurrentValue());
console.log(getPreviousValue());
