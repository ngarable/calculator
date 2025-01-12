const display = document.querySelector('#display');

function appendToDisplay(input){
    display.value += input;
}

function clearDisplay(){
    display.value = "";
}

function calculate(){
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "error";
    }
}

const container = document.querySelector('#container');


function add(a, b) {
    return a + b;
  };
  
function subtract (a, b) {
    return a - b;
  };

function divide(a,b){
    return a / b;
}  

function multiply(a,b){
    return a * b;
}
function sum(array) {
    return array.reduce((total, current) => total + current, 0);
  };
  
function product(array) {
    return array.reduce((product, current) => product * current, 1)
  };
  
function power(a, b) {
    return Math.pow(a, b);
  };
  
function factorial(n) {
    let product = 1;
    for (let i = n; i > 0; i--) {
      product *= i;
    }
    return product;
  };
  
 
  