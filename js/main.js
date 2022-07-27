var operator = 0
var number1 = 0
var number2 = 0
var answer = 0
var clicks = 0

function button(button) {
    if (button === "." && document.getElementById("display").innerHTML.indexOf(".") != -1) {
        return
    }
    if (clicks == 0) {
        if (button === ".") {
            document.getElementById("display").innerHTML = "0."
        } else {
            document.getElementById("display").innerHTML = button
        }
    } else {
        document.getElementById("display").innerHTML = document.getElementById("display").innerHTML.concat(button)
    }
    number2 = document.getElementById("display").innerHTML
    answer = 0
    clicks += 1
    return number2, answer
}

function oper(oper) {
    if (operator === 0) {
        operator = oper
    } else {
        result(number1, number2, operator)
        operator = oper
    }
    number1 = number2
    clicks = 0
    return operator, clicks
}

function result(num1, num2, oper) {
    if (oper == 0) {
        return
    }
    answer = eval(num1 + oper + num2)
    document.getElementById("display").innerHTML = answer
    number2 = answer
    operator = 0
    clicks = 0
    return operator, answer, number1
}

function inverse() {
    document.getElementById("display").innerHTML *= -1
    number2 = document.getElementById("display").innerHTML
    clicks = 0
}

function percentage() {
    document.getElementById("display").innerHTML /= 100
    number2 = document.getElementById("display").innerHTML
    clicks = 0
}

function reset() {
    document.getElementById("display").innerHTML = 0
    number1 = 0
    number2 = 0
    operator = 0
    clicks = 0
    answer = 0
    return number1, number2, operator, clicks, answer
}
