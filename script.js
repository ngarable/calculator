const display = document.querySelector('#display');

function appendToDisplay(input){
    display.value += input;
}

function clearDisplay(){
    display.value = "";
}

function calculate(){
    const expression = display.value;

    //this expression parses the input eg 5+3 --PAY MORE ATTENTION TO THIS
    const match = expression.match(/(-?\d+\.?d*)([+\-*/])(-?\d+\.?\d*)/);

    if(!match){
        display.value ='Invalid Expression';
        return;
    }

    //Extract the numbers and the operator
    const num1 = parseFloat(match[1]);
    const operator = match[2];
    const num2 = parseFloat(match[3]);

    let result;

    switch(operator){
        case '+':
            result = add(num1, num2);
            break;

        case '-':
            result = subtract(num1, num2);
            break;
            
        case '*':
            result = multiply(num1, num2);
            break;
            
        case '/':
            result = divide(num1, num2);
            break;
            
        default:
            result = 'Invalid Operation'    
    }
        display.value = result;
}


function add(a, b) {
    return a + b;
  };
  
function subtract (a, b) {
    return a - b;
  };

function divide(a,b){
    if (b === 0){
        return "Error: Division by zero"
    }
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
  
 
  