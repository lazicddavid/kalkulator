const DOM = {
  buttons: document.querySelectorAll("button"),
  currentValue: document.querySelector(".current-value"),
  previousValue: document.querySelector(".previous-value"),
  delete: document.querySelector(".delete"),
  clear: document.querySelector(".clear"),
};

const numbersValues = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."];

DOM.buttons.forEach(function (button) {
  button.addEventListener("click", function () {
    const value = button.textContent;
    DOM.currentValue.textContent += value;
  });
});
