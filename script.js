const display = document.getElementById("display");
let currentInput = "";
let operator = "";
let previousInput = "";

const buttons = document.querySelectorAll(".button");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.textContent;

    if ("0123456789".includes(value)) {
      currentInput += value;
      display.textContent = currentInput;
    } else if ("+-*/".includes(value)) {
      operator = value;
      previousInput = currentInput;
      currentInput = "";
    } else if (value === "=") {
      if (operator && previousInput) {
        currentInput = eval(`${previousInput}${operator}${currentInput}`);
        display.textContent = currentInput;
        operator = "";
        previousInput = "";
      }
    } else if (value === "C") {
      currentInput = "";
      operator = "";
      previousInput = "";
      display.textContent = "0";
    }
  });
});

// dark mode
document.getElementById("darkModeToggle").addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const theme = localStorage.getItem("theme");
  if (theme === "dark") {
    document.body.classList.add("dark-mode");
  }
});
