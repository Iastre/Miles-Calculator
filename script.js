let firstInput = document.getElementById("firstNum");
let secondInput = document.getElementById("secondNum");
let radios = document.getElementsByName("operator");
let display = document.getElementById("result");

const OPS = [ "add", "subtract", "multiply", "divid" ];

function getOperator()
{
    for (let i = 0; (i < radios.length) && (i < 4); i++)
    {
        if (radios[i].checked)
        {
            return i;
        }
    }
    return 0;
}

function operate(num1, num2, op)
{
    let ret = 0;
    switch (op)
    {
        default:
        case 0:
            ret = num1 + num2;
            break;
        case 1:
            ret = num1 - num2;
            break;
        case 2:
            ret = num1 * num2;
            break;
        case 3:
            ret = num1 / num2;
            break;
    }
    return ret;
}

function calculate()
{
    let firstNum = parseInt(firstInput.value);
    if (firstInput.value == "") firstNum = 0;
    let secondNum = parseInt(secondInput.value);
    if (secondInput.value == "") secondNum = 0;
    if (isNaN(firstNum) || isNaN(secondNum))
    {
        display.innerHTML = "You seem to have somehow entered a non-number input. Please don't do that!";
        return;
    }
    let operator = getOperator();
    if ((secondNum == 0) && (operator == 3))
    {
        display.innerHTML = "You tried to divide by 0. Please don't do that!";
        return;
    }
    let result = operate(firstNum, secondNum, operator);
    let resultText = "The result of " + OPS[operator] + "ing " + firstNum + " and " + secondNum + " is " + result + ".";
    display.innerHTML = resultText;
}

function clearDisplay()
{
    firstNum.value = "";
    secondNum.value = "";
    firstNum.focus();
    radios[0].checked = true;
    display.innerHTML = "Please enter an equation.";
}
