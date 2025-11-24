const fs = require('fs'); // Import fs module
const number = fs.readFileSync(0, 'utf-8'); // Read input file

const printDivisors_bruteForce = (number) => {
  let divisors = [];
  for (let i = 1; i <= number; i++) {
    if (number % i === 0) divisors.push(i);
  }
  return divisors;
};

const printDivisors_optimal = function (number) {
  let divisors = [];
  for (let i = 1; i <= Math.sqrt(number); i++) {
    if (number % i === 0 && i !== Math.sqrt(number)) {
      divisors.push(i);
      divisors.push(number / i);
    } else if (number % i === 0 && i === Math.sqrt(number)) {
      divisors.push(i);
    }
  }
  return divisors;
};

console.log(printDivisors_optimal(number));
