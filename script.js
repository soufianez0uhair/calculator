// function that adds two numbers
function add(a,b) {
    return a + b;
}
// function that substract two numbers
function substract(a, b) {
    return a - b;
}
// function that multiply two numbers
function multiply(a, b) {
    return a * b;
}
// function that divide two numbers
function divide(a,b) {
    return a / b;
}
// function that takes two numbers and the choosing one
function operator(a,b,op) {
    switch(op) {
        case "+":
            return a + b;
            break;
        case "-":
            return a - b;
            break;
        case "/":
            return a / b;
            break;
        case "*":
            return a * b;
            break;
        default:
            return "invalid operator";
            break;
    }
}
