const container = document.querySelector('.container');


function add(a, b) {
    return a + b;
  };
  
function subtract (a, b) {
    return a - b;
  };

function divide(a,b){
    return a / b;
}  

function sum(array) {
    return array.reduce((total, current) => total + current, 0);
  };
  
function multiply(array) {
    return array.reduce((product, current) => product * current)
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
  
 
  