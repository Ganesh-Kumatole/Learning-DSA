const fs = require('fs'); // Import fs module
const input = fs.readFileSync(0, 'utf-8'); // Read input file

const negative = input >= 0 ? false : true;

let num = Math.abs(input);

let i = Math.floor(Math.log10(num) + 1); // Digits count of num

const reverseNumber = (num) => {
  let revNum = 0;

  while (num > 0) {
    const currentLastDigit = num % 10;
    revNum += currentLastDigit * Math.pow(10, i - 1);
    num = Math.floor(num / 10);
    i--;
  }

  return revNum;
};

if (!negative) {
  console.log(reverseNumber(num));
} else {
  console.log(-reverseNumber(num));
}
