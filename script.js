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
        case 'plus':
            solution = add(firstNum, nextNum);
            break;
        case 'minus':
            solution = subtract(firstNum, nextNum);
            break;
        case 'times':
            solution = multiply(firstNum, nextNum);
            break;
        case 'divided':
            solution = divide(firstNum, nextNum);
            break;
    }
    return solution;
}