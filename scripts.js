// Variables:

let firstNum = 0;
let secondNum = 0;
let operator = '';
let decimalClicked = false;

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
    return result.toFixed(2);
}

function divide(...nums) {
    if (nums.length < 1) {
        return 0
    } else {
        let result = (nums.reduce((sum, current) => sum / current)).toFixed(2);
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

function calcDisplayValue(string) {
    let operationArray = string.split(' ');
    while (operationArray.length > 1) {
        if (operationArray[1] == '/' && operationArray[2] == 0) {
            return "You are a nincompoop. You can't divide by zero!"
        } else {
            firstNum = +(operationArray[0]);
            secondNum = +(operationArray[2]);
            operator = operationArray[1];
            let newIndexZero = operate(firstNum, secondNum, operator);
            operationArray.splice(0, 3, newIndexZero);
        }
    }
    return operationArray[0]
}

// Query selectors and event listeners:

let displayValue = document.querySelector(".input");
displayValue.textContent = '';

let numButtons = document.querySelectorAll('.number-button');
numButtons.forEach((button) => {
    button.addEventListener('click', () => {
        let buttonText = button.value;
        displayValue.textContent += buttonText;
        return displayValue
    })
})
numButtons.forEach((button) => {
    button.addEventListener('mouseover', () => {
        button.style.backgroundColor = '#d63170';
    })
})
numButtons.forEach((button) => {
    button.addEventListener('mouseout', () => {
        button.style.backgroundColor = '#ffd0e2'
    })
})

let opButtons = document.querySelectorAll('.operator-button');
opButtons.forEach((button) => {
    button.addEventListener('click', () => {
        decimalClicked = false;
        let buttonText = button.value;
        displayValue.textContent += ` ${buttonText} `;
        return displayValue
    })
})
opButtons.forEach((button) => {
    button.addEventListener('mouseover', () => {
        button.style.backgroundColor = '#d63170';
    })
})
opButtons.forEach((button) => {
    button.addEventListener('mouseout', () => {
        button.style.backgroundColor = '#ff418a'
    })
})

let clearButton = document.querySelector('.clear-button');
clearButton.addEventListener('click', () => {
    displayValue.textContent = '';
    decimalClicked = false;
})
clearButton.addEventListener('mouseover', () => {
    clearButton.style.backgroundColor = '#d63170';
})
clearButton.addEventListener('mouseout', () => {
    clearButton.style.backgroundColor = '#ff418a'
})


let equalsButton = document.querySelector('.equals-button');
equalsButton.addEventListener('click', () => {
    let answer = calcDisplayValue(displayValue.textContent);
    displayValue.textContent = answer;
})
equalsButton.addEventListener('mouseover', () => {
    equalsButton.style.backgroundColor = '#d63170';
})
equalsButton.addEventListener('mouseout', () => {
    equalsButton.style.backgroundColor = '#ffd0e2'
})

let decimalButton = document.querySelector(".decimal-button");
decimalButton.addEventListener('click', () => {
    if (decimalClicked == false) {
        displayValue.textContent += decimalButton.value;
        decimalClicked = true;
    } else {
        displayValue.textContent += '';
    }
})
decimalButton.addEventListener('mouseover', () => {
    decimalButton.style.backgroundColor = '#d63170';
})
decimalButton.addEventListener('mouseout', () => {
    decimalButton.style.backgroundColor = '#ffd0e2'
})

let backspaceButton = document.querySelector(".backspace-button");
backspaceButton.addEventListener('click', () => {
    textForArray = displayValue.textContent;
    arrayForBackspace = textForArray.split('');
    arrayForBackspace.splice(-1, 1);
    let backspaceString = arrayForBackspace.join('');
    displayValue.textContent = backspaceString;
})
backspaceButton.addEventListener('mouseover', () => {
    backspaceButton.style.backgroundColor = '#d63170';
})
backspaceButton.addEventListener('mouseout', () => {
    backspaceButton.style.backgroundColor = '#ff418a'
})