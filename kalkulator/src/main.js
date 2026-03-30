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
//operator u state je samo trenutno izabrani operator

//ova f-ja postavlja novu vrednost operatora u state

//cita trenutnu vrednost operatora iz state
function getOperator() {
  return state.operator;
}

function setOperator(value) {
  state.operator = value;
}

//“Render funkcija ita vrednosti iz state-a preko get funkcija i prikazuje ih u DOM-u.”
function render() {
  DOM.currentValue.textContent = getCurrentValue();
  DOM.previousValue.textContent = getPreviousValue();
}
render();
