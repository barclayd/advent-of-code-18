const fs = require('fs');
const path = require('path');
const {
    performance
} = require('perf_hooks');

/*
******
Part 1
******
*/

const reducer = (accumulator, currentValue) => accumulator + currentValue;


// get input from provided .txt of numbers
const input = fs.readFileSync(path.resolve(__dirname, 'input.txt'), {
    encoding: 'UTF-8'
});

let part1Start = performance.now();

// get numbers into an array
const numbers = input.trim().split('\n').map(number => parseInt(number));
const sumOfNumbers = numbers.reduce(reducer);

console.log(sumOfNumbers);
console.log('Runtime - Part 1:', performance.now() - part1Start);

// Answer: 531

/*
******
Part 2
******
*/

let combinedFrequency = 0;
let frequencies = {};

let part2Start = performance.now();
while (true) {
    // makes an object of all values - checks in try loop if a key-pair value already exists
    // hence a duplicate is found
    try {
        numbers.forEach(freq => {
            combinedFrequency += freq;

            // end try catch when a duplicate is found
            if (frequencies[combinedFrequency.toString()] !== undefined) {
                throw 'first duplicate number has been found';
            }

            frequencies[combinedFrequency.toString()] = combinedFrequency
        })
    } catch (error) {
        break;
    }
}
console.log(combinedFrequency);
let part2End = performance.now();
console.log('Runtime - Part 2:', part2End - part2Start);

// Answer: 76787