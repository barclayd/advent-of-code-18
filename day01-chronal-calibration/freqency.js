const fs = require('fs');
const path = require('path');
const {
    performance
} = require('perf_hooks');

/*
Part 1
*/

const reducer = (accumulator, currentValue) => accumulator + currentValue;


// get input from provided .txt of numbers
const input = fs.readFileSync(path.resolve(__dirname, 'input.txt'), {
    encoding: 'UTF-8'
});

// get numbers into an array
const numbers = input.trim().split('\n').map(number => parseInt(number));
const sumOfNumbers = numbers.reduce(reducer);

console.log(sumOfNumbers);

/*
Answer: 531
*/