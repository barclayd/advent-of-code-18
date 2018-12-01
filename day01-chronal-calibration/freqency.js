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

// get numbers into an array
const numbers = input.trim().split('\n').map(number => parseInt(number));
const sumOfNumbers = numbers.reduce(reducer);

console.log(sumOfNumbers);

// Answer: 531

/*
******
Part 2
******
*/

let combinedFrequency = 0;
let frequencies = {};

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

// Answer: 76787