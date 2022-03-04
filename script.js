const btns = document.querySelectorAll('.btn')
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
// function that display numbers to the screen
function display(id){
    const num = document.querySelector('.displayed-number');
    num.textContent = num.textContent + id;
}
//function handleClick
function handleClick() {
    btns.forEach(btn => btn.addEventListener('click', () => display(btn.id)))
}
handleClick()

