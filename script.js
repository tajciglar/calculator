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
    if (value === '=') operate(number1,number2, operator);

    if (flag === 1){
        number2 += value;
    }
    else{
        if (isNaN(parseInt(value)))
        {
            operator = value;
            flag = 1;
        }
        else
        {
            number1 += value;
        }
    }
 
}
    

// clears the display
function clearDisplay(value) {
    display.value = '';
}

function add(n1, n2) {
    display.value = n1 + n2;
}
function substract() {
    display.value = n1 - n2;
}
function multiply() {
    display.value = n1 * n2;
}
function divide() {
    display.value = n1 / n2;
}

function operate(number1, number2, operator) {

    // converson from string to int
    let n1 = parseInt(number1);
    let n2 = parseInt(number2);

    if (operator == '+')
    {
        add(n1, n2);
    }
    else if (operator == '-')
    {
        substract(n1, n2);
    }
    else if (operator == '*')
    {
        multiply(n1, n2);
    }
    else if (operator == '/')
    {
        divide(n1, n2);
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