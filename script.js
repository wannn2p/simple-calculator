const display = document.getElementById("display");
let currentInput = "";
let operator = "";
let previousInput = "";

const buttons = document.querySelectorAll(".button");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.textContent;
    const operatorData = button.getAttribute("data-operator");

    if (!operatorData) {
      currentInput += value;
      display.textContent = currentInput;
    } else {
      if ("+-*/".includes(operatorData)) {
        if (currentInput) {
          operator = operatorData;
          previousInput = currentInput;
          currentInput = "";
          display.textContent = previousInput + " " + operator;
        }
      } else if (operatorData === "=") {
        if (operator && previousInput && currentInput) {
          const num1 = parseFloat(previousInput);
          const num2 = parseFloat(currentInput);
          let result;

          switch (operator) {
            case "+":
              result = num1 + num2;
              break;
            case "-":
              result = num1 - num2;
              break;
            case "*":
              result = num1 * num2;
              break;
            case "/":
              result = num2 !== 0 ? num1 / num2 : "Error";
              break;
          }

          display.textContent = result;
          currentInput = result.toString();
          operator = "";
          previousInput = "";
        }
      } else if (operatorData === "C") {
        currentInput = "";
        operator = "";
        previousInput = "";
        display.textContent = "0";
      }
    }
  });
});

// Dark mode toggle
document.getElementById("darkModeToggle").addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
});

// save dark mode theme
document.addEventListener("DOMContentLoaded", function () {
  const theme = localStorage.getItem("theme");
  if (theme === "dark") {
    document.body.classList.add("dark-mode");
  }
});
