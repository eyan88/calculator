const dataNumber = document.querySelectorAll("#data-number");
const dataOperator = document.querySelectorAll("#data-operator");
const display = document.querySelector("#solution");
const equals = document.querySelector("#equals");
const deleteNum = document.querySelector("#delete");
const reset = document.querySelector("#reset")

let firstNum = "0";
let nextNum = "0";
let operator = "";
let operatorPressed = false;
let resetScreen = false;

display.textContent = "0";

function add(firstNum, nextNum) {
    return firstNum + nextNum;
}

function subtract(firstNum, nextNum) {
    return firstNum - nextNum;
}

function multiply(firstNum, nextNum) {
    return firstNum * nextNum;
}

function divide(firstNum, nextNum) {
    return firstNum/nextNum;
}

function operate(firstNum, operator, nextNum,) {
    let solution;
    switch (operator) {
        case '+':
            solution = add(firstNum, nextNum);
            break;
        case '-':
            solution = subtract(firstNum, nextNum);
            break;
        case 'x':
            solution = multiply(firstNum, nextNum);
            break;
        case '/':
            solution = divide(firstNum, nextNum);
            break;
    }
    return solution;
}

function resetDisplay() {
    display.textContent = '';
    resetScreen = false;
}

function evaluate() {
    nextNum = display.textContent;
    nextNum = parseInt(nextNum);

    if(operator == '/' && nextNum == 0) {
        alert('Error: Divide by Zero');
        clear();
        return;
    }
    console.log('next num:' + nextNum);
    display.textContent = operate(firstNum, operator, nextNum);
}

function backspace() {
    display.textContent = display.textContent.toString().slice(0, -1);
}

function clear() {
    if(confirm("Would you like to clear?")){
        firstNum = "";
        nextNum = "";
        operator = "";
        operatorPressed = false;
        display.textContent = '0';
    }
}

dataNumber.forEach(dataNumber => dataNumber.addEventListener("click", function() {
    console.log(operator);
    if(display.textContent === '0' || resetScreen){
        resetDisplay();
    }
    display.textContent += dataNumber.textContent;
}));

dataOperator.forEach(dataOperator => dataOperator.addEventListener("click", function() {
    operator = dataOperator.textContent;
    if(operatorPressed == false) {      //first number if operator isn't pressed
        firstNum = display.textContent;
        firstNum = parseInt(firstNum);
        console.log('first num:' + firstNum);
        resetScreen = true;
        operatorPressed = true;
    }
    else if(operatorPressed == true) {  //if operator is pressed, then assign the second number
        firstNum = display.textContent;
        firstNum = parseInt(firstNum);
        resetScreen = true;
    }
}))

equals.addEventListener("click", evaluate);

deleteNum.addEventListener("click", backspace);

reset.addEventListener("click", clear);