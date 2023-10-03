let on = document.getElementById("on");
let led = document.getElementById("led");
let off = document.getElementById("off");
let back = document.getElementById("back");
let numbers = document.querySelectorAll(".numbers");
let keys = document.querySelectorAll(".key");
let operands = document.querySelectorAll(".operands");
let equals = document.getElementById("equals");
let decimal = document.getElementById("decimal");

let a = "";
let b = "";
let currentOpperand;

keys.forEach((key) => {
  key.disabled = true;
});

on.addEventListener("click", () => {
  led.innerText = "0";
  a = "";
  b = "";
  currentOpperand = "";
  keys.forEach((key) => {
    key.disabled = false;
  });
});

off.addEventListener("click", () => {
  led.innerText = "";
  a = "";
  b = "";
  currentOpperand = "";
  keys.forEach((key) => {
    key.disabled = true;
  });
});

back.addEventListener("click", () => {
  if (led.innerText != "0" && led.innerText != "") {
    led.innerText = led.innerText.slice(0, -1);
    a = led.innerText;
  }
});

equals.addEventListener("click", () => {
  if (a != "" || b != "") {
    runOpperation(a, b, currentOpperand);
  }
});

decimal.addEventListener("click", () => {
  if (!led.textContent.includes(".")) {
    if (currentOpperand == "") {
      a = addValue(decimal);
    } else {
      b = addValue(decimal);
    }
  }
});

//add eventListener for numbers
numbers.forEach((number) => {
  number.addEventListener("click", () => {
    if (a == "" || currentOpperand == "") {
      a = addValue(number);
    } else {
      b = addValue(number);
    }
  });
});

//add eventlistener for operands
operands.forEach((operand) => {
  operand.addEventListener("click", () => {
    if (currentOpperand != "" && b != "") {
      runOpperation(a, b, currentOpperand);
    }
    led.innerText = "";
    currentOpperand = operand.innerText;
  });
});

//add addition function
function add(a, b) {
  return a + b;
}

//add divide function
function divide(a, b) {
  if (b == 0) return "Cheeky fucker!";
  let num = a / b;
  if (num.toString().includes(".")) {
    return num.toFixed(2);
  }
  return num;
}

//add subtract function
function subtract(a, b) {
  return a - b;
}

//add multiply function
function multiply(a, b) {
  return a * b;
}

//function to add num to a or b
function addValue(button) {
  let num;
  if (led.innerText == "0" || led.innerText == "") {
    led.innerText = button.innerText;
    num = led.innerText;
    return num;
  }
  led.innerText += button.innerText;
  num = led.innerText;
  return num;
}

function refreshValues() {
  if (led.textContent == "ERROR!") {
    a = "";
    b = "";
  } else {
    a = led.textContent;
    b = "";
  }
}

function runOpperation(a, b, currentOpperand) {
  switch (currentOpperand) {
    case "+":
      led.textContent = add(a, b);
      refreshValues();
      break;
    case "-":
      led.textContent = subtract(a, b);
      refreshValues();
      break;
    case "×":
      led.textContent = multiply(a, b);
      refreshValues();
      break;
    case "÷":
      led.textContent = divide(a, b);
      refreshValues();
      break;
    default:
      led.textContent = "ERROR!";
      refreshValues();
  }
}
