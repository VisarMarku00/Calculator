let on = document.getElementById("on");
let led = document.getElementById("led");
let off = document.getElementById("off");
let back = document.getElementById("back");
let numbers = document.querySelectorAll(".numbers");
let keys = document.querySelectorAll(".key");
let operands = document.querySelectorAll(".operands");

let a;
let b;
let currentOpperand;

keys.forEach((key) => {
  key.disabled = true;
});

on.addEventListener("click", () => {
  led.innerText = "0";
  keys.forEach((key) => {
    key.disabled = false;
  });
});

off.addEventListener("click", () => {
  led.innerText = "";
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

//add eventListener for numbers
numbers.forEach((number) => {
  number.addEventListener("click", () => {
    if(a==""){
        a = addValue(number)
    }else{
        b=addValue(number);
        runOpperation(a,b,currentOpperand);
    }
  });
});

//add eventlistener for operands
operands.forEach((operand) => {
  operand.addEventListener("click", () => {
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
  return a / b;
}

//add subtract function
function subtract(a, b) {
  return a - b;
}

//add multiply function
function multiply(a, b) {
  return a * b;
}

//add decimal function
function decimal(num) {}

//add equality function
function equals(a, b) {}

//add backspace event listener

//add keyboard functionality

//function to add num to a or b
function addValue(button) {
    let num;
  if (led.innerText == "0" || led.innerText == "") {
    led.innerText = button.innerText;
    num = led.innerText;
    return;
  }
  led.innerText += button.innerText;
  num = led.innerText;
  return num;
}

function runOpperation(a, b, currentOpperand){
    switch(currentOpperand){
        
    }
}
