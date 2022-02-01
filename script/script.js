function add(numArray) {
    return numArray.reduce((a, b) => a + b);
}

function subtract(numArray) {
    return numArray.reduce((a, b) => a - b);
}

function multiply(numArray) {
    return numArray.reduce((a, b) => a * b);
}

function divide(numArray) {
    return numArray.reduce((a, b) => a / b)
}

function operate(numbers, operator) {
   let result = operator === '+' ? add(numbers)
             :  operator === '-' ? subtract(numbers)
             :  operator === '*' ? multiply(numbers)
             :  operator === '/' ? divide(numbers)
             : 'error';

    return Math.round(result * 100) / 100;
}

const displayKeys = document.querySelectorAll('.display-key');
const display = document.querySelector('#display');
const numberKeys = document.querySelectorAll('.number');
const operatorKeys = document.querySelectorAll('.operator');
const clear = document.querySelector('.clear');
const equals = document.querySelector('.equals');
let numberHolder = '';
let userNumbers = [];
let operators = [];

displayKeys.forEach(key => key.addEventListener('click', updateDisplay));
operatorKeys.forEach(operator => operator.addEventListener('click', operatorClick));
numberKeys.forEach(number => number.addEventListener('click', storeNumbers));
clear.addEventListener('click', clearDisplay);
equals.addEventListener('click', onEqualsClick);


function storeNumbers(number) {
    numberHolder += number.currentTarget.textContent;
    numberholder = numberHolder.split('').reverse().join('');
}

function updateDisplay(key) {
        display.textContent += key.currentTarget.textContent;
}

function clearDisplay() {
    display.textContent = "";
    userNumbers = [];
    operators = [];
    numberHolder = '';
}

function storeUserNumber() {
    userNumbers.push(parseInt(numberHolder));
    numberHolder = '';
}

function operatorClick(operator) {
    operators.push(operator.currentTarget.textContent);
    if(numberHolder !== '') {
        storeUserNumber();
    }
    if(operators.length < 2) {
        return;
    } else {
        calculate();
    }
}

function onEqualsClick () {
    if(userNumbers.length < 2) {
        storeUserNumber();
    }
    calculate();
}

function calculate() {
    display.textContent = '';
    display.textContent = operate(userNumbers, operators[0]);
    userNumbers[1] = parseInt(display.textContent);
    operators.shift();
    userNumbers.shift();
    if(operators[0] !== undefined) {
        display.textContent += operators[0];
    }
    console.log('wait');
}

