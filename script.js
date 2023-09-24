let on = document.getElementById("on");
let led = document.getElementById("led");
let off = document.getElementById("off");
let back = document.getElementById("back");

on.addEventListener("click", ()=>{
    led.innerText="0";
});

off.addEventListener("click", ()=>{
    led.innerText="";
});

back.addEventListener("click", ()=>{
    if(led.innerText!="0" && led.innerText!=""){
        led.innerText=led.innerText.slice(0,-1);
    }
});


//add eventListener for numbers

//add eventlistener for operands

//add addition function

//add divide function

//add subtract function

//add multiply function

//add decimal function

//add equality function

//add backspace event listener

//add keyboard functionality