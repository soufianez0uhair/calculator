let currentNum = '';
let previousNum = '';
let operator = '';
let currentDisplayedNum = document.querySelector('.displayed-number');
let previousDisplayedNum = document.querySelector('.previous-num');
let btns = document.querySelectorAll('.btn');
btns.forEach(btn => btn.addEventListener('click', (e) => handleClick(e.target.textContent)));
function operate(op,a,b) {
    a = Number(a);
    b = Number(b);
    switch(op) {
        case "+":
            return a + b;
            break;
        case "-":
            return a - b;
            break;
        case "x":
            return a * b;
            break;
        case "/":
            return a / b;
            break;
        default:
            break;
    }
}
function handleClick(id) {
    switch(id) {
        case "+":
        case "-":
        case "/":
        case "x":
            operator = id;
            previousNum = currentNum;
            previousDisplayedNum.textContent = `${previousNum} ${id}`;
            currentDisplayedNum.textContent = '';
            currentNum = "";
            break;
        case "=":
            previousDisplayedNum.textContent = '';
            currentNum = operate(operator,previousNum,currentNum);
            previousNum = currentNum;
            currentDisplayedNum.textContent = currentNum;
            break;
        case "clear":
            currentNum = '';
            previousNum = '';
            currentDisplayedNum.textContent = '';
            break;
        default:
            currentNum = currentNum.toString();
            previousNum = previousNum.toString();
            if(currentNum.length < 6) {
                currentNum += id;
                currentDisplayedNum.textContent = currentNum;
                break;
            }
    }
}
