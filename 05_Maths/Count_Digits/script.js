const fs = require('fs'); // Import fs module
const number = fs.readFileSync(0, 'utf-8'); // Read input file

const countDigits_naive = (number) => {
  let count = 0;

  while (number > 0) {
    count++;
    number = Math.floor(number / 10);
  }

  return count;
};

const countDigits_optimal = (number) => Math.floor(Math.log10(number) + 1);

const digitsCount = countDigits_optimal(number);
console.log(`${number} has ${digitsCount} digits...`);
