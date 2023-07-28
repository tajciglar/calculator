let display = document.querySelector("#display");

let operator = null;
const number = [];

// Set a flag to indicate if the event is a keyboard event
let isKeyboardEvent = false;

// shows on display
function showOnDisplay(value) {
    if (!isKeyboardEvent) {
        display.value += value;
    }
    
    // when '=' is clicked its calling the function operate
    if (value === '=' || value ==='Enter') {
        display.value = operate(number).toFixed(2);
    }
    // checking if value is a number or not 
    if (isNaN(parseFloat(value)) && value != '.') {
        number.push(value);
    // if value is a number 
    } else if (value === '.') {
        const lastNumber = number[number.length - 1];

        // If the last number already contains a decimal point, don't add another.
        if (!lastNumber.includes('.')) {
            number[number.length - 1] += value;
        }

    } else {

        const lastNumber = number[number.length-1];

        if (lastNumber && !isNaN(parseFloat(lastNumber))) {

            number[number.length-1] += value;

        } else {
            number.push(value);
        }
    }

    number.forEach((num, index) => {
        number[index] = num.replace(/(\.\d*)\./, '$1');
    });

    
}
    

// clears the display
function clearDisplay() {
    display.value = '';
    number.length = 0;
}
function operate(number) {
    result = parseFloat(number[0]);
    // console.log(number);
    let currentOperator = null;

    for (let i = 1; i < number.length; i++) {
        const value = number[i];
        
        if (!isNaN(parseFloat(value))) {
            const currentValue = parseFloat(value);
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
    
    return result;
}

const input = document.getElementById("display");

// Add focus and blur event listeners to detect keyboard input
input.addEventListener("focus", () => {
    isKeyboardEvent = true;
});

input.addEventListener("blur", () => {
    isKeyboardEvent = false;
});

// Use keyup event to handle keyboard input
input.addEventListener("keydown", function (event) {
    const key = event.key;
    
    showOnDisplay(key);
});
