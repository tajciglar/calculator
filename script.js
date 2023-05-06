const container = document.querySelector('#container');
let display = document.querySelector("#display");

let operator = null;
const number = [];

// shows on display
function showOnDisplay(value) {

    display.value += value;
    // when '=' is clicked its calling the function operate
    if (value === '=') {
        display.value = operate(number);
    }
    if (isNaN(parseInt(value))) {
        number.push(value);
    } else {
        const lastNumber = number[number.length-1];

        if (lastNumber && !isNaN(parseFloat(lastNumber))) {
            number[number.length-1] += value;
        } else {
            number.push(value);
        }
    }
}
    

// clears the display
function clearDisplay(value, result) {
    display.value = '';
    const number = [];
    
}

function operate(number) {

    let result = parseInt(number[0]);
    let currentOperator = null;

    for (let i = 1; i < number.length; i++) {
    const value = number[i];

    if (!isNaN(parseInt(value))) {
        const currentValue = parseInt(value);

        if (currentOperator === '+') {
        result += currentValue;
        } else if (currentOperator === '-') {
        result -= currentValue;
        } else if (currentOperator === '*') {
        result *= currentValue;
        } else if (currentOperator === '/') {
        result /= currentValue;
        }
    } else {
        currentOperator = value;
    }
    }
    return(result)
}
