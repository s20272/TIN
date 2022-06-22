let calculateFactorialRecursion =  function (number) {
    if (number < 0)
        return -1;
    else if (number === 0)
        return 1;
    else {
        return (number * calculateFactorialRecursion(number - 1));
    }
}

function calculateFactorialIterable(number) {
    if (number === 0 || number === 1)
        return 1;
    for (let i = number - 1; i >= 1; i--) {
        number *= i;
    }
    return number;
}


const recursionResult = calculateFactorialRecursion(5);
console.log(`Recursion result: ${recursionResult}`)

const iterateResult = calculateFactorialIterable(5);
console.log(`Iterate result: ${iterateResult}`)

