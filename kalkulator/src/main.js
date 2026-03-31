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

//cita trenutnu vrednost operatora iz state
function getOperator() {
  return state.operator;
}
console.log("--------------------------------------------");
//(value) zato sto set prima novu vrednost
function setCurrentValue(value) {
  state.currentValue = value;
}

//postavlja novu vrednost previousValue u state
function setPreviousValue(value) {
  state.previousValue = value;
}
//set funkcija postavlja novu vrednost u state
function setOperator(value) {
  state.operator = value;
}

//“Render funkcija cita vrednosti iz state-a preko get funkcija i prikazuje ih u DOM-u.”
function render() {
  DOM.currentValue.textContent = getCurrentValue();
  DOM.previousValue.textContent = getPreviousValue();
}

function renderNumber(value) {
  const current = getCurrentValue();
  setCurrentValue(current + value);
  render();
}



function renderOperator(value); {
const current = getCurrentValue();
setOperator(value);

setPreviousValue(current + " " +value)
setCurrentValue("")


}
render()

//prolazim kroz svako dugme, klikom, uzimam vrednost dugmeta ( value) , saljem u funkciju
DOM.numberButtons.forEach(function (button) {
  button.addEventListener("click" , function() {
    renderNumber(button.value);
  });
});






DOM.operatorButtons.forEach(function (buttons) {
  button.addEventListener("click" function(){
    renderOperator(button.value);
  })
})