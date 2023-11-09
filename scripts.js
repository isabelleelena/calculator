// Calculation Functions:

function addition(...nums) {
    let result = nums.reduce((sum, current) => sum + current, 0);
    return result;
}

function subtraction(...nums) {
    if (nums.length < 1) {
        return 0
    } else {
    let result = nums.reduce((sum, current) => sum - current);
    return result;
    }
}

function multiply(...nums) {
    let result = nums.reduce((sum, current) => sum * current, 1);
    return result;
}

function divide(...nums) {
    if (nums.length < 1) {
        return 0
    } else {
        let result = nums.reduce((sum, current) => sum / current);
        return result;
    }
}

function operate(num1, num2, op) {
    if (op == '+') {
        return addition(num1, num2);
    } else if (op == '-') {
        return subtraction(num1, num2);
    } else if (op == '*') {
        return multiply(num1, num2);
    } else if (op == '/') {
        return divide(num1, num2);
    }
}

// Variables:

let firstNum = '';
let secondNum = '';
let operator = '';

let displayValue = document.querySelector(".display");
displayValue.textContent = '';

let numButtons = document.querySelectorAll('.number-button');
numButtons.forEach((button) => {
    button.addEventListener('click', () => {
        let buttonText = button.value;
        displayValue.textContent += buttonText;
    })
})

let opButtons = document.querySelectorAll('.operator-button');
opButtons.forEach((button) => {
    button.addEventListener('click', () => {
        let buttonText = button.value;
        displayValue.textContent += buttonText;
    })
})

let clearButton = document.querySelector('.clear-button');
clearButton.addEventListener('click', () => {
    displayValue.textContent = '';
})