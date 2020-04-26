
function fibonacci() {
    return calcFibonacciUntilExceeds(350);
}


function calcFibonacciUntilExceeds(numberThreshold) {
    const sequence = [0, 1];

    const lastFibonacci = () => sequence[sequence.length - 1];
    const penultimateFibonacci = () => sequence[sequence.length - 2];

    let nextNumber = lastFibonacci();

    do {
        nextNumber += penultimateFibonacci()
        sequence.push(nextNumber);

    } while(lastFibonacci() <= numberThreshold);

    return sequence;
}


module.exports = isFibonacci = (number) => {
    number = parseInt(Number(number));

    if(number === NaN)
        return false;
        
    return fibonacci().includes(number);
}