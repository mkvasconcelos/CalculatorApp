let operator = 0
let number1 = 0
let number2 = 0

function button(button) {
    if (operator === 0) {
        if (document.getElementById("display").innerHTML == 0) {
            document.getElementById("display").innerHTML = button
        } else {
            document.getElementById("display").innerHTML = document.getElementById("display").innerHTML.concat(button)
        }
    } else {
        document.getElementById("display").innerHTML = button
    }
    // document.getElementById("display").innerHTML = button
    number2 = document.getElementById("display").innerHTML
    return number2
}

function prevButton() {
    number1 = document.getElementById("display").innerHTML
    return number1
}

function oper(oper) {
    if (operator === 0) {
        operator = oper
    } else {
        result(number1, number2, operator)
        operator = oper
    }
    return operator
}

function result(num1, num2, oper) {
    answer = eval(num1 + oper + num2)
    document.getElementById("display").innerHTML = answer
    operator = 0
    return operator
}

function inverse() {
    document.getElementById("display").innerHTML *= -1
}

function percentage() {
    document.getElementById("display").innerHTML /= 100
}

function reset() {
    document.getElementById("display").innerHTML = 0
    number1, number2, operator = 0, 0, 0
    return number1, number2, operator
}
