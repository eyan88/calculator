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

const dataNumber = document.querySelectorAll("#data-number");
const dataOperator = document.querySelectorAll("#data-operator");
const display = document.querySelector("#solution");
const equals = document.querySelector("#equals");
const deleteNum = document.querySelector("#delete");

let firstNum = "";
let nextNum = "";
let operator = "";
let operatorPressed = false;

dataNumber.forEach(dataNumber => dataNumber.addEventListener("click", function() {
    console.log(operator);
    if(operatorPressed == false) {
        display.textContent += dataNumber.textContent;
    }
    else if(operatorPressed == true) {
        display.textContent += dataNumber.textContent;
    }
}));

dataOperator.forEach(dataOperator => dataOperator.addEventListener("click", function() {
    operator = dataOperator.textContent;
    if(operatorPressed == false) {
        firstNum = display.textContent;
        firstNum = parseInt(firstNum);
        console.log('first num:' + firstNum);
        display.textContent = "";
        operatorPressed = true;
    }
    else if(operatorPressed == true) {
        firstNum = display.textContent;
        firstNum = parseInt(firstNum);
        display.textContent = "";
    }
}))

equals.addEventListener("click", evaluate);
deleteNum.addEventListener("click", backspace);

function evaluate() {
    nextNum = display.textContent;
    nextNum = parseInt(nextNum);

    if(nextNum == 0) {
        alert('Error: Divide by Zero');
        return;
    }
    console.log('next num:' + nextNum);
    display.textContent = operate(firstNum, operator, nextNum);
}

function backspace() {
    display.textContent = display.textContent.toString().slice(0, -1);
}

