const fs = require('fs'); // Import fs module
const number = fs.readFileSync(0, 'utf-8'); // Read input file

const digits = (number) => {
  let count = 0;
  while (number > 0) {
    number = Math.floor(number / 10);
    count++;
  }
  return count;
};

const isArmstrong = (number) => {
  const originalNum = number;
  const digitsOfNum = digits(number);
  let sum = 0;

  while (number > 0) {
    let digit = number % 10;
    sum += Math.pow(digit, digitsOfNum);
    number = Math.floor(number / 10);
  }

  return sum == originalNum;
};

console.log(isArmstrong(number));
