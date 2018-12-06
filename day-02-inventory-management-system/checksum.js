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
    // Answer: 5928
});

/*
******
Part 2
******
*/

// cycle through letters in boxID[0] and boxID[1] and so on...
for (let i = 0; i < boxIDs.length; i++) {
    for (let j = i + 1; j < boxIDs.length; j++) {
        // spread operator converts a string into an array of characters
        const charI = [...boxIDs[i]];
        const charJ = [...boxIDs[j]];

        // calculate how big the difference is between the 2 sets of letters
        let difference = charI.reduce((accumulator, currentValue, i) => accumulator + (currentValue === charJ[i] ? 0 : 1), 0);
        // if the difference is just 1, we have found our 2 common boxIDs to generate the common boxID list of letters
        if (difference === 1) {
            console.log(`Part 2 Answer: ${boxIDs[i]}, ${boxIDs[j]}`);
        }
    }
}

/*
Similar boxIDs:
bqlporuexkwzyabnxmgjqctvfs
bqlporuexkwzyabnzmgjqctvfs
******
Answer: bqlporuexkwzyabnmgjqctvfs
*/