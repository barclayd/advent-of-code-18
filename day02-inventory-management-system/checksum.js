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
// console.log(boxIDs[0]);
let charInID = {}
try {
    for (let id in boxIDs) {
        let record = (boxIDs[id]);
        for (let char in record) {
            // console.log(record[char]);
            if (charInID[record[char]] = 1) {
                charInID[record[char]] += 1;
            }
            charInID[record[char]] = 1;
        }
    }
} catch (e) {
    let error = e;
}

console.log(charInID['a']);