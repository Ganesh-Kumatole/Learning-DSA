const fs = require('fs');

const rawInput = fs.readFileSync(0, 'utf-8');

const numbers = rawInput.trim().split('\n').map(Number);

const sum = numbers.reduce((accumulator, current) => accumulator + current, 0);

console.log(`The sum is: ${sum}`);
