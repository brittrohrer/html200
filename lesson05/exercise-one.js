function squareButton() {
    let input = prompt('Hey, give me a number');
    let squareResult = 0;

    squareResult = Number(input) * Number(input);

    alert(squareResult);
}

function multiplierButton() {
    let number1 = prompt('Give me the first number');
    let number2 = prompt('Give me a second number');
    let multiplierResult = 0;

    multiplierResult = Number(number1) * Number(number2);

    alert(multiplierResult);
}
