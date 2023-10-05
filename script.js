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

function resetCalc(){
  a = "";
  b = "";
  currentOpperand = "";
  keys.forEach((key) => {
    if(!key.disabled){
      led.innerText = "";
      key.disabled = true;
    }else{
      led.innerText = "0";
      key.disabled = false;
    }
  });
}

back.addEventListener("click", () => {
  if (led.innerText != "0" && led.innerText != "") {
    led.innerText = led.innerText.slice(0, -1);
    a = led.innerText;
  }
});

function backspace(){
  if (led.innerText != "0" && led.innerText != "") {
    led.innerText = led.innerText.slice(0, -1);
    a = led.innerText;
  }
}

equals.addEventListener("click", () => {
  equalsFunction();
});

function equalsFunction() {
  if (a != "" || b != "") {
    runOpperation(a, b, currentOpperand);
  }
}

decimal.addEventListener("click", () => {
  decimalPoint(decimal);
});

function decimalPoint(decimal) {
  if (!led.textContent.includes(".")) {
    if (currentOpperand == "") {
      a = addValue(decimal);
    } else {
      b = addValue(decimal);
    }
  }
}

document.addEventListener("keydown", function (event) {
  const key = event.key;
  if (!key) return;

  if (["+", "-", "/", "*"].includes(key)) {
    selectOperand(key);
  } else if (key >= "0" && key <= "9") {
    addValueToAorB(key);
  } else if (key == ".") {
    decimalPoint(key);
  } else if (key == "=") {
    equalsFunction();
  }else if(key == "Backspace"){
    backspace();
  }else if(key == "Enter"){
    resetCalc();
  }
});

//add eventListener for numbers
numbers.forEach((number) => {
  number.addEventListener("click", () => {
    addValueToAorB(number.innerText);
  });
});

function addValueToAorB(number) {
  if (a == "" || currentOpperand == "") {
    a = addValue(number);
  } else {
    b = addValue(number);
  }
}

//add eventlistener for operands
operands.forEach((operand) => {
  operand.addEventListener("click", () => {
    let operandValue = operand.innerText;
    if (operandValue == "÷") {
      selectOperand("/");
    } else if (operandValue == "×") {
      selectOperand("*");
    } else {
      selectOperand(operandValue);
    }
  });
});

function selectOperand(operand) {
  if (currentOpperand != "" && b != "") {
    runOpperation(a, b, currentOpperand);
  }
  led.innerText = "";
  currentOpperand = operand;
}

//add addition function
function add(a, b) {
  return Number(a) + Number(b);
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
function addValue(key) {
  let num;
  if (led.innerText == "0" || led.innerText == "") {
    led.innerText = key;
    num = led.innerText;
    return num;
  }
  led.innerText += key;
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
    case "*":
      led.textContent = multiply(a, b);
      refreshValues();
      break;
    case "/":
      led.textContent = divide(a, b);
      refreshValues();
      break;
    default:
      led.textContent = "ERROR!";
      refreshValues();
  }
}
