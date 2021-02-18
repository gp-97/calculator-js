const display = document.querySelector(".display");

let firstNum = "+";
let secondNum = "";
let operator = "";
let answer = 0;

function clearDisplay(arg = false) {
    if (!arg) {
        display.innerHTML = "";
    } else {
        display.innerHTML = "0";
        firstNum = "+";
        secondNum = "";
        operator = "";
    }

}

function appendNum(num) {
    if (operator === "") {
        firstNum += num.toString();
        if (firstNum.charAt(0) === "+")
            display.innerHTML = firstNum.slice(1);
        else
            display.innerHTML = firstNum;
    } else {
        secondNum += num.toString();
        display.innerHTML = secondNum;
    }
}

function checkOperator(op) {
    if (firstNum === "+") {
        switch (op) {
            case '-':
                firstNum = op + firstNum.slice(1);
                break;
            default:
                break;
        }
    } else {
        setOperator(op);
    }
}

function setOperator(op) {
    if ((operator === "") && ((firstNum.length > 1) && (firstNum.charCodeAt(1) >= 48) && (firstNum.charCodeAt(1) <= 57)) || ((firstNum.length === 1) && (firstNum.charCodeAt(0) >= 48) && (firstNum.charCodeAt(0) <= 57))) {
        operator = op;
        clearDisplay();
    } else {
        if (secondNum != "") {
            calcAnswer();
            if (answer >= 0) {
                firstNum = "+" + answer.toString();
            } else {
                firstNum = answer.toString();
            }
            secondNum = "";
            operator = op;
        } else if ((op === '-') && (secondNum === "")) {
            secondNum = "-" + secondNum;
            display.innerHTML = secondNum;
        } else {
            firstNum = "+";
            secondNum = "";
            operator = "";
            display.innerHTML = "Syntax error";
        }
    }

}

function calcAnswer() {
    const num1 = parseFloat(firstNum);
    const num2 = parseFloat(secondNum);
    switch (operator) {
        case '/':
            answer = num1 / num2;
            break;
        case '*':
            answer = num1 * num2;
            break;
        case '+':
            answer = num1 + num2;
            break;
        case '-':
            answer = num1 - num2;
        default:
            break;
    }
    if (((answer % 1)!=0) || ((Math.LN10(answer)+1) > 5)) {
        answer = answer.toExponential(4);
    }
    display.innerHTML = answer.toString();
}
