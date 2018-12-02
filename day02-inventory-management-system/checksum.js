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


// get input from provided .txt of numbers
const input = fs.readFileSync(path.resolve(__dirname, 'puzzle-input.txt'), {
    encoding: 'UTF-8'
});

// get numbers into an array
const boxIDs = input.trim().split('\n').map(id => (id));

let twice = 0;
let thrice = 0;

boxIDs.forEach(id => {
    const count = {};
    for (let letters in id) {
        const char = id[letters];
        count[char] = (count[char] || 0) + 1;
    }

    let appearsTwice = false;
    let appearsThrice = false;

    for (let appears in count) {
        console.log(count[appears]);
        if (count[appears] === 2 && !appearsTwice) {
            twice++;
            appearsTwice = true;
        }
        if (count[appears] === 3 && !appearsThrice) {
            thrice++;
            appearsThrice = true;
        }
    }
    const checksum = twice * thrice;
    console.log(checksum);
    // Answer: 5928
});