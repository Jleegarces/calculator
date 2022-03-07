let num1 = parseInt(prompt("enter a number: "));
let num2 = parseInt(prompt("enter a second number: "));

document.getElementById("num1-el").textContent = num1;
document.getElementById("num2-el").textContent = num2;


function add () {
  addSum = num1 + num2;
  document.getElementById("sum-el").textContent = "Sum: " + addSum;
};

function subtract () {
  subSum = num1 - num2;
  document.getElementById("sum-el").textContent = "Sum: " + subSum;
};

function divide () {
  divSum = num1 / num2;
  document.getElementById("sum-el").textContent = "Sum: " + divSum;
};

function multiply () {
  mulSum = num1 * num2;
  document.getElementById("sum-el").textContent = "Sum: " + mulSum;
};