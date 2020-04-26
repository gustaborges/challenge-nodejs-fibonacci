const prompt = require('prompt-sync')();
const isFibonacci = require('./fibonacci.js');

console.log('Program started. Type \'quit\' in order to stop.');
console.log('This programs verifies wheter a given number is part of the Fibonacci sequence.\n');

let input;
do  {
    input = prompt('Number to be checked: ');
    console.log(`It's ${isFibonacci(input)} that "${input}" is part of Fibonacci\n`);
} while(input !== 'quit');

