// Calculator
function calculate() {
  let input = document.getElementById("calcInput").value;
  document.getElementById("calcResult").innerText = eval(input);
}

// KM to Miles
function convertKM() {
  let km = document.getElementById("km").value;
  let miles = km * 0.621371;
  document.getElementById("kmResult").innerText = miles.toFixed(2);
}

// Temperature
function convertTemp() {
  let cel = document.getElementById("cel").value;
  let f = (cel * 9) / 5 + 32;
  document.getElementById("tempResult").innerText = f.toFixed(2);
}

// Odd Even
function checkOddEven() {
  let num = document.getElementById("num").value;
  document.getElementById("oddResult").innerText =
    num % 2 == 0 ? "Even" : "Odd";
}

// Positive Negative
function checkNumber() {
  let num = document.getElementById("numCheck").value;
  if (num > 0) result = "Positive";
  else if (num < 0) result = "Negative";
  else result = "Zero";

  document.getElementById("checkResult").innerText = result;
}

// Random
function randomNum() {
  let num = Math.floor(Math.random() * 100);
  document.getElementById("randomResult").innerText = num;
}
