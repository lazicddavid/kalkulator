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
  number1: "",
  number2: "",
};

//ova f-ja postavlja novu vrednost operatora u state
function setOperator(value) {
  state.operator = value;
}

//cita trenutnu vrednost operatora iz state
function getOperator() {
  return state.operator;
}

function setOperator(value) {
  state.operator = value;
}

//prva funkcija, za kliktanje brojeva:
 function render()