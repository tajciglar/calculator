const container = document.querySelector('#container');
let display = document.querySelector("#display");

let temp = null;
let operator = null;
let flag = null;
let number1 = "";
let number2 = "";
// shows on display
function showOnDisplay(value) {

    display.value += value;
   
}
    

// clears the display
function clearDisplay(value) {
    display.value = '';
}

function add() {
    display.value = number1 + number2;
}
function substract() {
    display.value = number1 - number2;
}
function multiply() {
    display.value = number1 * number2;
}
function divide() {
    display.value = number1 / number2;
}

function operate(equation) {
    console.log(equation)

    number1

    if (operator == '+')
    {
        add(number1, number2);
    }
    else if (operator == '-')
    {
        substract(number1, number2);
    }
    else if (operator == '*')
    {
        multiply(number1, number2);
    }
    else if (operator == '/')
    {
        divide(number1, number2);
    }
}
 /* let buttons = document.querySelectorAll("button");
function calculate() {
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            do{

            } while(button.classList.contains(sign));
        });
    });
}
*/